import { site } from '../../data/site';
import DigitalTwinSlot from '../twin/DigitalTwinSlot';
import Section from '../ui/Section';

function Contact() {
  return (
    <Section id="contact" kicker="Contact" title="Get in touch" tone="accent">
      <div className="contact-actions">
        <a className="button-primary" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a className="text-link" href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="text-link" href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <DigitalTwinSlot />
    </Section>
  );
}

export default Contact;
