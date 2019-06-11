module.exports = {
    Data : require('./Data'),
    
    ToPos : async function (str){
        var Pos = {
            Lati : await this.Data.GetLati(str),
            Longi : await this.Data.GetLongi(str)
        }
        
        return new Promise(resolve => {
            resolve(Pos);
        });
    },
    
    AllPosToJson : async function (){
        var List = await this.Data.GetTableList();
        
        // 모든 기관의 위치
        var All_Loc = [];
        
        for (var i = 0; i < List.length; i++){
            All_Loc.push(await this.ToPos(List[i]));
            console.log(i);
        }
        
        // 모든 기관의 위도, 경도 정보를 JSON으로 만든다.
        var Json = JSON.stringify(All_Loc);
        
        return new Promise(resolve =>{
        
            resolve(Json);
        });
    }
}