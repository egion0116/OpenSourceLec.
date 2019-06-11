const Data = require('./Data');
const async = require('async');

function ToPos(str)
{
    async.waterfall([
        function(){
            var Pos_Dat = {
                Lati : Data.GetLati(str),
                Longi : Data.GetLongi(str)
            }
        },
        function(){
            return Pos_Dat;
        }
    ])
}

async.waterfall([
    function(){
        var pos1 = Data.GetTableList();
    },
    function(){
        console.log(pos1);
    }
]);