module.exports = {
    mysql : require('mysql'),

    // 연결 열기
    OpenCon : async function(){
        return new Promise(resolve => {
            var con = this.mysql.createConnection({
                host : 'localhost',
                user : 'myproj',
                password : '06dktmskf)^',
                database : 'Disablers'
            });
    
            con.connect((err) => {
                if (err) throw err;
                console.log('Connected!');

                resolve(con);
            });
        });
    },
    
    // 각 도시의 이름들을 받아온다.
    GetCity : async function(){
        var con = await this.OpenCon();
        
        return new Promise(resolve => {

            // 도시이름 배열
            var City_Names = [];

            con.query('SELECT City FROM dis_Gyeongi', (err, result, field) => {
                if (err) throw err;

                // 테이블의 리스트를 읽어 저장한다.
                for (var i = 0; i < result.length; i++){
                    // 일반적인 코드를 작성하기 위해 수정해야하는 부분이 있다!
                    City_Names.push(result[i].City);
                }

                con.end();

                resolve(City_Names);
            });
        });
    },

    GetTotal : async function(str) {
        const con = await this.OpenCon();

        return new Promise(resolve=>{
            var City_Total = [];

            con.query(`SELECT Total FROM dis_Gyeongi WHERE City = '${str}'`, (err, result, field)=>{
                if (err) throw err;

                // 테이블의 리스트를 읽어 저장한다.
                for (var i = 0; i < result.length; i++){
                    // 일반적인 코드를 작성하기 위해 수정해야하는 부분이 있다!
                    City_Total.push(result[i].Total);
                }
            
                con.end();

                resolve(City_Total);
            })
        })
    }
};