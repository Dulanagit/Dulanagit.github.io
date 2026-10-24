import { academic } from '../../data/academic';
import Card from '../ui/Card';
import Section from '../ui/Section';
import ShowMore from '../ui/ShowMore';

function CardGrid({ items, variant }) {
  return (
    <ShowMore items={items} limit={3}>
      {(visible) => (
        <div className="card-grid">
          {visible.map((item) => (
            <Card key={item.id} {...item} variant={variant} />
          ))}
        </div>
      )}
    </ShowMore>
  );
}

function Academic() {
  return (
    <Section id="academic" kicker="Academic" title="Research and writing" tone="signal">
      <div className="subsection">
        <h3 className="subsection-title">Formal research</h3>
        <CardGrid items={academic.research} variant="paper" />
      </div>
      <div className="subsection">
        <h3 className="subsection-title">Implementations</h3>
        <CardGrid items={academic.implementations} />
      </div>
      <div className="subsection">
        <h3 className="subsection-title">Technical writing</h3>
        <CardGrid items={academic.writing} />
      </div>
    </Section>
  );
}

export default Academic;
