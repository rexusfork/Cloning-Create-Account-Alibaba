function validation(){
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confirm_password = document.querySelector('#confirm_password').value;
    let status_email = document.querySelector('#error_email');
    let status_password = document.querySelector('#error_password');
    let status_coef = document.querySelector('#error_passconfirm');
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!email.match(regExp)){
        status_email.innerHTML = "Please enter your valid email";
        status_email.style.color = "red";
    }
    if(email == ""){
        status_email.innerHTML = "Please enter your email";
        status_email.style.color = "red";
    }
    if(password == ""){
        status_password.innerHTML = "Please enter your password";
        status_password.style.color = "red";
    }
    if(confirm_password == ""){
        status_coef.innerHTML = "Please enter your password";
        status_coef.style.color = "red"
    }
    if(!confirm_password.match(password)){
        status_coef.innerHTML = "Password is not same";
        status_coef.style.color = "red";
    }
    if((confirm_password.match(password) && password != "") && (email != "" && email.match(regExp))){
        alert("Selamat Datang");
    }
    console.log(email);
    console.log(password);
}

let check = 1;

function disable_btn(){
    document.getElementById('submit').disabled = true;
}

function enable_btn(){
    document.getElementById('submit').disabled = false;
}

function agree(){
    check++;
    if(check % 2 == 1){
        disable_btn();
    } else{
        enable_btn();
    }
}