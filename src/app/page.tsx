import Link from "next/link";

export default function Home() {
  return (
    <main className="page-content">
      <section className="hero-panel">
        <p className="eyebrow">Learn. Connect. Build.</p>
        <h1 className="page-title">A brighter future starts with a new idea.</h1>
        <p className="page-description">
          Join the Globomatics community to explore emerging technology, hear
          from thoughtful speakers, and turn inspiration into action.
        </p>
        <div className="button-row">
          <Link className="button" href="/conference">
            Explore the conference
          </Link>
          <Link className="button-secondary" href="/blog">
            Read the blog
          </Link>
        </div>
      </section>
      <h2 className="section-heading">Find your next step</h2>
      <section className="card-grid" aria-label="Explore Globomatics">
        <Link className="content-card" href="/conference/sessions">
          <span className="card-kicker">Conference</span>
          <h3>Sessions</h3>
          <p>Explore talks and workshops from this year’s programme.</p>
        </Link>
        <Link className="content-card" href="/conference/speakers">
          <span className="card-kicker">Meet the community</span>
          <h3>Speakers</h3>
          <p>Get to know the people sharing their ideas on stage.</p>
        </Link>
        <Link className="content-card" href="/settings">
          <span className="card-kicker">Your account</span>
          <h3>Settings</h3>
          <p>Manage your profile and notification preferences.</p>
        </Link>
      </section>
    </main>
  );
}
