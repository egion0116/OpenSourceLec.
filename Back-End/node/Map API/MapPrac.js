var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'localhost',
    user : 'myproj',
    password : '06dktmskf)^',
    database : 'Project',
    port : 3306
});

param = 'critical_fasc';

con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

con.query('SELECT WGS84Lati FROM ' + param, (err, result, field) => {
    if (err) throw err;

    var arr_lati = [];

    for (var i = 0; i < result.length; i++)
        arr_lati.push(result[i].WGS84Lati);

    console.log(arr_lati);
});

con.query('SELECT WGS84Longi FROM ' + param, (err, result, field) => {
    if (err) throw err;

    var arr_longi = [];
    
    for (var i = 0; i < result.length; i++)
        arr_longi.push(result[i].WGS84Longi);

    console.log(arr_longi);
});

con.end();