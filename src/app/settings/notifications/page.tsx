import Link from "next/link";

export default function NotificationSettingsPage() {
  return (
    <main className="page-content">
      <p className="eyebrow">Settings / Notifications</p>
      <h1 className="page-title">Notification preferences</h1>
      <p className="page-description">
        Decide how you would like to hear about conference news and community
        updates.
      </p>
      <section className="detail-list" aria-label="Notification preferences">
        <div className="detail-row">
          <div>
            <h2>Conference updates</h2>
            <p>Programme announcements, schedule changes, and event news.</p>
          </div>
          <span className="muted">Manage preference</span>
        </div>
        <div className="detail-row">
          <div>
            <h2>Community newsletter</h2>
            <p>Occasional stories and ideas from the Globomatics community.</p>
          </div>
          <span className="muted">Manage preference</span>
        </div>
      </section>
      <div className="button-row">
        <Link className="button-secondary" href="/settings">
          Back to settings
        </Link>
      </div>
    </main>
  );
}
