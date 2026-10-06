import Link from "next/link";

export default function SettingsPage() {
  return (
    <main className="page-content">
      <p className="eyebrow">Your account</p>
      <h1 className="page-title">Settings</h1>
      <p className="page-description">
        Manage your account details and choose how you hear from Globomatics.
      </p>
      <section className="card-grid" aria-label="Settings pages">
        <Link className="content-card" href="/settings/profile">
          <span className="card-kicker">Account</span>
          <h2>Profile</h2>
          <p>Review and update your personal information.</p>
        </Link>
        <Link className="content-card" href="/settings/notifications">
          <span className="card-kicker">Preferences</span>
          <h2>Notifications</h2>
          <p>Choose which updates and announcements you receive.</p>
        </Link>
      </section>
    </main>
  );
}
