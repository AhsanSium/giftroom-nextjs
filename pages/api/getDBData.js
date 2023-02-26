import mysql from "mysql2/promise";

export default async function handler(req, res) {
    const id = req.body.id;
    const dbconnection = await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.MYSQL_DB,
        password: process.env.DB_PASS
    });

    try {

        const query = `SELECT content FROM text WHERE id = '${id}'`;
        const values = [];
        const results = await dbconnection.execute(query, values);
        dbconnection.end();
        res.status(200).json(results);
    }
    catch {
        res.status(403).json({ text: "Error Happened" });
    }

    // simple query

}
