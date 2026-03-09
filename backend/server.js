require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const RECIPIENT = 'support@sunsys.in';

// ─── Footer Quick Enquiry Form ────────────────────────────────────────────────
app.post('/api/quick-enquiry', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email and message are required.' });
  }

  const mailOptions = {
    from: `"Panvi Enviro Website" <${process.env.SMTP_USER}>`,
    to: RECIPIENT,
    replyTo: email,
    subject: subject ? `Quick Enquiry: ${subject}` : 'Quick Enquiry from Website',
    html: `
      <h2 style="color:#1a3c6e;">Quick Enquiry – Panvi Enviro Tech</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;width:140px;">Name</td><td style="padding:8px;">${name}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Subject</td><td style="padding:8px;">${subject || '—'}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;">${message.replace(/\n/g, '<br/>')}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Enquiry sent successfully.' });
  } catch (err) {
    console.error('Quick enquiry mail error:', err);
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
  }
});

// ─── Contact Page Form ────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ success: false, error: 'First name, email and message are required.' });
  }

  const fullName = [firstName, lastName].filter(Boolean).join(' ');

  const mailOptions = {
    from: `"Panvi Enviro Website" <${process.env.SMTP_USER}>`,
    to: RECIPIENT,
    replyTo: email,
    subject: subject ? `Contact Form: ${subject}` : 'Contact Form Submission',
    html: `
      <h2 style="color:#1a3c6e;">Contact Form – Panvi Enviro Tech</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;font-weight:bold;width:140px;">Name</td><td style="padding:8px;">${fullName}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px;">${phone || '—'}</td></tr>
        <tr style="background:#f5f5f5;"><td style="padding:8px;font-weight:bold;">Service / Subject</td><td style="padding:8px;">${subject || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;">${message.replace(/\n/g, '<br/>')}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('Contact form mail error:', err);
    res.status(500).json({ success: false, error: 'Failed to send email. Please try again.' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
