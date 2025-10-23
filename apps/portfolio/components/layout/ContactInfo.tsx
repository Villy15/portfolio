import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactInfo() {
  const contactInfo = [
    { label: 'Philippines, Metro Manila', type: 'location', icon: MapPin },
    { label: '+63 915 194 4467', href: 'tel:+639151944467', type: 'phone', icon: Phone },
    { label: 'adrianvill07@gmail.com', href: 'mailto:adrianvill07@gmail.com', type: 'email', icon: Mail },
  ];

  return (
    <section className="mt-6 flex flex-wrap gap-3 text-sm md:gap-4">
      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <item.icon className="text-muted-foreground h-4 w-4 flex-shrink-0" />
          {item.href ? (
            <a
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-primary hover:underline"
              target={item.type === 'website' ? '_blank' : undefined}
              rel={item.type === 'website' ? 'noopener noreferrer' : undefined}
            >
              {item.label}
            </a>
          ) : (
            <span className="text-muted-foreground">{item.label}</span>
          )}
          {index < contactInfo.length - 1 && <span className="text-muted-foreground mx-2">•</span>}
        </div>
      ))}
    </section>
  );
}
