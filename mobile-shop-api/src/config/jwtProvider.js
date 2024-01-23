const jwt = require("jsonwebtoken");

const SECRET_KEY = "hjbcskbcaj0cvakbcue2gdiqnxskjbci7unkabcyei40bcabncjhdhgcdhjcmgchtx";

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: "48h" });
  return token;
};

const getUserIdFromToken = (token) => {
  const decodedToken = jwt.verify(token, SECRET_KEY);
  return decodedToken.userId;
};

module.exports = { generateToken, getUserIdFromToken };













































// const jwt=require("jsonwebtoken")

// const SECRET_KEY = "hjbcskbcaj0cvakbcue2gdiqnxskjbci7unkabcyei40bcabncjhdhgcdhjcmgchtx"

// const generateToken=(userId)=>{
//     const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"48h"})
//     return token;
// }

// const getUserIdFromToken=(token)=>{
//     const decodedToken=jwt.verify(token,SECRET_KEY)
//     return decodedToken.userId;
// }

// module.exports={generateToken,getUserIdFromToken}