// alert("Hello World!");

var birthday = new Date("July 29 1999 2:30");
var now = new Date();
var yearsOutput;
var bdayDays;


$(document).ready(function () {

  // function currentTime() {
  //   let date = new Date(); 
  //   let hh = date.getHours();
  //   let mm = date.getMinutes();
  //   let ss = date.getSeconds();
  //   let session = "AM";

  //   if(hh === 0){
  //       hh = 12;
  //   }
  //   if(hh > 12){
  //       hh = hh - 12;
  //       session = "PM";
  //    }

  //    hh = (hh < 10) ? "0" + hh : hh;
  //    mm = (mm < 10) ? "0" + mm : mm;
  //    ss = (ss < 10) ? "0" + ss : ss;

  //    let time = hh + ":" + mm + ":" + ss + " " + session;

  //   document.getElementById("clock").innerText = time; 
  //   let t = setTimeout(function(){ currentTime() }, 1000);
  // }
  function currentDay() {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    console.log('Day of year: ' + day);
  }
  function bdayDay() {

    const dayOfYear = date =>
      Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

  }
  function currentAge() {
    var now = new Date();
    yearsOutput = now.getFullYear() - birthday.getFullYear();
    monthOutput = now.getMonth() - birthday.getMonth();
  }

  bdayDay();
  currentDay();
  currentAge();

  console.log(bdayDays);
  console.log("Hello avery website looks great!");
  console.log(birthday);
  console.log(yearsOutput);


  document.getElementById("years").innerHTML = yearsOutput;
  document.getElementById("months").innerHTML = monthOutput;

  // currentTime();

})
