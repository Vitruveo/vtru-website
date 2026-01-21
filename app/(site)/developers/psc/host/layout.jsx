'use client';

import { usePathname, useRouter } from 'next/navigation';

const HOST_EXAMPLES = [
  { name: 'Alpha', slug: 'alpha' },
  { name: 'Beta', slug: 'beta' },
];

export default function HostLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const currentSlug = pathname.split('/').pop();

  const handleChange = (e) => {
    const slug = e.target.value;
    if (slug === 'other-psc') {
      router.push('/developers/psc/trend');
    } else if (slug) {
      router.push(`/developers/psc/host/${slug}`);
    }
  };

  return (
    <>
      <div className="host-nav-bar">
        <div className="container d-flex align-items-center justify-content-between">
          <h5 className="host-title mb-0">HTTP Outbound Service Trigger Example</h5>
          <div className="d-flex align-items-center gap-3">
            <span className="nav-label">Example:</span>
            <select
              className="host-dropdown"
              value={currentSlug}
              onChange={handleChange}
            >
              {HOST_EXAMPLES.map(ex => (
                <option key={ex.slug} value={ex.slug}>
                  {ex.name}
                </option>
              ))}
              <option disabled>───────────</option>
              <option value="other-psc">Other PSC Examples →</option>
            </select>
          </div>
        </div>
      </div>
      {children}

      <style jsx>{`
        .host-nav-bar {
          background-color: #1a1a1a;
          border-bottom: 1px solid #333;
          padding: 0.75rem 0;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          z-index: 101;
        }
        .host-title {
          color: #fff;
          font-weight: 500;
        }
        .nav-label {
          color: #888;
          font-size: 0.9rem;
        }
        .host-dropdown {
          background-color: #111;
          color: #c084fc;
          border: 1px solid #c084fc;
          padding: 0.4rem 0.75rem;
          border-radius: 4px;
          font-size: 0.9rem;
          cursor: pointer;
          min-width: 180px;
        }
        .host-dropdown:hover {
          border-color: #d8b4fe;
        }
        .host-dropdown:focus {
          outline: none;
          border-color: #d8b4fe;
        }
        .host-dropdown option {
          background-color: #111;
          color: #fff;
        }
      `}</style>
    </>
  );
}
