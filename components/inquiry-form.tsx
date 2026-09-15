'use client';

import { FormEvent, useState } from 'react';
import { companyInfo } from '@/lib/content';

type InquiryFormProps = {
  quote?: boolean;
};

export function InquiryForm({ quote = false }: InquiryFormProps) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const lines = Array.from(form.entries()).map(([label, value]) => `${label}: ${value}`);
    const number = companyInfo.whatsapp.replace(/\D/g, '');

    if (!number || number === 'REPLACE_WITH_WHATSAPP_NUMBER') {
      return;
    }

    window.open(`https://wa.me/${number}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="sr-only" htmlFor="name">Your name</label>
      <input id="name" name="Name" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-accent" placeholder="Your name (optional)" />
      {!quote ? <>
        <label className="sr-only" htmlFor="business">Business or farm name</label>
        <input id="business" name="Business or farm" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-accent" placeholder="Business or farm name" />
      </> : null}
      <label className="sr-only" htmlFor="contact">Phone or email</label>
      <input id="contact" name="Phone or email" required className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-accent" placeholder="Phone or email" />
      <label className="sr-only" htmlFor="buyerType">I am buying as</label>
      <select id="buyerType" name="Buyer type" defaultValue="" required className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-200 outline-none focus:border-accent">
        <option value="" disabled>I am enquiring as...</option>
        <option value="Farmer">Farmer</option>
        <option value="Butcher">Butcher</option>
        <option value="Restaurant or food business">Restaurant or food business</option>
        <option value="Household">Household</option>
        <option value="Other pork buyer">Other pork buyer</option>
      </select>
      <label className="sr-only" htmlFor="purchaseType">What do you want to buy?</label>
      <select id="purchaseType" name="What they want to buy" defaultValue="" required className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-slate-200 outline-none focus:border-accent">
        <option value="" disabled>What do you want to buy?</option>
        <option value="Piglets">Piglets</option>
        <option value="Breeding stock">Breeding stock</option>
        <option value="Pigs for meat">Pigs for meat</option>
        <option value="Pork supply">Pork supply</option>
        <option value="Not sure yet">I am not sure yet</option>
      </select>
      <label className="sr-only" htmlFor="quantity">Quantity or order size</label>
      <input id="quantity" name="Quantity or order size" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-accent" placeholder={quote ? 'How many pigs do you need?' : 'Quantity or order size'} />
      <label className="sr-only" htmlFor="location">Location</label>
      <input id="location" name="Location" required className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-accent" placeholder="Town/city and state in Nigeria" />
      <label className="sr-only" htmlFor="message">Message</label>
      <textarea id="message" name="Message" className="min-h-[100px] w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-accent" placeholder={quote ? 'Anything else we should know? (optional)' : 'Tell us about your needs'} />
      <button type="submit" className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-slate-950">Send via WhatsApp</button>
      {sent ? <p className="text-sm text-accent" role="status">Your WhatsApp message is ready to send.</p> : null}
      {!companyInfo.whatsapp || companyInfo.whatsapp.includes('REPLACE_') ? <p className="text-xs text-slate-400">Add your WhatsApp number to `.env.local` before publishing.</p> : null}
    </form>
  );
}