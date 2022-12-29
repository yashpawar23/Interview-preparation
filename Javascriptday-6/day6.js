function getText(){
    document.getElementById("heading_tag1").innerText = "MERN stack"
}

function replaceText(){
    document.getElementById("heading_tag2").innerText = "Welcome To Elivation Acadmy"
}

function orignalText(){
    document.getElementById("heading_tag2").innerText = "Hellow World"
}

function time() {
    let dt = new Date();
    let hrs = dt.getHours();
    let min = dt.getMinutes();
    let sec = dt.getSeconds();
    let session = "AM"

    if (hrs > 12) {
        session = "PM"
      }

      hrs = hrs % 12

      hrs = (hrs < 10) ? `0${hrs}` : hrs;
      min = (min < 10) ? `0${min}` : min;
      sec = (sec < 10) ? `0${sec}` : sec;
    
    


      document.getElementById('time_hour').innerText = hrs;
      document.getElementById('time_min').innerText = min;
      document.getElementById('time_sec').innerText = sec;
      document.getElementById('time_session').innerText = session;
    

  setTimeout(time, 1000);

}

time();

function hideText(){
    document.getElementById("hellow_workld_text").style.display = 'none';
}

function viewText(){
    document.getElementById("hellow_workld_text").style.display = 'block';
}