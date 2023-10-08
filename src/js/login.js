import { LS_KEY } from "./helpers";
import { onUserServiceAdd, onUserServiceLogin } from "./api";


const refs = {
    form: document.querySelector('.js-form'),
}

refs.form.addEventListener('submit', onUserLogin);

function onUserLogin(e) {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    
    const user = {
        email: email.value,
        password: password.value,
    }

    onUserServiceLogin(user).then((data) => {
        console.log(data);
        localStorage.setItem(LS_KEY, data.token)
        location.replace('/')
    })
    
}

