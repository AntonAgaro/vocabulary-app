import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser";
import session from 'express-session';
import pool from "./mySQLPool.mjs";
import {SELECT_USERS}  from "./queries.mjs";

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

const PORT = 8000;

app.get('/', async (req, res) => {
    res.json({message: 'это стартовая страница'})
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    await pool.getConnection((err, connection) => {
        if (err) {
            console.log(err)
        }
        connection.query(SELECT_USERS, (err, data) => {
            const user = data.find(item => {
                return item.login === req.body.login && item.password === req.body.password
            });
            if (user) {
                res.send({login: 'success', user: user})
            } else {
                res.send({login: 'no such user'})
            }
        });
        connection.release();
    })
})

app.listen(PORT, () => {
    console.log(`Express web server is running in ${PORT}`)
})