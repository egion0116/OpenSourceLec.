const Data = require('./Data');
const async = require('JSON');

async function aSyncCall(){
    console.log('start');
    var List = await Data.GetTableList();
    console.log(a);
    console.log('end');
}

aSyncCall();