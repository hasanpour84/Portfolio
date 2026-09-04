import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with Mohsen Hasanpour for independent design work." };

export default function ContactPage() {
  return <main className="page"><header className="contact-hero"><span className="eyebrow">Contact / New projects & conversations</span><h1>Something Worth <em>Making?</em></h1><p>Tell me a little about the problem you’re trying to solve. I’ll get back to you within two working days.</p></header><section className="contact-layout"><div className="contact-details"><h2>Prefer a Direct Line?</h2><a href={`mailto:${site.email}`}>{site.email}</a>{site.socialLinks.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div><ContactForm /></section></main>;
}
