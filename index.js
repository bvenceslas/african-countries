const express = require('express');
const Sequelize = require('sequelize');


const sequelize = new Sequelize({
    //if you are using other databases, specify the host
    //host: 'localhost'
    dialect: 'sqlite',
    storage: './database.sqlite'
});

const app = express();
const port = process.env.port | 3000;

app.get('/', (req, res) => res.send('Brain App'));

app.listen(port, () => console.log(`Notes-app listens on port ${port}`));
