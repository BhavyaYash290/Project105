Webcam.attach("#camera");
var cam=document.getElementById("camera");

Webcam.set({
    width:400,
    height:320,
    image_format:'png',
    png_quality:90, 
});
function takeSnapshot(){
    Webcam.snap(function(data_uri){document.getElementById("viewResult").innerHTML='<img id="selfie_image" src="'+data_uri+'">';});
}
console.log("ML5 Version :  ", ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model is loaded.")
}
function check(){
    var img=document.getElementById("selfie_image");
    classifier.classify(img,gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultObjectName").innerHTML=results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML=results[0].confidence;
    }
}