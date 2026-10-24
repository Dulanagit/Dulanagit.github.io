function Section({ id, title, kicker, tone, children }) {
  const toneClass = tone ? ` section-${tone}` : '';

  return (
    <section id={id} className={`section${toneClass}`}>
      <div className="container">
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        {title ? <h2 className="section-title">{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

export default Section;
