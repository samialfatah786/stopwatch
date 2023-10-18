

var hourhead = document.getElementById('hour')
var minhead = document.getElementById('min')
var sechead = document.getElementById('sec')
var meschead = document.getElementById('msec')


var hour = 0;
var min = 0;
var sec = 0;
var mesc = 0;
var Interval;

function timer() {

    mesc++;
    meschead.innerHTML = mesc;

    if (mesc >= 100) {

        sec++;

        sechead.innerHTML = sec;

        mesc = 0;


    }
    else if (sec >= 60) {
        min++;
        minhead.innerHTML = min
        sec = 0;
    }

    else if (min >= 60) {
        hour++;
        hourhead.innerHTML = hour
        min = 0;
    }




}


function start() {

    Interval = setInterval(timer, 10)
    var sart = document.getElementById('btn')

}


function stop() {
    clearInterval(Interval)


}


function reset() {
    meschead.innerHTML = 0;
    sechead.innerHTML = 0;
    minhead.innerHTML = 0;
    hourhead.innerHTML = 0;

    clearInterval(Interval)


}