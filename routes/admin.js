const express = require('express');
const router = express.Router();
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST" ><input type="text" name="title" ></input> <input type="text" name="size"></input><button type="submit"> addd product</button></form> ');

})
module.exports = router;
