export const fetchAPIData = async () => {
  const response = await fetch('/api/treasure/00.json');
  const data = await response.json();
  return data;
};