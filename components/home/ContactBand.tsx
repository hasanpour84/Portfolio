import Link from "next/link";

export function ContactBand() {
  return (
    <section className="contact-band" aria-labelledby="contact-band-title">
      <span className="eyebrow">Have a meaningful problem?</span>
      <h2 id="contact-band-title">
        Let’s Make Something People <em>Remember.</em>
      </h2>
      <Link href="/contact">Start a conversation ↗</Link>
    </section>
  );
}
