module.exports = {
    mysql : require('mysql'),
    async : require('async'),

    // 커넥션 만들고 열기
    OpenCon : function(){
        var con = this.mysql.createConnection({
            host : 'localhost',
            user : 'myproj',
            password : '06dktmskf)^',
            database : 'Project'
        });

        con.connect((err) => {
            if (err) throw err;
            console.log('Connected!');
        });

        return con;
    },

    // 테이블의 리스트들을 가져온다.
    GetTableList : function(){
        // DB열기 - 열고자 하는 대상 수정을 위해서는 해당 객체의 프로파일 수정
        var con = this.OpenCon();

        // 테이블의 리스트를 저장해놓는다.
        Table_List = [];

        con.query('SHOW TABLES', function(err, result, field){
            if (err) throw err;

            // 테이블의 리스트를 읽어 저장한다.
            for (var i = 0; i < result.length; i++){
                Table_List.push(result[i].Tables_in_Project);
            }

            con.end();

            return(Table_List);
        })
    },

    // 경도 값을 반환
    GetLongi : function(param){
        var con = this.OpenCon();

        // SQL로 경도를 알아낸다.
        con.query('SELECT WGS84Longi FROM critical_fasc', function(err, result, field){
            if (err) throw err;

            // 경도의 배열
            var arr_longi = [];

            for (var i = 0; i < result.length; i++){
                arr_longi.push(result[i].WGS84Longi);
            }

            con.end();

            console.log(arr_longi);

            return(arr_longi);
        })
    },

    // 위도값을 반환
    GetLati : function(param){
        var con = this.OpenCon();

        con.query('SELECT WGS84Lati FROM critical_fasc', function(err, result, field){
            if (err) throw err;

            var arr_lati = [];
        
            for (var i = 0; i < result.length; i++)
                arr_lati.push(result[i].WGS84Lati);

            con.end();

            console.log(arr_lati);

            return(arr_lati);
        });
    }
}

