const express = require('express')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')

//register route 
router.post('/register', async (req, res) => {
    try {
        const { email, username, passport } = req.body;
        const user = new User({ email, username })
        const registeredUser = await User.register(user, password)

        //auto-login after registration 
        req.login(registeredUser, (err) => {
            if (err) return next(err)
            res.json({
                message: 'Successfully registered! ',
                user: { id: user._id, username: user.username, email: user.email }
            })
        })
    }
    catch (e) {
        res.status(400).json({ error: e.message })
    }
});

//login route
router.post('/login', async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err)
        if (!user) return res.status(401).json({ error: 'Invalid credentials' });

        req.login(user, (err)=>{
            if(err) return next (err);
            res.json({
                message: 'Successfully logged in!' ,
                user:{ id: user._id, username: user.username, email: user.email }
            })
        })
    })(req,res,next);
})

//logot route
router.post('/logout',(req,res)=>{
    req.logout((err)=>{
        if(err) return next(err);
        res.json({message:'Successfully logged out!'})
    })
})

//current user
router.get('/me',(req,res)=>{
    if(req.user){
        res.json({
            user: {
                id: req.user._id,
                username: req.user.username,
                email: req.user.email
            }
        })
    }
    else{
        res.status(401).json({error: 'Not authenticated'})
    }
})

module.exports = router;