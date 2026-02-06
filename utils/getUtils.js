const BACKEND_URL = process.env.BACKEND_URL;

async function getApiData(path) {
  try {
    const response = await fetch(`${BACKEND_URL}${path}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    throw error;
  }
}

module.exports = {
  getApiData,
};
