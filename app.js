let earthquake;
let count = 0;
let button1 = document.getElementById('info_button');
let button2 = document.getElementById('interact');
let lat;
let long;

function getData(){
    console.log('page is loaded');
    fetch('earthquake.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[0]);
        earthquake = data;
    })
    .catch(error => {
        console.log("Error" + error);
    })
}

button1.addEventListener('click', function(){
    let textElement = document.getElementById('info_t');
    textElement.innerHTML = earthquake[count]["Location"];
    //document.getElementById("info_t").innerHTML = "cool text";
    console.log("button pressed");
})

button2.addEventListener('click', function(){
    fill(0);
    //rect(random(0, 700), random(500, 700), 10, 10);
    rect(random(100, 600), 400, lat, long);
    //noFill();
    //rect(random(0, 700), random(0, 700), long, long); 
    //rect(count*5, random(0, 700), lat, lat);
    console.log("button 2 pressed");
})

function setup(){
    createCanvas(windowWidth, windowHeight);
    getData();
}

function draw() {
    if(earthquake){
    //console.log(earthquake[0]);
    angleMode(DEGREES);
    //rotate(10); 

    lat = earthquake[count]["Latitude"];
    long = earthquake[count]["Longitude"];
    
    rectMode(CORNER);
    let x = 1;
    //frameRate(5);
    translate(200, 0);
    noFill();
    rect(count*7, random(100, 800), long, long);
    //fill(150); 
    rect(count*7, random(0, 400), lat, lat); 
    fill(250); 

    rect(count*7, );
    rect(count*6, 400, lat, long);
    translate(random(650, 800), 700);
    rotate (180);
   
    rect(count*6, 300, lat, long);

    //rect(count*7, 400, long, lat);
    count=count+1;
    if(count == 114){
        count=0;
        //rotate(10); 
        //if(x>0, x<count, x++){
            //rect(x, x, waitTime, waitTime);
        //}
        //rect(count, 50, waitTime, waitTime);

    }

    } else{
        //console.log(earthquake);
    }
}




//pick random object from array

