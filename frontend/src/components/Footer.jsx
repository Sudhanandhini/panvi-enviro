import { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5001';

export default function Footer() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(`${API_BASE}/api/quick-enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please try again.');
    }
  };

  const hours = [
    { day: 'Monday', time: '9.30 - 6.30' },
    { day: 'Tuesday', time: '9.30 - 6.30' },
    { day: 'Wednesday', time: '9.30 - 6.30' },
    { day: 'Thursday', time: '9.30 - 6.30' },
    { day: 'Friday', time: '9.30 - 6.30' },
    { day: 'Saturday', time: '9.30 - 6.30' },
    { day: 'Sunday', time: 'Holiday' },
  ];

  return (
    <footer className="footer-bg text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <p className="text-sm text-gray-300 leading-relaxed mb-5">
            PANVI Serve is an Environmental Health and Safety service provider and offering various kinds of high-quality services in and around Karnataka. The team consists of qualified and well-trained professionals with extensive experience.
          </p>
          <h4 className="text-primary font-semibold mb-3">Contact us</h4>
          <p className="text-sm">Tel: <a href="tel:+919945096328" className="text-primary hover:underline">+91 99450 96328</a></p>
          <p className="text-sm">Email: <a href="mailto:info@panvienvirotech.com" className="text-gray-300 hover:text-primary">info@panvienvirotech.com</a></p>
          <p className="text-sm">GST No: 29AALCP7470M1ZJ</p>
        </div>

        {/* Quick Enquiry */}
        <div>
          <h4 className="text-primary font-semibold text-lg mb-4">Quick Enquiry</h4>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                className="bg-white text-gray-800 text-sm px-3 py-2 w-full outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                className="bg-white text-gray-800 text-sm px-3 py-2 w-full outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={e => setForm({...form, subject: e.target.value})}
              className="bg-white text-gray-800 text-sm px-3 py-2 w-full outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={e => setForm({...form, message: e.target.value})}
              className="bg-white text-gray-800 text-sm px-3 py-2 w-full outline-none resize-none"
            />
            {status === 'sent' && (
              <p className="text-green-400 text-xs">Enquiry sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-xs">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-primary text-white px-6 py-2 text-sm font-semibold hover:bg-primary-dark transition-colors duration-200 uppercase tracking-wide disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Business Hours */}
        <div>
          <h4 className="text-primary font-semibold text-lg mb-4">Business Hour</h4>
          <div className="space-y-2">
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between text-sm border-b border-gray-700 pb-2">
                <span className="text-gray-300">{h.day}</span>
                <span className={h.time === 'Holiday' ? 'text-red-400' : 'text-gray-200'}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center">
        <p className="text-xs text-gray-500">© 2021, Panvi Enviro Tech Pvt. Ltd. | All rights reserved</p>
      </div>
    </footer>
  );
}
