const container = document.querySelector('.container')
const headingSpan1 = document.querySelector('.heading-span-2')

const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

const form = document.querySelector('.form')
const submit = document.querySelector('.form-btn')


const clearForm = () => {
    document.querySelectorAll('.form-input-wrapper').forEach((item) => {
        item.className = 'form-input-wrapper';
    })

    form.reset()
}

clearForm()



document.querySelector('.signup-btn').addEventListener('click', () => {
    container.classList.add('change')
    setTimeout(() => {
        headingSpan1.textContent = 'Up'
    }, 200)
    form.className = 'form sign-up';
    clearForm()
})


document.querySelector('.signin-btn').addEventListener('click', () => {
    container.classList.remove('change')
    setTimeout(() => {
        headingSpan1.textContent = 'In'
    }, 200)

    form.className = 'form sign-In';
    clearForm()

})

const error = (input, message) => {
    const inputWrapper = input.parentElement;


    if (message) {
        inputWrapper.className = "form-input-wrapper error";
        inputWrapper.querySelector('.message').textContent = message

    }

}

const success = (input) => {
    const inputWrapper = input.parentElement;
    inputWrapper.className = 'form-input-wrapper view'
}


const checkEmail = (input) => {
    const regEx = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

    if (regEx.test(input.value.trim())) {
        success(input)
    } else {
        error(input, 'Email is not valid')
    }
}
const checkRequiredFields = (inputArr) => {
    inputArr.forEach((input) => {
        if (input.value.trim() === "") {
            if (input.id === "password2") {
                error(input, "Passord confirmation is required")
            } else {
                //Error
                error(input, `${input.id} is required`)
            }
        } else {
            //Success
            success(input)
        }
    })
}


const passwordsMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        error(input2, "Passwords do not match")
    }

}

const checkLength = (input, min, max) => {

    if (input.value.length < min) {
        error(input, `${input.id} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        error(input, `${input.id} must be less than ${max} characters`)
    } else {
        success(input)
    }
}




form.addEventListener('click', (e) => {
    e.preventDefault()

    if (form.classList[1] === 'sign-up') {
        checkRequiredFields([username, email, password, password2])
        checkLength(username, 2, 15)
        checkLength(password, 5, 25)
        passwordsMatch(password, password2)
    } else {
        checkRequiredFields([email, password])

    }

    checkEmail(email)
})