
const sign_in_render = (req, res) => {
    try{
    res.render('login')
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
  
};
const sign_up_render = (req, res) => {
  try{
    res.render('signup')
    }catch(err){
        console.log(err);
        res.status(500).send(err)
    }
};


module.exports = {sign_in_render, sign_up_render}