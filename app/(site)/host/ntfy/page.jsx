'use client';

import { useState, useMemo } from 'react';
import { Filter } from 'bad-words';
import {
  useHostDemo,
  buildPayload,
  HostDemoStatus,
  HostDemoButton,
} from '@/vitruveo/components/host';
import { HostConnectButton } from '@/vitruveo/components/host/connect-button';

const NTFY_TOPIC = 'Vitruveo-HOST';
const NTFY_URL = `https://ntfy.sh/${NTFY_TOPIC}`;

export default function NtfyDemoPage() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [validationError, setValidationError] = useState(null);

  const { isConnected, isSubmitting, txStatus, txHash, submit, reset } = useHostDemo();

  const filter = useMemo(() => new Filter(), []);

  const sanitize = (text) => {
    try {
      return filter.clean(text);
    } catch {
      return text;
    }
  };

  const hasProfanity = (text) => {
    try {
      return filter.isProfane(text);
    } catch {
      return false;
    }
  };

  const titleHasProfanity = title && hasProfanity(title);
  const messageHasProfanity = message && hasProfanity(message);

  const handleSubmit = async () => {
    reset();
    setValidationError(null);

    if (!title.trim()) {
      setValidationError('Please enter a title');
      return;
    }
    if (!message.trim()) {
      setValidationError('Please enter a message');
      return;
    }

    const cleanTitle = sanitize(title.trim());
    const cleanMessage = sanitize(message.trim());

    const payload = await buildPayload({
      url: NTFY_URL,
      headers: {
        'Title': cleanTitle,
      },
      bodyTemplate: 'plaintext',
      bodyValues: [cleanMessage],
    });

    const result = await submit(payload);
    if (result) {
      setTitle('');
      setMessage('');
    }
  };

  return (
    <section className="section-dark py-5">
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center mb-5">
              <div className="demo-icon mb-4">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="1.5">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h1 className="text-white mb-3">Ntfy Alerts</h1>
              <p className="text-muted-light lead">
                Send real-time push notifications from the blockchain to any device.
                Your message will be delivered via <a href="https://ntfy.sh" target="_blank" rel="noopener noreferrer" className="text-vtru-green">ntfy.sh</a>, a simple HTTP-based notification service.
              </p>
            </div>

            <div className="demo-card">
              <div className="step-section">
                <div className="step-header">
                  <span className="step-number">1</span>
                  <h3>Subscribe to Notifications</h3>
                </div>
                <p className="text-muted-light mb-3">
                  Open the ntfy topic in a new tab to receive notifications. You can also install the ntfy app on your phone and subscribe to <code>Vitruveo-HOST</code>.
                </p>
                <a
                  href={`https://ntfy.sh/${NTFY_TOPIC}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  style={{ whiteSpace: 'nowrap' }}
                >
                  Open ntfy.sh/Vitruveo-HOST
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ display: 'inline', marginLeft: '8px', verticalAlign: 'middle' }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>

              <div className="step-section">
                <div className="step-header">
                  <span className="step-number">2</span>
                  <h3>Enter Your Title</h3>
                </div>
                <input
                  type="text"
                  className={`form-control form-control-lg bg-dark text-white ${titleHasProfanity ? 'is-invalid' : ''}`}
                  placeholder="e.g., Hello from Vitruveo!"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={100}
                />
                {titleHasProfanity && (
                  <div className="invalid-feedback d-block">
                    Inappropriate content detected - it will be filtered
                  </div>
                )}
                <small className="text-muted">{title.length}/100 characters</small>
              </div>

              <div className="step-section">
                <div className="step-header">
                  <span className="step-number">3</span>
                  <h3>Enter Your Message</h3>
                </div>
                <textarea
                  className={`form-control form-control-lg bg-dark text-white ${messageHasProfanity ? 'is-invalid' : ''}`}
                  placeholder="e.g., This notification was triggered by a smart contract on Vitruveo!"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  maxLength={500}
                />
                {messageHasProfanity && (
                  <div className="invalid-feedback d-block">
                    Inappropriate content detected - it will be filtered
                  </div>
                )}
                <small className="text-muted">{message.length}/500 characters</small>
              </div>

              <div className="step-section">
                <div className="step-header">
                  <span className="step-number">4</span>
                  <h3>Send Notification</h3>
                </div>
                <p className="text-muted-light mb-3">
                  Connect your wallet and submit a transaction. The HOST protocol will securely deliver your notification to ntfy.sh in a few seconds.
                </p>

                <div className="d-flex flex-column flex-sm-row gap-3 align-items-start">
                  <HostConnectButton />
                  <HostDemoButton
                    onClick={handleSubmit}
                    isSubmitting={isSubmitting}
                    isConnected={isConnected}
                    disabled={!title.trim() || !message.trim()}
                  >
                    Send Notification
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
          background: #4ade80;
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
        code {
          background: #333;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          color: #4ade80;
        }
        .form-control.bg-dark {
          border-color: #444;
        }
        .form-control.bg-dark:focus {
          border-color: #4ade80;
          box-shadow: 0 0 0 0.2rem rgba(74, 222, 128, 0.25);
        }
        .form-control.bg-dark::placeholder {
          color: #666;
        }
        .text-vtru-green {
          color: #4ade80;
        }
      `}</style>
    </section>
  );
}
