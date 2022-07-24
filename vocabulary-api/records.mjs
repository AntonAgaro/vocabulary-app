import pool from "./mySQLPool.mjs";

export const readRecords = () =>
    new Promise((resolve, reject) =>
        pool.getConnection((err, connection) => {
            if (err) return reject(err)
            connection.query(
                'SELECT * FROM `users`',
                (err, results) => {
                    if (err) return reject(err)
                    resolve(results)
                }
            )
            connection.release()
        })
    )