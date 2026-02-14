export default function YouTubeEmbed({
  title = "Clinic Video",
  youtubeUrl
}: {
  title?: string;
  youtubeUrl?: string | null;
}) {
  if (!youtubeUrl) {
    return (
      <div className="rounded-2xl bg-white/[0.03] ring-1 ring-white/10 p-6 text-white/70">
        <div className="font-semibold text-white">{title}</div>
        <p className="mt-2 text-sm">
          Add a YouTube URL in your campaign/page config (or wire it into a practice setting) to enable video.
        </p>
      </div>
    );
  }

  // Accept full URL or ID
  const id = (() => {
    const m = youtubeUrl.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{6,})/);
    return m?.[1] ?? youtubeUrl;
  })();

  return (
    <div className="overflow-hidden rounded-2xl bg-white/[0.03] ring-1 ring-white/10">
      <div className="px-6 pt-6 text-white font-semibold">{title}</div>
      <div className="mt-4 aspect-video w-full">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
