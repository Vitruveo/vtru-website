'use client';

import { useRouter } from 'next/navigation';

export function PSCTable({ pscList }) {
  const router = useRouter();

  return (
    <div className="table-responsive mb-5">
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Address</th>
            <th>Name</th>
            <th>Purpose</th>
            <th>Gas</th>
          </tr>
        </thead>
        <tbody>
          {pscList.map((psc) => (
            <tr
              key={psc.slug}
              onClick={() => router.push(`/developers/psc/${psc.slug}`)}
              style={{ cursor: 'pointer' }}
            >
              <td><code className="text-vtru-green">{psc.address.slice(0, 10)}...{psc.address.slice(-4)}</code></td>
              <td><strong className="text-white">{psc.name}</strong></td>
              <td className="text-muted-light">{psc.description}</td>
              <td className="text-muted-light">{psc.gas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
