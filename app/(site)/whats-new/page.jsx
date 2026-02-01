import Link from 'next/link';

export const metadata = {
  title: "What's New - Vitruveo",
  description: 'Latest updates and announcements from Vitruveo.',
};

const UPDATES = [
  {
    date: 'Jan. 31, 2026',
    headline: 'New Vertical Foundation website',
    link: 'https://www.verticalfnd.com',
    items: [
      'The Vertical Foundation website has been updated with the vision and plan for the foundation.',
    ],
  },
  {
    date: 'Jan. 28, 2026',
    headline: 'HOST use-case examples added',
    link: '/host/examples',
    items: [
      'Six HOST use-case scenarios describing how it can be used have been added.',
    ],
  },
  {
    date: 'Jan. 26, 2026',
    headline: 'HOST demos added',
    link: '/host',
    items: [
      'Four demos that show you how HOST works have been added. This includes an AI project demo, a Passkey demo, a Google Sheets demo and a Nfty Alerts demo.',
    ],
  },
];

export default function WhatsNewPage() {
  return (
    <section className="section-dark py-5">
      <div className="container py-4">
        <h1 className="text-white mb-5">{"What's New"}</h1>

        <div className="whats-new-list">
          {UPDATES.map((update, index) => (
            <div key={index} className="whats-new-item mb-5 pb-4 border-bottom border-secondary">
              <div className="d-flex align-items-baseline gap-3 mb-3">
                <span className="text-muted-light small">{update.date}</span>
                <span className="text-muted-light">—</span>
                {update.link ? (
                  <Link href={update.link} className="text-vtru-green text-decoration-none h5 mb-0">
                    {update.headline}
                  </Link>
                ) : (
                  <span className="text-white h5 mb-0">{update.headline}</span>
                )}
              </div>
              <ul className="text-muted-light mb-0 ps-4">
                {update.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="mb-1">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
