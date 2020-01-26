require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');


const app = express();
const dbUser = process.env.DB_USR;
const dbPass = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0-ja5ag.mongodb.net/week10?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

// Métodos Http: get, post, put, delete

// Tipos de parâmetros:

// Query Params: req.query (Filtros, ordenação, paginação, ...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body 

// MongoDB (Não-relacional)


