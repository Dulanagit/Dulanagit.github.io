function Card({ title, summary, href, image, tags, meta, variant }) {
  const heading = href ? (
    <a className="card-link" href={href} target="_blank" rel="noreferrer">
      {title}
    </a>
  ) : (
    title
  );

  return (
    <article className={variant ? `card card-${variant}` : 'card'}>
      {image ? (
        <img className="card-image" src={image} alt="" />
      ) : (
        <div className="card-image card-image-placeholder" aria-hidden="true" />
      )}
      <div className="card-body">
        {meta ? <p className="card-meta">{meta}</p> : null}
        <h3 className="card-title">{heading}</h3>
        {summary ? <p className="card-summary">{summary}</p> : null}
        {tags?.length ? (
          <ul className="tag-list">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export default Card;
