const rateLimit = require("express-rate-limit");


module.exports = rateLimit({
    windowMs: 15* 60 * 1000, // 15 minutes
    max: 250 // limit each IP to 100 requests per windowMs
  });

 
