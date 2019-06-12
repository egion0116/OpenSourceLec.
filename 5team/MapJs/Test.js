const Data2 = require('./Data2');

async function ASyncCall(){
    var Cities = await Data2.GetCity();

    var Total = await Data2.GetTotal(Cities[1]);

    console.log(Total);

    return new Promise(resolve=>{
        resolve();
    })
}

ASyncCall();