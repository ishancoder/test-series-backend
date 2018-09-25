import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    return res.send('<h1>Welcome to questions router</h1>');
})

module.exports = router;
