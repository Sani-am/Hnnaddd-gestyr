https://teachablemachine.withgoogle.com/models/ktaKLCAbk/


Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});


Webcam.attach('#Camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML='<img id="Picture" src="'+data_uri+'"/>';
    });
}


classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ktaKLCAbk/model.json',modelloaded);

function modelloaded(){
    console.log('Model Is Loaded!');
}