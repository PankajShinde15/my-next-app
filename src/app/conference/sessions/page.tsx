export default function SessionsPage() {
  return (
    <main className="page-content">
      <p className="eyebrow">Conference / Sessions</p>
      <h1 className="page-title">Sessions</h1>
      <p className="page-description">
        Make room for new perspectives with talks and workshops from across the
        Globomatics community.
      </p>
      <section className="detail-list" aria-label="Conference sessions">
        <article className="detail-row">
          <div>
            <span className="card-kicker">09:30 · Main stage</span>
            <h2>Designing for a changing world</h2>
            <p>Explore how teams can build products that adapt with people.</p>
          </div>
        </article>
        <article className="detail-row">
          <div>
            <span className="card-kicker">11:00 · Workshop studio</span>
            <h2>From experiment to impact</h2>
            <p>A practical workshop for moving promising ideas into action.</p>
          </div>
        </article>
        <article className="detail-row">
          <div>
            <span className="card-kicker">14:00 · Main stage</span>
            <h2>Building technology with trust</h2>
            <p>A conversation about thoughtful, human-centred innovation.</p>
          </div>
        </article>
      </section>
    </main>
  );
}
