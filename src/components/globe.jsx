import React from 'react';
import Globe from 'react-globe.gl';

const MappingGlobe = ({ balloonData }) => {
  if (!balloonData || balloonData.length === 0) {
    return <div>Loading globe...</div>;
  }

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      pointsData={balloonData}
      pointLat={d => d[0]}
      pointLng={d => d[1]}
      pointAltitude={d => d[2] / 1000}
      pointColor={() => 'red'}
      pointRadius={0.1}
    />
  );
};

export default MappingGlobe;