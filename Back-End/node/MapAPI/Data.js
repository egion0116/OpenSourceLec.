module.exports = {
    mysql : require('mysql'),

    // 경도 값을 반환
    GetLongi : (param) => {
        var con = mysql.createConnection({
            host : 'localhost',
            user : 'myproject',
            password : '06dktmskf)^'
        })

        con.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
        });

        // 경도의 배열
        var arr_longi = [];

        // SQL로 경도를 알아낸다.
        con.query('SELECT WGS84Longi FROM ' + param, (err, result, field) => {
            if (err) throw err;

            for (var i = 0; i < result.length; i++)
                arr_longi.push(result[i].WGS84Longi);
        })

        con.end();

        return(arr_longi);
    },

    // 위도값을 반환
    GetLati : (param) => {
        var con = mysql.createConnection({
            host : 'localhost',
            user : 'myproject',
            password : '06dktmskf)^'
        })

        con.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
        });

        // 위도의 배열
        var arr_lati = [];

        con.query('SELECT WGS84Lati FROM ' + param, (err, result, field) => {
            if (err) throw err;
        
            for (var i = 0; i < result.length; i++)
                arr_lati.push(result[i].WGS84Lati);
        });

        con.end();

        return(arr_lati);
    }
}

