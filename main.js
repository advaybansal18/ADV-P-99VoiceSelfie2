var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("text_box").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=content;
    console.log(content);
    speak();
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("text_box").value;
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
}
   camera=document.getElementById("camera");
   Webcam.set({
       width:375,
       height:250,
       image_format:'png',
       png_quality:90
   });