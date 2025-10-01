export default function ContactInfo() {
  const contactInfo = [
    { label: "Freelance Developer" },
    { label: "Philippines, Metro Manila" },
    { label: "+63 915 194 4467", href: "tel:+639151944467" },
    { label: "adrianvill07@gmail.com", href: "mailto:adrianvill07@gmail.com" },
    { label: "adrianvillanueva.com", href: "https://adrianvillanueva.com" },
  ];

  return (
    <section className="mt-4 p-4 space-y-2">
      {contactInfo.map((item, index) => (
        <div key={index} className="flex flex-row items-center">
          <div className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-700 mr-4 flex-shrink-0"></div>
          {item.href ? (
            <a href={item.href} className="text-balance hover:underline">
              {item.label}
            </a>
          ) : (
            <p className="text-balance">{item.label}</p>
          )}
        </div>
      ))}
    </section>
  );
}
