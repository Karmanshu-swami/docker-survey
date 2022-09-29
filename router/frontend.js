const router = require('express').Router();
const stddata = require('../model/students.js');


router.get('/', (req, res)=>{
    res.render('survey.ejs')
});

router.post('/surveyrec', async (req, res)=>{
    console.log(req.body)
    const {name, surname, email, course, liking, difficulty, experience, feedback} = req.body;
    const stdrecord = new stddata({
        name: name, 
        surname: surname,
        email: email,
        course: course,
        liking: liking,
        difficulty: difficulty,
        experience: experience,
        feedback: feedback
    });
    await stdrecord.save();
    res.send('respond sent Successfully!')
});



module.exports = router;