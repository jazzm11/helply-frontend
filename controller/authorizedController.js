const profilePage = async (req, res) => {
  try{
    res.render('profile', { data: [] });
  }catch(err){
    console.log(err)
    req.status(500).send(err)
  }
};
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

module.exports = {profilePage, adminPage}