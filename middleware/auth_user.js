const { getApiData } = require("../utils/getUtils");

const authenticate = async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (token) {
    const { success } = await getApiData(`/user/verify/${token}`);
    if (success) {
      console.log("Success:", success);
      next();
    } else {
      console.log("Success:", success);
      res.redirect("/login");
    }
  } else {
    res.redirect("/login");
  }
};

const checkCurrentUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (token) {
    const { success, user } = await getApiData(`/user/verify/${token}`);

    if (success && user) {
      console.log("Success:", success);
      console.log("User:", user)
      res.locals.user = user;
      next();
    } else {
      console.log("Success:", success);
      res.locals.user = null;
      next();
    }
  } else {
    res.locals.user = null;
    next();
  }
};

const authorizeAdmin = (req,res,next)=>{
    const user = res.locals.user
    console.log(user)
    if(user.role === "admin"){
        next()
    }else{
        res.redirect("/")
    }
}

module.exports = { authenticate, checkCurrentUser,authorizeAdmin };
