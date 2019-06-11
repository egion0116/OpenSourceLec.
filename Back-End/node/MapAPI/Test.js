const PosJson = require('./PosJson');

async function AsyncCall(){
    var Pre_Json = await PosJson.AllPosToJson();

    console.log(Pre_Json);

    return new Promise(resolve =>{
        resolve(Pre_Json);
    })
}

AsyncCall();