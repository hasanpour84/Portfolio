import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Mohsen Hasanpour is an independent designer working across product, brand, and digital experience.",
};

const highlights = [
  ["10+ years", "Shaping digital products and brands"],
  ["Global", "Remote-friendly, based wherever the work is"],
  ["Small teams", "Close collaboration, senior attention"],
  ["Big questions", "Useful ambition over surface-level change"],
];

export default function AboutPage() {
  return <main className="page">
    <header className="about-hero"><span className="eyebrow">About / A small practice with a wide lens</span><h1>Design With a <em>Reason</em> to Exist.</h1></header>
    <section className="about-grid" aria-labelledby="about-title"><span className="eyebrow">A little about me</span><div><h2 id="about-title" className="sr-only">About Mohsen Hasanpour</h2><p>I’m Mohsen Hasanpour, an independent designer working across product, brand, and digital experience. I partner with founders and teams who care about making something genuinely useful—not just new.</p><p>My practice balances strategic curiosity with meticulous craft. I like digging into the messy middle, giving teams a shared language, and turning a strong point of view into an experience people can feel.</p><div className="highlights">{highlights.map(([title, description]) => <article className="highlight" key={title}><b>{title}</b><span>{description}</span></article>)}</div></div></section>
    <section className="section statement" aria-labelledby="principles-title"><span className="eyebrow">Principles</span><h2 id="principles-title">Make the Complex Feel <em>Natural.</em> Respect People’s Time. Sweat the Details That Build Trust.</h2></section>
  </main>;
}
