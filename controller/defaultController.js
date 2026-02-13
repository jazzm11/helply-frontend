// Utils
const { getApiData } = require('../utils/getUtils');

const homePage = async (req, res) => {
  try {
    const response = await getApiData('/sixLatest');
    res.render('index', { data: response.Tickets || [] });
    console.log('Fetched tickets to HOME PAGE');
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).render('error', { message: 'Failed to fetch tickets' });
  }
};

// User Controllers



const view = async (req, res) => {
  try {
    const response = await getApiData('/sixLatest');
    res.render('view', { posts: response.Tickets || [] });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  homePage,
  view,
};
