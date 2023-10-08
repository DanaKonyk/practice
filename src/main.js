import { LS_KEY } from "./js/helpers";
import { onUserServiceLogout } from "./js/api";

const loggedIn = localStorage.getItem(LS_KEY);

const refs = {
    register: document.querySelector('.register'),
    logIn: document.querySelector('.login'),
    contacts: document.querySelector('.contacts'),
    logOut: document.querySelector('.logout'),
}

if (loggedIn === null) {
logOutCheck()
} else {
logInCheck()
}

refs.logOut.addEventListener('click', onLogOut);

function onLogOut() {
    onUserServiceLogout();
    localStorage.removeItem(LS_KEY);
    logOutCheck();
}

function logOutCheck() {
    refs.register.classList.remove('is-hidden')
    refs.logIn.classList.remove('is-hidden')
    refs.contacts.classList.add('is-hidden')
    refs.logOut.classList.add('is-hidden')
}

function logInCheck() {
   refs.register.classList.add('is-hidden')
    refs.logIn.classList.add('is-hidden')
    refs.contacts.classList.remove('is-hidden')
    refs.logOut.classList.remove('is-hidden') 
}