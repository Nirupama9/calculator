window.onload = digitalClock;
setInterval(digitalClock, 1000)

function digitalClock() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    if(h<12)
    {
        setTime("mr","AM");
    }
    else{
        setTime("mr","PM")
    }
    if(h!==12 )
    {
        h=h%12;
        if(h===24)
        {
            h=h+12;
        }
    }
    setTime('hr', h);
    setTime('min', m);
    setTime('sec', s);
}
function setTime(id, val) {
    if(val<10)
    {
        val='0'+val;
    }
    
    document.getElementById(id).innerHTML = val;
}