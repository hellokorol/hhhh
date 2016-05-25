'use strict';
var numArray;

function thousands_separators(num) {
numArray = num.tostring().split("");
for(i=numArray.length;1>0;i--){
  if(numArray[i]==".")
     {do   i-3;
           numArray.push(",");
      while(i>0);    
     }
}
text = buildText(numArray);

    return text;
}
function buildText(numArray) {
    var text = "";

    numArray.forEach(function (element) {
        text += element;
    });

    return text;
}
module.exports = thousands_separators;
