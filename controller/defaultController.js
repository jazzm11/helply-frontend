// Utils
const { getApiData } = require("../utils/getUtils");

const homePage = async (req, res) => {
  try {
    const response = await getApiData("/sixLatest");
    res.render("index", { data: response.Tickets || [] });
    console.log("Fetched tickets:", response);
  } catch (error) {
    console.error("Error fetching tickets:", error);
    res.status(500).render("error", { message: "Failed to fetch tickets" });
  }
};

module.exports = {
  homePage,
};
