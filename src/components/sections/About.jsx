import { about } from '../../data/about';
import Section from '../ui/Section';
import ShowMore from '../ui/ShowMore';

function About() {
  const major = about.education.find((item) => item.kind === 'major');
  const otherEducation = about.education.filter((item) => item.kind !== 'major');

  return (
    <Section id="about" kicker="About" title="Background">
      <div className="subsection">
        <h3 className="subsection-title">Bio</h3>
        <p className="prose">{about.bio}</p>
      </div>

      <div className="subsection">
        <h3 className="subsection-title">Education</h3>
        {major ? (
          <article className="featured-block">
            <p className="card-meta">
              {major.status} · {major.year}
            </p>
            <h4>{major.title}</h4>
            <p>{major.org}</p>
          </article>
        ) : null}
        <ShowMore items={otherEducation} limit={3}>
          {(items) => (
            <ul className="pill-list">
              {items.map((item) => (
                <li key={item.id} className="pill">
                  <strong>{item.title}</strong>
                  <span>
                    {item.org} · {item.status} · {item.year}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </ShowMore>
      </div>

      <div className="subsection">
        <h3 className="subsection-title">Tech stack</h3>
        <ul className="tech-grid">
          {about.techStack.map((item) => (
            <li key={item.id} className="tech-item">
              <span className="tech-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export default About;
