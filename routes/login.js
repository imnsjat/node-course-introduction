const express = require('express');
const router = express.Router();
const session = require('express-session');
const fs = require('fs');
router.use(session({
  secret: 'my secret',
  resave: false,
  saveUninitialized: true,
}));



router.get('/login',(req,res,next)=>{
    res.send('<form action="/login" method="POST" ><input type="text" name="username" placeholder="Username" ></input> <button type="submit"> submit</button></form> ');
})
router.post('/login',(req,res,next)=>{
    const username = req.body.username ; 
    console.log(username);
    console.log('here')
    req.session.username = username;
    res.redirect('/message');
})
router.get('/message', (req, res, next) => {
    res.send('<form action="/message" method="POST"><input type="text" name="message" placeholder="Message"></input><button type="send message">Send</button></form>');
  });
router.post('/message', (req, res, next) => {
    const message = req.body.message;
    const username = req.session.username;
    fs.appendFileSync('messages.txt', `${username}: ${message}\n`);
    res.redirect('/');
});
router.get('/read-messages', (req, res, next) => {
    const messages = fs.readFileSync('messages.txt', 'utf8');
    res.send(`<pre>${messages}</pre>`);
  });
module.exports = router;