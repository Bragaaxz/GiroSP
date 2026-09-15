import mysql from 'mysql2'

    let pool = mysql.createPool({
        host:"mysql-alenn.alwaysdata.net",
        user:"alenn",
        password:"girinhospzinho",
        database:"alenn_girosp"
    })

export default pool;