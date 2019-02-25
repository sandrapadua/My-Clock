let currentDate,currentHour,currentMinute,currentSecond

function init(){
    currentDate=new Date();
    currentHour=currentDate.getHours();
    currentMinute=currentDate.getMinutes();
    currentSecond=currentDate.getSeconds();
    clock();
};

function clock(){
    currentSecond++;
    if(currentSecond==60){
        currentSecond=0;
        currentMinute++;
        if(currentMinute==60){
            currentMinute=0;
            currentHour++;
            if(currentHour==24){
                currentHour=0;z
            }
        }
    }
    currentSecond = checkTime(currentSecond)
    currentMinute = checkTime(currentMinute)
    currentHour = checkTime(currentHour)

    document.getElementById("hr").innerHTML = currentHour
    document.getElementById("min").innerHTML = currentMinute
    document.getElementById("sec").innerHTML = currentSecond

    let display = setTimeout(clock,1000);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    } 
    return i
}

