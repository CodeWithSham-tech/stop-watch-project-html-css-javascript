// create varriable value set 0

var minut = 0;
var second = 0;
var miliSecond = 0;
var hours = 0;

// declare varriable

var interval;

// get id/ target id
var miliHeading = document.getElementById('miliSecond');
var secHeading = document.getElementById('second');
var minutHeading = document.getElementById('minut');
var hoursHeading = document.getElementById('hours');

// get id/ target id
var startbutton = document.getElementById('startbutton');
var stopbutton = document.getElementById('stopbutton');
var resetbutton = document.getElementById('resetbutton');

// create function
function timer(){
    // millsecond increment
    miliSecond++;
    // display value using inner html
    miliHeading.innerHTML = miliSecond;

    //check condition if milisecond greater then or equal to 100
    
    if(miliSecond>=100){

    // then second increment
        second++;
        //display value using inner html
        secHeading.innerHTML = second;
        //milisecond will be 0
        miliSecond = 0;
        // check condition if second greater the 60 or equal
    }else if(second>=60){
        //then minut incremnet
        minut++;
        //display value using inner html
        minutHeading.innerHTML = minut;
        //second will be 0
        second = 0;
        //check condition if minut greater the 60 or equal
    }else if(minut>=60){
        // the hours increment
        hours++;
        // or minut will be 0
        minut = 0;
        // diplay value using innner html
        hoursHeading.innerHTML = hours;   
    } 
 }
    // button click function will be start
     function start(){
        // using set interval function
        interval = setInterval(timer,10);

        // if page refersh start button only enable
        startbutton.disabled = true;

        // stop button will be disabled
        stopbutton.disabled = false;
     }
     // button click function will be stop 
     function stop(){
        // using clear function
        clearInterval (interval);

        // start button or reset button will be disabled
        startbutton.disabled = false;
        resetbutton.disabled = false;
     }

     //click the reset button stop watch will be 0
     function reset(){
        // all id will be 0
        miliSecond = 0;
        second = 0;
        minut = 0;
        hours = 0;

        // and save 0 value in varribale
        miliHeading.innerHTML = miliSecond;
        secHeading.innerHTML = second;
        minutHeading.innerHTML = minut;
        hoursHeading.innerHTML = hours;
        startbutton.disabled = false;
     }