// make a server with express
import express from 'express';
// import leetcode from './api/leetcode.js';
const app = express();
// app.use('/leetcode', leetcode);
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.json({
        this: "this is leetcode api",
        leetcode: "https://leetcode.com/abhayprajapati",
        github: "https://github.com/theabhayprajapati",
        twitter: "https://twitter.com/abhayprajapati_"
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
