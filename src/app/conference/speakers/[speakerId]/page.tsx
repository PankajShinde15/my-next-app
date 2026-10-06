import Link from "next/link";
import { notFound } from "next/navigation";
import { speakers } from "../data";

export default function SpeakerPage({
  params,
}: {
  params: { speakerId: string };
}) {
  const speaker = speakers.find((item) => item.id === params.speakerId);

  if (!speaker) {
    notFound();
  }

  return (
    <main className="page-content">
      <p className="eyebrow">Conference / Speakers / {speaker.name}</p>
      <h1 className="page-title">{speaker.name}</h1>
      <p className="page-description">{speaker.role}</p>
      <section className="detail-list">
        <article className="detail-row">
          <div>
            <h2>About</h2>
            <p>{speaker.bio}</p>
          </div>
        </article>
      </section>
      <div className="button-row">
        <Link className="button-secondary" href="/conference/speakers">
          Back to speakers
        </Link>
      </div>
    </main>
  );
}
