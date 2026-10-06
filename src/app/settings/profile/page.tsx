import Link from "next/link";

export default function ProfileSettingsPage() {
  return (
    <main className="page-content">
      <p className="eyebrow">Settings / Profile</p>
      <h1 className="page-title">Your profile</h1>
      <p className="page-description">
        Keep your Globomatics profile up to date so the community can get to
        know you.
      </p>
      <section className="detail-list" aria-label="Profile information">
        <div className="detail-row">
          <div>
            <h2>Name</h2>
            <p>Your name as it appears in the community.</p>
          </div>
          <span className="muted">Not set</span>
        </div>
        <div className="detail-row">
          <div>
            <h2>Email address</h2>
            <p>The email address associated with your account.</p>
          </div>
          <span className="muted">Not set</span>
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
