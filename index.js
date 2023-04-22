function clock()
{
    var date=new Date();
    var hh=date.getHours();
    var mn=date.getMinutes();
    var ss=date.getSeconds();
    var dt=date.getDate();
    var mo=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    var am_pm='AM'
    if(hh>=12)
    {
        am_pm='PM'
        if(hh>=13)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="May"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="July"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else if(mo==11)
    {
        mo="Dec"
    }
    var k=`${dt}/${mo}/${yy}`
    document.getElementById("Date").innerHTML=k;
    var t=`${hh}:${mn} ${am_pm}`
    document.getElementById("Time").innerHTML=t;
    switch(day)
    {
       case 0:
        day="Sunday" 
        document.getElementById("body").style.backgroundImage="url(1.png)"
        break;

        case 1:
        day="Monday" 
        document.getElementById("body").style.backgroundImage="url(2.png)"
        break;

        case 2:
        day="Tuesday" 
        document.getElementById("body").style.backgroundImage="url(3.png)"
        break;

        case 3:
        day="Wednesday" 
        document.getElementById("body").style.backgroundImage="url(7.png)"
        break;

        case 4:
        day="Thursday"
        document.getElementById("body").style.backgroundImage="url(6.png)" 
        break;

        case 5:
        day="Friday" 
        document.getElementById("body").style.backgroundImage="url(4.png)"
        break;

        case 6:
        day="Satday" 
        document.getElementById("body").style.backgroundImage="url(8.png)"
        break;
    }
    document.getElementById("Day").innerHTML=day;
    document.getElementById("Sec").innerHTML=ss;
    var s=setTimeout(clock,1000);
}
function closeWind(){
    document.getElementById("cointainer1").style.display="none";
}
var a=setTimeout(closeWind,5000)
function greetVideo()
{
    var date=new Date();
    var hh=date.getHours();
    if(hh>=6 && hh<=12)
    {
    document.getElementById("greet").innerHTML="Good Morning"
    document.getElementById("greet").style.color="black"
    document.getElementById("bgvideo").src="sunrise.mp4"
    }
}
greetVideo()
