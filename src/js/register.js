import { LS_KEY } from "./helpers";
import { onUserServiceAdd, onUserServiceLogin} from "./api";


const refs = {
    form: document.querySelector('.js-form'),
}

refs.form.addEventListener('submit', onUnserAdd);

function onUnserAdd(e) {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    const user = {
        name: name.value,
        email: email.value,
        password: password.value,
    }

    onUserServiceAdd(user).then((data) => {
        console.log(data);
        localStorage.setItem(LS_KEY, data.token)
    })
    
}
