import express from 'express';
const router = express.Router();

/*
This files contains all the routes after /exams. Any APIs regarding exams will be written here.
For Example: get API for getting exams details and format etc.
*/
router.get('/', (req, res) => {
    res.send("<h1>Welcome to exams router</h1>");
});

export default router;
