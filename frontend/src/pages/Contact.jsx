import { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5001';

const serviceOptions = [
  'Sewage Water Treatment Plant',
  'Effluent Treatment Plant',
  'Common Effluent Treatment Plant',
  'Zero Liquid Discharge Plant',
  // 'Rain Water Harvesting System',
  'Industrial & Commercial RO Plant',
  'Water Softener',
  'Domestic RO Water Purifiers',
  'Demineralisation Plant',
  'Operation and Maintenance',
  'Calibrations and Services',
  'Supply of Spares',
  'Revamping and Optimization',
];

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    subject: 'Sewage Water Treatment Plant', message: ''
  });
  const [status, setStatus] = useState(null); // null | 'sending' | 'sent' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('sent');
        setForm({ firstName: '', lastName: '', email: '', phone: '', subject: 'Sewage Water Treatment Plant', message: '' });
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

  return (
    <div>
      {/* Page Header */}
      {/* <div className="bg-gray-100 py-6 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-secondary">Contact</h1>
          <p className="text-sm text-gray-500 mt-1">Home / Contact</p>
        </div>
      </div> */}

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 border border-gray-200 p-6 md:p-10 rounded shadow-sm">
          {/* Form */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="bg-nav-blue text-white text-xs font-semibold px-4 py-1 uppercase tracking-widest">CONTACT US</span>
              <h2 className="text-3xl font-bold mt-4" style={{fontFamily:'Raleway,sans-serif'}}>
                Get in <span className="text-primary italic">Touch</span>
              </h2>
            </div>

            {status === 'sent' && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-4 text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={e => setForm({...form, firstName: e.target.value})}
                  className="border border-gray-300 px-4 py-3 text-sm w-full outline-none focus:border-primary transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={e => setForm({...form, lastName: e.target.value})}
                  className="border border-gray-300 px-4 py-3 text-sm w-full outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                  className="border border-gray-300 px-4 py-3 text-sm w-full outline-none focus:border-primary transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  className="border border-gray-300 px-4 py-3 text-sm w-full outline-none focus:border-primary transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  className="border border-gray-300 px-4 py-3 text-sm w-full outline-none focus:border-primary transition-colors"
                />
                <select
                  value={form.subject}
                  onChange={e => setForm({...form, subject: e.target.value})}
                  className="border border-gray-300 px-4 py-3 text-sm w-full outline-none focus:border-primary transition-colors bg-white text-gray-600"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={e => setForm({...form, message: e.target.value})}
                className="border border-gray-300 px-4 py-3 text-sm w-full outline-none focus:border-primary transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-secondary text-white px-8 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-secondary-light transition-colors duration-200 w-full disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Submit Now'}
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-primary font-black text-xl leading-tight mb-6" style={{fontFamily:'Raleway,sans-serif'}}>
              PANVI ENVIRO<br />TECH PVT. LTD.
            </h3>

            <div className="mb-5">
              <div className="bg-nav-blue text-white text-xs font-semibold px-3 py-1 inline-block mb-3">Address :</div>
              <div className="bg-blue-50 border border-blue-100 p-4 rounded">
                <p className="text-sm text-gray-700 leading-relaxed">
                  #105, 8th Cross,  <br />
                 Vaishnavi Nagar, Kengeri,<br />
                 Bangalore – 560060
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  <strong>Landmark:</strong> Mysore road Kengeri Check-post
                </p>
              </div>
            </div>

            <div className="mb-5">
              <h4 className="text-primary font-semibold text-sm mb-2">Business Head :</h4>
              <p className="text-sm text-gray-700 font-medium">Mr. Shivakumar N</p>
              <p className="text-sm text-nav-blue mt-1">📞 +91 9036052837 / 38 / 39</p>
            </div>

            <div>
              <h4 className="text-primary font-semibold text-sm mb-2">Email :</h4>
              <p className="text-sm text-gray-600">✉ info@panvienvirotech.com</p>
              <p className="text-sm text-nav-blue mt-1">🌐 www.panvienvirotech.com</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 rounded overflow-hidden shadow-sm">
          <iframe
            title="Panvi Enviro Tech Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8435!2d77.4907!3d12.9141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f8c9e5b9d77%3A0x1234567890abcdef!2sKengeri%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
