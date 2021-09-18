setInterval(() => {
    d = new Date();
    hourtime = d.getHours();
    minutetime = d.getMinutes();
    secondtime = d.getSeconds();
    rhour = 30*hourtime + minutetime/2;
    rminute = 6*minutetime;
    rsecond = 6*secondtime;

    hour.style.transform = `rotate(${rhour}deg)`
    minute.style.transform = `rotate(${rminute}deg)`
    second.style.transform = `rotate(${rsecond}deg)`

}, 1000);