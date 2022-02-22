
var btn_translator = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputText = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/valyrian.json";

function errorHandler(error){
    console.log("Error occured "+error);
    alert("Something went wrong with the Server. Please try again in sometime");
}

function getTranslationUrl(text) {
    return serverURL + "?" + "text=" +text;
}

function clickHandler() {
    
    var txtInput = textInput.value;
    fetch(getTranslationUrl(txtInput))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputText.innerText = translatedText;
    })
    .catch(errorHandler);

};


btn_translator.addEventListener("click", clickHandler);

