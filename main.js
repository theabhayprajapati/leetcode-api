// make a server with express
import express from 'express';
import leetcode from './api/leetcode.js';
const app = express();
app.use('/leetcode', leetcode);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
