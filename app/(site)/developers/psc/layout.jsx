import Link from 'next/link';

export default function PSCLayout({ children }) {
  return (
    <>
      <div className="container pt-4">
        <Link href="/developers#psc" className="text-muted-light text-decoration-none small">
          ← Back to Protocol Smart Contracts
        </Link>
      </div>
      {children}
    </>
  );
}
