const Data = require('./Data');

async function aSyncCall(){
    console.log('start');
    var List = await Data.GetTableList();
    await Data.GetLati(List[1]);
    console.log('end');
}

aSyncCall();