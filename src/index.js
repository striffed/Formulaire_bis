import './global';

document.getElementById('passwordtoggle').addEventListener('click', ()=>{

    var x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
})


