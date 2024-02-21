const express = require('express');
const cors = require('cors');
const app = express();
const userController = require('./controllers/user');
require('./dbConfig/config'); 

app.use(express.json());
app.use(cors()); // This will enable CORS

const PORT = process.env.PORT || 8000;

app.post('/api/user-data', userController.postUserData);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//In this code, app.use(cors()); enables CORS for all routes. If you want to enable CORS for specific routes only,
// you can use app.post('/api/user-data', cors(), userController.postUserData);.