export const fetchAPIData = async () => {
  const response = await fetch('/api/treasure/00.json');
  const data = await response.json();
  return data;
};

export const fetch24HrAPIData = async () => {
  try {
    const promises = Array.from({ length: 24 }, async (_, i) => {
      const index = i.toString().padStart(2, '0');
      const response = await fetch(`/api/treasure/${index}.json`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return { index: i, data };
    });

    const results = await Promise.all(promises);
    results.sort((a, b) => a.index - b.index);

    const firstDataPoint = results[0].data;
    const numPaths = Object.keys(firstDataPoint).length;
    
    const pathsArray = Array(numPaths).fill().map((_, index) => ({
      balloon_index: index,
      coords: []
    }));

    results.forEach(({ data }) => {
      Object.values(data).forEach((coordinates, index) => {
        pathsArray[index].coords.push(coordinates);
      });
    });
    // console.log(pathsArray)
    return pathsArray;

  } catch (error) {
    console.error('Error fetching 24hr data:', error);
    throw error;
  }
};
