import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send("<h1>Welcome to exams router</h1>");
});

module.exports = router;
