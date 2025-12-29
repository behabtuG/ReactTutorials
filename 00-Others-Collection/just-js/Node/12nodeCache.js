//12. Caching API Responses with node-cache
//Implement simple in-memory caching for your API responses to reduce load times and server requests.

//NodeCache is a simple in-memory cache module for Node.js. It provides a way to store and retrieve key-value pairs
// in memory. It’s often used to cache results from expensive operations (like database queries or external API requests)
// to improve performance by avoiding repeated calls for the same data.
const NodeCache = require("node-cache");
const cache = new NodeCache();

const getData = async (key) => {
  try {
    const cachedData = cache.get(key); //Check  the cache first
    if (cachedData) {
      console.log("Returning cached data");
      return cachedData; //Return cached data if available
    }

    console.log("Fetching new data from API");
    const data = await fetchFromAPI(); //Fetch data if not in cache
    cache.set(key, data, 60); //Cache the data for 60 seconds
    return data; //Return the freshed data
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; //Handle errors (e.g., network issues, failed API call)
  }
};
