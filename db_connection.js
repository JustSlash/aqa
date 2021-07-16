'use_strict';

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jktu1090",
    database: "dbqa6"
});

// connection.connect(function(err){
//     if(err) {
//         console.log('Error message: ' + err.message);
//     } else {
//         console.log("Successfully connected");
//     }
// });

// connection.query("CREATE DATABASE dbqa6",
//     function(err) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('dbqa6 successfully created');
//         }
//     }
// )

// const sql = `CREATE TABLE users(
//     id int primary key auto_increment,
//     name varchar(255),
//     age int
// )`;


// const sql_receive_data = `SELECT * FROM dbqa6.users`;

// connection.execute(sql_receive_data, function(err, results) {
//     if (err) console.log(err);
//     else console.log(results);
// });

// connection.end();

// const sql_update_row = `UPDATE users SET name="Claud" WHERE id=5`;
// const data = [66, 'Lurk'];

// connection.query(sql_update_row, data, function(err, results) {
//     if (err) console.log(err);
//     else console.log('Updated the row');
//     console.log(results);
// });

// const sql_receive_data = `SELECT name FROM dbqa6.users`;

// connection.execute(sql_receive_data, function(err, results) {
//     if (err) console.log(err);
//     else console.log(results);
// });

const sql = `INSERT INTO users (name, age) VALUES('Kirgioz', 23)`;

connection.query(sql,
    function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log('data into users successful');
        }
    }
)


connection.end();