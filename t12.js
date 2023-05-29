let Hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let second = document.getElementById('second');

setInterval(()=>{
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime+mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    Hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;

},1000);
   