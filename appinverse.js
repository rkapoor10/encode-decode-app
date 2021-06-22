var btnCode = document.querySelector("#btn-code");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// var btnInverse = document.querySelector("#btn-inverse")

var n=2
var serverURL = "https://lessonfourapi.ritikkapoor.repl.co/translate/yoda.json"

function getCodedURL (text)
{
    return serverURL + "?" + "text=" + text + "&&" + "no=" + n
}

function errorHandler()
{
    console.log("error occured",error);
    alert("Something wrong with server! Please try again later.")
}

function clickHandler(){
    //taking input
    var inputText = txtInput.value
    console.log(n)

    //calling server for processing 
    fetch(getCodedURL(inputText))
    .then(response=>response.json())
    .then(json=>{
        var codedTxt = json.contents.translated
        outputDiv.innerText = codedTxt})
    .catch(errorHandler)
}

// function clickInverse(){
//    n = n+1
//    console.log("clicked inverse",n)
// }


// btnInverse.addEventListener("click",clickInverse)
btnCode.addEventListener("click", clickHandler)
