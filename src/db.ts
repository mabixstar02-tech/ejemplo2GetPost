import mysql from 'mysql2/promise';

export let conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'defaultdb',
    port: 3306
});