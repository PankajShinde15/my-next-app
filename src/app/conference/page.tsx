import Link from "next/link";

export default function ConferencePage() {
  return (
    <main className="page-content">
      <p className="eyebrow">Ideas in motion</p>
      <h1 className="page-title">The Globomatics conference</h1>
      <p className="page-description">
        A gathering for people who want to understand what is changing and help
        shape what comes next.
      </p>
      <section className="card-grid" aria-label="Conference information">
        <Link className="content-card" href="/conference/sessions">
          <span className="card-kicker">On the programme</span>
          <h2>Sessions</h2>
          <p>Browse talks, workshops, and conversations.</p>
        </Link>
        <Link className="content-card" href="/conference/speakers">
          <span className="card-kicker">The people behind the ideas</span>
          <h2>Speakers</h2>
          <p>Meet this year’s featured speakers.</p>
        </Link>
      </section>
    </main>
  );
}
