export default function BlogPage() {
  return (
    <main className="page-content">
      <p className="eyebrow">Ideas and stories</p>
      <h1 className="page-title">The Globomatics blog</h1>
      <p className="page-description">
        Perspectives from the people shaping technology, creativity, and the
        future of work.
      </p>
      <section className="card-grid" aria-label="Latest blog articles">
        <article className="content-card">
          <span className="card-kicker">Innovation</span>
          <h2>Turning big ideas into meaningful change</h2>
          <p>How curious teams can make progress on the challenges that matter.</p>
        </article>
        <article className="content-card">
          <span className="card-kicker">Community</span>
          <h2>Why the best ideas are shared</h2>
          <p>Learning together helps new perspectives find their way forward.</p>
        </article>
        <article className="content-card">
          <span className="card-kicker">Conference</span>
          <h2>What to look forward to this year</h2>
          <p>A first look at the conversations taking centre stage.</p>
        </article>
      </section>
    </main>
  );
}
