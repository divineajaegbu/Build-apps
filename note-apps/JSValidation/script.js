const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')


// sendData

const sendData = (sRate, count) => {
    if (sRate === count) {
        alert('Sign up sucessful')
        swal("Welcome to Note app!👍", "Sign up successful", "success")
    }
}

// add event
form.addEventListener('submit', e => {
    e.preventDefault();
    validate()
})

function time() {
    setTimeout(() => {
        location.assign("../note-app-converter/public/index.html")
    }, 8000);
}

function reload() {
    location.reload()
}


//for final data validation
const successMsg = () => {
    let formCon = document.getElementsByClassName('form-control')

    var count = formCon.length - 1
    for (var i = 0; i < formCon.length; i++) {
        if (formCon[i].className === 'form-control success') {
            var sRate = 0 + i
            console.log(sRate)
            sendData(sRate, count)
        } else {
            return false
        }
    }
}
//more email validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol <= 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

//define the validate function
const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    //validate username

    if (usernameVal === "") {
        setErrormsg(username, "username cannot be blank")
    } else if (usernameVal.length <= 2) {
        setErrormsg(username, 'username min 3 characters')
    } else {
        setSuccessMsg(username)
    }

    //validate email
    if (emailVal === "") {
        setErrormsg(email, "username cannot be blank")
    } else if (!isEmail(emailVal)) {
        setErrormsg(email, 'Not a valid Email')
    } else {
        setSuccessMsg(email)

    }

    //validate phone
    if (phoneVal === "") {
        setErrormsg(phone, 'phone cannot be blank');
    } else if (phoneVal.length !== 11) {
        setErrormsg(phone, 'Not a valid phone number')
    } else {
        setSuccessMsg(phone)
        // time()

    }

    //validate password
    if (passwordVal === "") {
        setErrormsg(password, 'password cannot be blank');
    } else if (passwordVal.length <= 5) {
        setErrormsg(password, 'Not a valid password number')
    } else {
        setSuccessMsg(password)
    }
    //validate password
    if (cpasswordVal === "") {
        setErrormsg(cpassword, 'confirm password cannot be blank');
    } else if (passwordVal !== cpasswordVal) {
        setErrormsg(cpassword, 'password are not matching')
    } else {
        setSuccessMsg(cpassword)
    }

    successMsg();
}

function setErrormsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = errormsgs;
    reload()
}


function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    time()
}


function myFunction() {
    var x = document.getElementById('password');
    if (x.type === 'password') {
        x.type = 'text'
        document.querySelector('.hide').style.display = 'inline-block'
        document.querySelector('.show').style.display = 'none'
    } else {
        x.type = 'password'
        document.querySelector('.hide').style.display = 'none'
        document.querySelector('.show').style.display = 'inline-block'
    }
}
