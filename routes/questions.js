import express from 'express';
const router = express.Router();

/*
This files contains all the routes after /questions. Any APIs regarding questions will be written here.
For Example: get API for getting questions body etc.
*/
router.get('/', (req, res) => {
    return res.send('<h1>Welcome to questions router</h1>');
})

export default router;
