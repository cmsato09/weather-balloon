import React from 'react';
import Globe from 'react-globe.gl';

const PathGlobe = ({ balloonsData }) => {
  if (!balloonsData || Object.keys(balloonsData).length === 0) {
    return <div>Loading globe...</div>;
  }


  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  return (
    <Globe
      globeImageUrl="https://unpkg.com/three-globe/example/img/earth-day.jpg"
      pathsData={balloonsData}
      pathPoints="coords"
      pathPointLat={p => p[0]}
      pathPointLng={p => p[1]}
      pathPointAltitude={p => p[2] / 1000}
      pathColor={(path) => colors[path.balloon_index % colors.length]}
      pathLabel={path => path.balloon_index}
      pathStroke={1}
    />
  );
};

export default PathGlobe;