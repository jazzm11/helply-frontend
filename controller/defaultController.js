// Utils
const { getApiData } = require('../utils/getUtils');

const homePage = async (req, res) => {
  try {
    const response = await getApiData('/sixLatest');
    res.render('index', { data: response.Tickets || [] });
    console.log('Fetched tickets to HOME PAGE', response.Tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).render('error', { message: 'Failed to fetch tickets' });
  }
};

const view = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getApiData(`/view/${id}`);
    
    res.render('view', { post: response.userTickets, comments: null });
  } catch (err) {
    console.log(err);
    res.status(500).render('error', { message: 'Failed to fetch ticket' });
  }
};

module.exports = {
  homePage,
  view,
};
