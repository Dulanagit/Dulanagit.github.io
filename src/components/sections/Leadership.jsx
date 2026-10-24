import { leadership } from '../../data/leadership';
import Section from '../ui/Section';
import ShowMore from '../ui/ShowMore';

function Leadership() {
  return (
    <Section id="leadership" kicker="Leadership" title="Leadership and social impact">
      <ShowMore items={leadership} limit={3}>
        {(items) => (
          <ul className="role-list">
            {items.map((item) => (
              <li key={item.id} className="role-card">
                <p className="card-meta">{item.period}</p>
                <h3>
                  {item.href ? (
                    <a className="card-link" href={item.href} target="_blank" rel="noreferrer">
                      {item.role}
                    </a>
                  ) : (
                    item.role
                  )}
                </h3>
                <p className="role-org">{item.org}</p>
                <p className="card-summary">{item.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </ShowMore>
    </Section>
  );
}

export default Leadership;
