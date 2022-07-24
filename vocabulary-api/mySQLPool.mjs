import mysql from 'mysql2';

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'mysql',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'vocabulary_db'
})

const CREATE_USERS_TABLE_SQl = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        login VARCHAR(255),
        password VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
`;

pool.getConnection((err, connection) => {
    if (!err) {
        console.log('Connected to the MySQL DB - ID is ' + connection.threadId);
        connection.query(CREATE_USERS_TABLE_SQl, err => {
            if (!err) {
                console.log('Vocabulary table was created!')
            }
        })
        connection.release();
    }
})

export default pool;