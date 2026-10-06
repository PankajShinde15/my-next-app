import Link from "next/link";
import { speakers } from "./data";

export default function SpeakersPage() {
  return (
    <main className="page-content">
      <p className="eyebrow">Conference / Speakers</p>
      <h1 className="page-title">Meet the speakers</h1>
      <p className="page-description">
        Meet the thinkers, makers, and leaders bringing fresh perspectives to
        this year’s conference.
      </p>
      <section className="card-grid" aria-label="Conference speakers">
        {speakers.map((speaker) => (
          <Link
            className="content-card"
            href={`/conference/speakers/${speaker.id}`}
            key={speaker.id}
          >
            <span className="card-kicker">{speaker.role}</span>
            <h2>{speaker.name}</h2>
            <p>{speaker.bio}</p>
            <span className="text-link">View speaker</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
