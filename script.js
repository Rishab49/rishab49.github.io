const { createFFmpeg } = FFmpeg;
const ffmpeg = createFFmpeg({
  log: true
});

const transcode = async (webcamData) => {
  const message = document.getElementById('message');
  const name = 'record.webm';
  await ffmpeg.load();
  message.innerHTML = 'Start transcoding';
  await ffmpeg.write(name, webcamData);
  await ffmpeg.transcode(name,  'output.mp4');
  message.innerHTML = 'Complete transcoding';
  const data = ffmpeg.read('output.mp4');

  const video = document.querySelector('video');
  video.src = URL.createObjectURL(new Blob([data.buffer], { type: 'video/mp4' }));
  dl.href = video.src;
  dl.innerHTML = "download mp4"
}




let CANVAS;
let ctx;
let video = document.querySelector("video");
let mediaRecorder;
window.addEventListener("DOMContentLoaded",function(){
    CANVAS = document.querySelector(".playground");
    CANVAS.height = CANVAS.clientHeight * 2;
    CANVAS.width = CANVAS.clientWidth * 2;
    ctx = CANVAS.getContext("2d");
 
   


    fn().then(async ({url, blob})=>{
        transcode(new Uint8Array(await (blob).arrayBuffer()));
    });
    
 

});


function fn(){
    let texts=[
        "Hello Guys!!",
        "You might",
        "be thinking that...",
        "how can i create an entire video",
        "using just 'HTML'",
    ];
    if (navigator.mediaDevices) {
  
      return new Promise((res)=>{
        var videoStream = CANVAS.captureStream(30);
        mediaRecorder = new MediaRecorder(videoStream,{
            mimeType:"video/webm;codecs=vp8"
        });
        
        var chunks = [];
        mediaRecorder.ondataavailable = function(e) {
          chunks.push(e.data);
          console.log(e);
        };
        
        mediaRecorder.onstop = function(e) {
          var blob = new Blob(chunks,{"type":"video/webm"});
          chunks = [];
          var videoURL = URL.createObjectURL(blob);
          res({videoURL,blob});
        //   video.src = videoURL;
        };

        mediaRecorder.start();
        textSequenceAnimation(texts.shift(),texts);
        setTimeout(function (){console.log("stoppped"); mediaRecorder.stop(); }, 5000);
      });
          }
}
function textSequenceAnimation(text,texts){
        drawText(true,text);
        if(texts.length > 0){
            setTimeout(function(){
                textSequenceAnimation(texts.shift(),texts);
            },text.length*100);
           
        }

}








function drawText(isCentered,text){
    ctx.clearRect(0,0,CANVAS.width,CANVAS.height);
    ctx.font = "100px Manrope";
    isCentered ? ctx.textAlign = "center" : "";
    ctx.fillStyle = "black";
    ctx.fillText(text,CANVAS.width/2,CANVAS.height/2);
}