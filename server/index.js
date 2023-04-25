const express = require('express');
const cors = require('cors');
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//using controller
const controller = require('./controller');
const {getHouses, createHouse, updateHouse, deleteHouse} = controller;

//endpoints
app.get('/api/houses', getHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);
app.delete('/api/houses/:id', deleteHouse);

app.listen(4004, () => console.log('Listening on Port 4004...'));