function sendData() {
    const Url = 'https://json'
    const password = $("#password").val();
    let passwordRepeat = $("#password2").val();
    let email = $("#email").val();
    if (password.trim() !== passwordRepeat.trim()) {
        console.log("password2 doesn't equals to password1!");
        window.alert("passwords aren't equals!");
        return;
    }
    let data1
    {
        this.email = email;
        this.password = password;
    }
    moveToLogInPage();
    $.ajax({
        url: Url,
        type: "post",
        data: data1,
        success: function (){
            moveToLogInPage();
        }


    })
}
function moveToLogInPage(){
    window.location.replace("log-in-page.html");
}