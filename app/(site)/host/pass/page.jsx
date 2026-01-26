'use client';

import { useState } from 'react';
import {
  useHostDemo,
  buildPayload,
  HostDemoStatus,
  HostDemoButton,
} from '@/vitruveo/components/host';
import { HostConnectButton } from '@/vitruveo/components/host/connect-button';

const WALLETAP_URL = 'https://api.walletap.io/pass';
const WALLETAP_API_KEY = 'dd669681-6f1e-491c-a2a0-599d4cc89cf9';
const TEMPLATE_ID = 'sVcXpKPn3Vqg8GdBv7Zf';

export default function MobilePassDemoPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [validationError, setValidationError] = useState(null);

  const { isConnected, isSubmitting, txStatus, txHash, submit, reset } = useHostDemo();

  const formatPhone = (value) => {
    // Ensure + prefix
    if (!value.startsWith('+') && value.length > 0) {
      return '+' + value.replace(/[^\d]/g, '');
    }
    return '+' + value.slice(1).replace(/[^\d]/g, '');
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const isValidPhone = (value) => {
    // Must start with + and have at least 10 digits
    return /^\+\d{10,15}$/.test(value);
  };

  const handleSubmit = async () => {
    reset();
    setValidationError(null);

    if (!name.trim()) {
      setValidationError('Please enter your name');
      return;
    }
    if (!isValidPhone(phone)) {
      setValidationError('Please enter a valid phone number with country code (e.g., +1234567890)');
      return;
    }

    // Build templates with placeholders
    const headerTemplate = JSON.stringify({
      'Content-Type': 'application/json',
      'X-API-Key': '$1'
    });

    const bodyTemplate = JSON.stringify({
      passes: [{
        templateId: TEMPLATE_ID,
        templateFields: {
          accountName: '$1',
          balance: 1490
        },
        customFields: {
          status: 'OG Community'
        }
      }],
      phone: '$2',
      sendToPhone: true
    });

    const payload = await buildPayload({
      url: WALLETAP_URL,
      headerTemplate: headerTemplate,
      headerValues: [WALLETAP_API_KEY],
      bodyTemplate: bodyTemplate,
      bodyValues: [name.trim(), phone],
    });

    const result = await submit(payload);
    if (result) {
      setName('');
      setPhone('');
    }
  };

  return (
    <section className="section-dark py-5">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <div className="demo-icon mb-4">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" />
                </svg>
              </div>
              <h1 className="text-white mb-3">Mobile Wallet Pass</h1>
              <p className="text-muted-light lead">
                Deliver digital passes to Apple Wallet or Google Wallet, triggered by on-chain transactions.
              </p>
            </div>

            <details className="use-cases-section mb-4">
              <summary className="use-cases-toggle">
                <span>Web3 Use-cases</span>
                <svg className="chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="use-cases-content">
                <ul>
                  <li><strong>Ticket NFT Fulfillment</strong> — When a ticket NFT is purchased, instantly deliver a scannable event pass</li>
                  <li><strong>Membership Onboarding</strong> — When someone stakes tokens, issue them a membership card for the community</li>
                  <li><strong>Loyalty Point Updates</strong> — When a purchase completes, send an updated loyalty pass with new point balance</li>
                  <li><strong>POAP Badge Delivery</strong> — When a POAP is claimed, deliver the corresponding conference badge</li>
                  <li><strong>Access Pass Provisioning</strong> — When an access NFT is minted, issue building or service credentials</li>
                </ul>
              </div>
            </details>

            <div className="demo-card">
              <div className="step-section">
                <div className="step-header">
                  <span className="step-number">1</span>
                  <h3>Enter Your Name</h3>
                </div>
                <input
                  type="text"
                  className="form-control form-control-lg bg-dark text-white"
                  placeholder="e.g., John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                />
                <div className="d-flex align-items-center gap-3 mt-2">
                  <span className="encrypt-badge">Encrypted</span>
                  <small className="text-muted">{name.length}/50 characters</small>
                </div>
              </div>

              <div className="step-section">
                <div className="step-header">
                  <span className="step-number">2</span>
                  <h3>Enter Your Mobile Number</h3>
                </div>
                <input
                  type="tel"
                  className="form-control form-control-lg bg-dark text-white"
                  placeholder="+1234567890"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={16}
                />
                <div className="d-flex align-items-center gap-3 mt-2">
                  <span className="encrypt-badge">Encrypted</span>
                  <small className="text-muted">Include country code (e.g., +1 for US)</small>
                </div>
              </div>

              <div className="step-section">
                <div className="step-header">
                  <span className="step-number">3</span>
                  <h3>Get Your Pass</h3>
                </div>
                <p className="text-muted-light mb-3">
                  Connect your wallet and submit a transaction. The HOST protocol will securely deliver your mobile wallet pass via SMS in a few seconds.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 align-items-start">
                  <HostConnectButton />
                  <HostDemoButton
                    onClick={handleSubmit}
                    isSubmitting={isSubmitting}
                    isConnected={isConnected}
                    disabled={!name.trim() || !isValidPhone(phone)}
                  >
                    Send Pass
                  </HostDemoButton>
                </div>

                {validationError && (
                  <div className="alert alert-danger mt-3">{validationError}</div>
                )}

                <HostDemoStatus status={txStatus} txHash={txHash} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .demo-icon {
          display: flex;
          justify-content: center;
        }
        .demo-card {
          background: linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 100%);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid #333;
        }
        .step-section {
          padding: 1.5rem 0;
          border-bottom: 1px solid #333;
        }
        .step-section:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .step-section:first-child {
          padding-top: 0;
        }
        .step-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .step-number {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #a78bfa;
          color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .step-header h3 {
          margin: 0;
          color: #fff;
          font-size: 1.25rem;
          font-weight: 600;
        }
        .form-control.bg-dark {
          border-color: #444;
        }
        .form-control.bg-dark:focus {
          border-color: #a78bfa;
          box-shadow: 0 0 0 0.2rem rgba(167, 139, 250, 0.25);
        }
        .form-control.bg-dark::placeholder {
          color: #666;
        }
        .encrypt-badge {
          background: rgba(167, 139, 250, 0.2);
          color: #a78bfa;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.5px;
        }
        .use-cases-section {
          background: rgba(167, 139, 250, 0.05);
          border: 1px solid rgba(167, 139, 250, 0.2);
          border-radius: 12px;
          overflow: hidden;
        }
        .use-cases-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          cursor: pointer;
          color: #a78bfa;
          font-weight: 600;
          font-size: 0.95rem;
          list-style: none;
        }
        .use-cases-toggle::-webkit-details-marker {
          display: none;
        }
        .use-cases-toggle .chevron {
          transition: transform 0.2s ease;
        }
        .use-cases-section[open] .use-cases-toggle .chevron {
          transform: rotate(180deg);
        }
        .use-cases-content {
          padding: 0 1.25rem 1.25rem;
          color: #999;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .use-cases-content ul {
          margin: 0;
          padding-left: 1.25rem;
        }
        .use-cases-content li {
          margin-bottom: 0.5rem;
        }
        .use-cases-content li:last-child {
          margin-bottom: 0;
        }
        .use-cases-content strong {
          color: #ccc;
        }
      `}</style>
    </section>
  );
}
