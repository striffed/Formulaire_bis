import './global';

document.getElementById('passwordtoggle').addEventListener('click', ()=>{

    var x = document.getElementById("password");

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
})

const oneSecondInMillisecond = 1000
const email = "maigret@lp.wd"
const password = 'password'

const onLoginFormSubmit = e => {
    e.preventDefault();

    startPendingState()

    setTimeout(() => {
        stopPendingState()

        const data = new FormData(e.target)
        processDataForm(data)

    }, oneSecondInMillisecond)
}

const startPendingState = () =>{
    const button = document.querySelector('#login')
    button.setAttribute('disabled', '')
}

const processDataForm = data => {
    if (data.get('password') === password || data.get('mail') === email){
        handleSuccessMessage()
    } else {
        handleErrorMessage()
    }
}

const handleErrorMessage = () => {
    document.querySelector('#messageok').style.display="none";
    document.querySelector('#messageerror').style.display="block";
}

const handleSuccessMessage = () => {
    document.querySelector('#messageerror').style.display="none";
    document.querySelector('#messageok').style.display="block";

}

const stopPendingState = () => {
    const button = document.querySelector('#login')
    button.removeAttribute('disabled')
}

document.querySelector('#connexion_form').addEventListener('submit', onLoginFormSubmit);
