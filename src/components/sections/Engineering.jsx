import { engineering } from '../../data/engineering';
import Card from '../ui/Card';
import Section from '../ui/Section';
import ShowMore from '../ui/ShowMore';

function Engineering() {
  return (
    <Section id="engineering" kicker="Engineering" title="Projects" tone="accent">
      <ShowMore items={engineering} limit={3}>
        {(items) => (
          <div className="card-grid">
            {items.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        )}
      </ShowMore>
    </Section>
  );
}

export default Engineering;
