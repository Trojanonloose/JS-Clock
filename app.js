//selectors
const time = document.querySelector('.current-time');
const day = document.querySelectorAll(".days p");

//variable
const currentDay = new Date().getDay();
let showTwelveHourTime = true;

//12 and 24 hour switch
const timeBtn12 = document.querySelector('.twelve-hour');
timeBtn12.addEventListener('click', () =>{
    showTwelveHourTime = true;
    timeBtn12.classList.add("active-time-btn");
    timeBtn24.classList.remove("active-time-btn");
    replaceTime();
});

const timeBtn24 = document.querySelector('.twentyfour-hour');
timeBtn24.addEventListener('click', () =>{
    showTwelveHourTime = false;
    timeBtn24.classList.add("active-time-btn");
    timeBtn12.classList.remove("active-time-btn");
    replaceTime();
});

//active day
day[currentDay].classList.add("active-day");


//display time
const replaceTime = () => {
    let today = new Date(),
        h = today.getHours(),
        m = today.getMinutes(),
        s = today.getSeconds();
    
    if(s < 10){
        s = "0" + s;
    }
    
    if(showTwelveHourTime && h > 12){
        s = s + " PM"
    }

    if(showTwelveHourTime && h < 12){
        s = s + " AM"
    }

    if(showTwelveHourTime && h > 12){
        h -= 12;
    }

    if(m < 10){
        m = "0" + m;
    }

    if(h < 10){
        h = "0" + h;
    }

    time.innerText = h + ":" + m + ":" + s;
};

setInterval(replaceTime, 1000);
replaceTime();