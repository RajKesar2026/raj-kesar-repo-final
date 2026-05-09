import { useRef, useState, useCallback } from "react";

interface Video {
  src: string;
  tag: string;
  title: string;
  desc: string;
  duration: string;
}

const videos: Video[] = [
  {
    src: "/videos/founder.mp4",
    tag: "Founder's Story",
    title: "Meet Raj — why we started this farm",
    desc: "From a dream of pesticide-free mangoes to doorstep delivery across Hyderabad.",
    duration: "1:24",
  },
  {
    src: "/videos/farm-tour.mp4",
    tag: "Farm Tour",
    title: "Walk through our orchard in Gir",
    desc: "See how our mangoes grow naturally — no chemicals, no shortcuts.",
    duration: "2:08",
  },
  {
    src: "/videos/harvest.mp4",
    tag: "Harvest Day",
    title: "How we hand-pick every single mango",
    desc: "Every mango is picked, sorted, and graded by hand before packing.",
    duration: "1:45",
  },
];

function VideoCard({ video }: { video: Video }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      el.play();
      setPlaying(true);
    }
  }, [playing]);

  return (
    <div
      className="flex-shrink-0 w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] rounded-2xl overflow-hidden cursor-pointer group"
      style={{ backgroundColor: "#e8e4dc" }}
      onClick={toggle}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "9/16" }}>
        <video
          ref={videoRef}
          src={video.src}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          playsInline
          onEnded={() => setPlaying(false)}
        />

        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(30,22,10,0.72) 0%, rgba(0,0,0,0) 50%)",
          }}
        />

        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110"
              style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 ml-1"
                fill="#c8851a"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {playing && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
              style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#c8851a">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            </div>
          </div>
        )}

        <div
          className="absolute top-3 right-3 text-white text-xs font-medium px-2 py-1 rounded-lg"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        >
          {video.duration}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-1"
            style={{ color: "#e8a83a" }}
          >
            {video.tag}
          </p>
          <p className="text-white font-semibold text-sm leading-snug mb-1">
            {video.title}
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
            {video.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function VideoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const total = videos.length;
  const visibleCount = 2;
  const maxIndex = total - visibleCount;

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(next, maxIndex));
      setIndex(clamped);
      if (!trackRef.current) return;
      const card = trackRef.current.firstElementChild as HTMLElement;
      if (!card) return;
      const cardW = card.offsetWidth + 20;
      trackRef.current.style.transform = `translateX(-${clamped * cardW}px)`;
    },
    [maxIndex]
  );

  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#f0ede6" }}>
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#c8851a" }}
          >
            Real Farm. Real People.
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Watch Us{" "}
            <em className="not-italic font-serif" style={{ color: "#c8851a" }}>
              In Action
            </em>
          </h2>
          <p className="mt-3 text-base" style={{ color: "#6b6355" }}>
            From the orchard in Gir to your doorstep in Hyderabad.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-5 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ willChange: "transform" }}
            >
              {videos.map((v) => (
                <VideoCard key={v.src} video={v} />
              ))}
            </div>
          </div>

          {index > 0 && (
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous"
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 z-10"
              style={{ backgroundColor: "#fff", border: "1px solid #d6cfC4" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="#4a3f30" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {index < maxIndex && (
            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next"
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110 z-10"
              style={{ backgroundColor: "#fff", border: "1px solid #d6cfc4" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="#4a3f30" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === index ? "24px" : "8px",
                height: "8px",
                backgroundColor: i === index ? "#c8851a" : "#c4bdb4",
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
