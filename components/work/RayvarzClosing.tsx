import Image from "next/image";

const cover = "/images/rayvarz/rayvarz-cover-homepage.jpg";

export function RayvarzClosing() {
  return (
    <>
      <section className="design-leadership" aria-labelledby="leadership-title">
        <span className="eyebrow">Design leadership</span>
        <h2 id="leadership-title">A Shared Direction for Complex Work.</h2>
        <p>
          I created shared decision-making tools for the team, translated broad
          goals into a focused product vision, and maintained a consistent
          quality bar from concept through implementation.
        </p>
      </section>

      <figure className="full-visual">
        <Image
          src={cover}
          alt="Rayvarz design process and workshop"
          fill
          sizes="100vw"
        />
        <figcaption>A working system built for focus, flexibility, and real-world use.</figcaption>
      </figure>
    </>
  );
}
