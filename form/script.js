function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form__message')
    const regEx = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

    if (typeof (message) === 'string' && regEx) {
        messageElement.textContent = message;
        messageElement.classList.remove('form__message--success', 'form__message--error')
        messageElement.classList.add(`form__message--${type}`)
    }
}


function setInputError(inputElement, message) {
    inputElement.classList.add('form__input--error')
    inputElement.parentElement.querySelector('.form__input-error-message').textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove('form__input--error')
    inputElement.parentElement.querySelector('.form__input-error-message').textContent = "";
}


document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector("#login")
    const createAccountForm = document.querySelector("#createAccount")
    const registerAccount = document.querySelector('#registerAccount')


    const linkCreateAccount = document.querySelector('#linkCreateAccount')
    const linkLogin = document.querySelector('#linkLogin')



    linkCreateAccount.addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.add('form--hidden')
        createAccountForm.classList.remove('form--hidden')
    })



    linkLogin.addEventListener('click', e => {
        e.preventDefault();
        loginForm.classList.remove('form--hidden')
        createAccountForm.classList.add('form--hidden')
    });


    // document.querySelector('#linkRegister').addEventListener('click', e => {
    //     e.preventDefault()
    //     registerAccount.classList.add('form--hidden')
    //     loginForm.classList.remove('form--hidden')
    // })






    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()

        //perform your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination")
    })

    document.querySelectorAll('.form__input').forEach(inputElement => {
        inputElement.addEventListener('blur', e => {
            if (e.target.id === 'signupUsername' && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length")
            }
        })
        inputElement.addEventListener('input', () => {
            clearInputError(inputElement)
        })
    })
})


function myFunction() {
    var x = document.getElementById('myInput');
    if (x.type === 'password') {
        x.type = 'text'
        document.querySelector('.hide').style.display = 'inline-block'
        document.querySelector('.show').style.display = 'none'
    } else {
        x.type = 'passw'
        document.querySelector('.hide').style.display = 'none'
        document.querySelector('.show').style.display = 'inline-block'
    }
}