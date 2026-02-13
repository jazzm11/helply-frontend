
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

const maxValidAge = 24*60*60

const create_cookie = (req,res)=>{
    const token = req.params.token
    try{
        res.cookie("jwt", token, {httpOnly: true, maxAge:maxValidAge*1000 })
        res.redirect("/")
    }catch(err){
        console.log("Error on cookie_create:",err)
        res.status(500).send(err)
    }
}


module.exports = {sign_in_render, sign_up_render, create_cookie}