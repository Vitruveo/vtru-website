'use client';

import { usePathname, useRouter } from 'next/navigation';
import { HOST_EXAMPLES } from './index';

export function HostExamplesHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const currentSlug = pathname.split('/').pop();
  const currentExample = HOST_EXAMPLES.find(ex => ex.slug === currentSlug);

  const handleChange = (e) => {
    const slug = e.target.value;
    if (slug === 'other-psc') {
      router.push('/developers/psc/trend');
    } else if (slug) {
      router.push(`/developers/psc/host/examples/${slug}`);
    }
  };

  return (
    <>
      <div className="host-examples-nav-bar">
        <div className="container d-flex align-items-center justify-content-between">
          <h5 className="host-examples-title mb-0">HTTP Outbound Service Trigger Example</h5>
          <div className="d-flex align-items-center gap-3">
            <span className="nav-label">Example:</span>
            <select
              className="host-examples-dropdown"
              value={currentSlug}
              onChange={handleChange}
            >
              {HOST_EXAMPLES.map(example => (
                <option key={example.slug} value={example.slug}>
                  {example.name}
                </option>
              ))}
              <option disabled>───────────</option>
              <option value="other-psc">Other PSC Examples →</option>
            </select>
          </div>
        </div>
      </div>

      <style jsx>{`
        .host-examples-nav-bar {
          background-color: #1a1a1a;
          border-bottom: 1px solid #333;
          padding: 0.75rem 0;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          z-index: 100;
        }
        .host-examples-title {
          color: #fff;
          font-weight: 500;
        }
        .nav-label {
          color: #888;
          font-size: 0.9rem;
        }
        .host-examples-dropdown {
          background-color: #111;
          color: #c084fc;
          border: 1px solid #c084fc;
          padding: 0.4rem 0.75rem;
          border-radius: 4px;
          font-size: 0.9rem;
          cursor: pointer;
          min-width: 180px;
        }
        .host-examples-dropdown:hover {
          border-color: #d8b4fe;
          box-shadow: 0 0 0 1px rgba(192, 132, 252, 0.3);
        }
        .host-examples-dropdown:focus {
          outline: none;
          border-color: #d8b4fe;
          box-shadow: 0 0 0 2px rgba(192, 132, 252, 0.3);
        }
        .host-examples-dropdown option {
          background-color: #111;
          color: #fff;
        }
      `}</style>
    </>
  );
}
