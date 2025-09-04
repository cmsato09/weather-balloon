import React from 'react';
import Globe from 'react-globe.gl';

const PathGlobe = ({ balloonsData }) => {
  if (!balloonsData || Object.keys(balloonsData).length === 0) {
    return <div>Loading globe...</div>;
  }

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  const labelData = balloonsData.map(path => {
    const currentPos = path.coords[0];
    return {
      lat: currentPos[0],
      lng: currentPos[1],
      alt: currentPos[2] / 1000,
      text: `#${path.balloon_index}`,
      color: colors[path.balloon_index % colors.length]
    };
  });

  return (
    <Globe
      globeImageUrl="https://unpkg.com/three-globe/example/img/earth-day.jpg"
      pathsData={balloonsData}
      pathPoints="coords"
      pathPointLat={p => p[0]}
      pathPointLng={p => p[1]}
      pathPointAltitude={p => p[2] / 1000}
      pathColor={(path) => colors[path.balloon_index % colors.length]}
      pathLabel={path => `Balloon ${path.balloon_index}`}
      pathStroke={2}
      labelsData={labelData}
      labelLat={d => d.lat}
      labelLng={d => d.lng}
      labelAltitude={d => d.alt}
      labelText={d => d.text}
      labelSize={0.5}
      labelDotRadius={0.2}
      labelColor={d => d.color}
      labelResolution={2}
    />
  );
};

export default PathGlobe;