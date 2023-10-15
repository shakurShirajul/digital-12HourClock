/*
This Code Is Written By Shirajul
Islam Shakur (C213040)
*/
myFuntion = () => {
    let d = new Date();
    let ho = d.getHours();
    let h = ho % 12 || 12;
    let times = ho>=12 ? "PM" : "AM"
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = d.getMinutes();
    document.getElementById("seconds").innerHTML = d.getSeconds();
    document.getElementById("ampm").innerHTML = times;
}
setInterval(myFuntion, 1000);