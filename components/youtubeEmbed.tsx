export function YoutubeEmbed({ url }: { url: string }) {
  const videoId = url.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="">
      <iframe
        className="aspect-video"
        height={500}
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder={0}
        allowFullScreen
      />
    </div>
  );
}
