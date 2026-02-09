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
const profilePage = async (req, res) => {
  res.render("profile", { data: [] });
}
const adminPage = async (req, res) => {
  try {
    const response = await getApiData('/sixLatest');
    res.render('admin', { posts: response.Tickets || [] });
    console.log('Fetched tickets to ADMIN PAGE');
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).render('error', { message: 'Failed to fetch tickets' });
  }
};
const login = (req, res) => {
  res.render('login');
};
const signup = (req, res) => {
  res.render('signup');
};

module.exports = {
  homePage,
  login,
  signup,
  profilePage,
  adminPage,
};
