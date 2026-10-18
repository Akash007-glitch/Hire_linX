'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your message.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit message. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white shadow-[0_12px_40px_rgba(7,31,61,0.08)] border border-slate-200/80 p-8 sm:p-10 rounded-3xl space-y-5 relative"
    >
      {/* Success Banner */}
      {status === 'success' && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="flex-1 text-sm">
            <p className="font-bold text-emerald-900">Message Sent Successfully!</p>
            <p className="text-emerald-700 mt-0.5">
              Thank you for reaching out. Your details have been submitted and our team will get in touch with you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-3 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {status === 'error' && (
        <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-3 text-xs sm:text-sm animate-fadeIn">
          <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Name Input */}
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
        >
          Name <span className="text-rose-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          disabled={status === 'loading'}
          className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none transition-all text-sm sm:text-base disabled:opacity-60"
        />
      </div>

      {/* Phone Number Input */}
      <div>
        <label
          htmlFor="phone"
          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
        >
          Phone number <span className="text-rose-500">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          disabled={status === 'loading'}
          className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-400 focus:outline-none transition-all text-sm sm:text-base disabled:opacity-60"
        />
      </div>

      {/* Message Input */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
        >
          Message <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help?"
          disabled={status === 'loading'}
          className="w-full bg-slate-50/80 hover:bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-4 py-3.5 text-slate-900  focus:outline-none resize-none transition-all text-sm sm:text-base disabled:opacity-60"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-cut-br bg-[#5fa8d3] hover:bg-[#4a97c4] text-white font-medium py-3.5 transition-all shadow-md hover:shadow-lg active:translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending to Sheet...</span>
          </>
        ) : (
          <>
            <Mail className="w-4 h-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
};
