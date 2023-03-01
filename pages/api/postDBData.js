import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import mysql from "mysql2/promise";

export default withApiAuthRequired(async function handler(req, res) {
    const content = JSON.stringify(req.body.content);
    const id = req.body.id;

    //console.log(content);

    try {

        const dbconnection = await mysql.createConnection({
            host: process.env.HOST,
            user: process.env.USER,
            database: process.env.MYSQL_DB,
            password: process.env.DB_PASS,
            port: process.env.PORT
        });

        const query = `UPDATE text SET content = '${content}' WHERE id = '${id}'`;
        const values = [];
        const results = await dbconnection.execute(query, values);
        dbconnection.end();
        res.status(200).json({ message: 'Note Created', results: results });

    } catch (error) {
        console.log(error);
        res.status(405).json({ message: 'Error Happened' })
    }
});