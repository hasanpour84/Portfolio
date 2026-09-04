type ExpertiseGridProps = {
  headingId: string;
};

const expertise = [
  {
    title: "Product Design",
    description: "Digital products that earn a place in people’s lives.",
  },
  {
    title: "Brand Systems",
    description: "Identities with a point of view and room to grow.",
  },
  {
    title: "Design Direction",
    description: "Clarity, momentum, and a high bar for detail.",
  },
];

export function ExpertiseGrid({ headingId }: ExpertiseGridProps) {
  return (
    <div className="expertise" aria-labelledby={headingId}>
      <h2 id={headingId} className="sr-only">
        Focus Areas
      </h2>
      {expertise.map((item) => (
        <div key={item.title}>
          <b>{item.title}</b>
          <span>{item.description}</span>
        </div>
      ))}
    </div>
  );
}
