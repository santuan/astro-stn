import React from 'react'

export default function Youtube(props) {
  const { videoId, width = '100%', height = 450, title } = props;
  const src = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="youtube-container aspect-w-16 aspect-h-9">
      <iframe
        width={width}
        height={height}
        src={src}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen="1"
        title={title}
      />
    </div>
  );
}
