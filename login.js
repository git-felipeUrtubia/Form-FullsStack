
const form_login = document.getElementById('form_login');
const btn_submit = document.getElementById('btn_submit');
const content_message_login = document.querySelector('.content-message-login');
const message_login = document.querySelector('.content-message-login p');
const inputs = document.querySelectorAll('input');

btn_submit.addEventListener('click', (event) => {
    event.preventDefault();
    let login = false;
    let vacio = Array.from(inputs).some(input => input.value.trim() == "" || input.value.trim() == null);

    let obj = Object.fromEntries(new FormData(form_login));
    let data = {
        email_login: obj.email_login,
        passd_login: obj.passd_login
    }

    let users = JSON.parse(localStorage.getItem("users"));
    for(let i=0; i < users.length; i++) {
        if(
            users[i].email == data["email_login"] &&
            users[i].passd == data["passd_login"]
        ) {
            login = true;
        }else {
            login = false;
        }
    }


    if(vacio) {
        content_message_login.style.display = "flex";
        content_message_login.style.backgroundColor = "red"
        message_login.textContent = "* Debes llenar todos los campos."
    }else if(login == false) {
        content_message_login.style.display = "flex";
        content_message_login.style.backgroundColor = "red"
        message_login.innerHTML = 
            '* No existe un usuario con ese correo. <a href="./registro.html">¿Quieres registrarte?</a>'
    }else {
        content_message_login.style.display = "flex";
        content_message_login.style.backgroundColor = "green"
        message_login.textContent = "Inicio de sesión exitoso. ¡Bienvenido!";
    }

})



















