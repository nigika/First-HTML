document.querySelector('#btn').addEventListener('click', function(){
    myText();
})

function myText() {
    let err1, err2, text_val, pass_val;
    let text = document.getElementById('text');
    let pass = document.getElementById('password');
    err1 = document.getElementById('err1');
    err2 = document.getElementById('err2');
    text_val = document.getElementById('text').value;
    pass_val = document.getElementById('password').value;
    try {
        if (text_val == "") {
            text.classList.remove('valid');
            text.classList.add('err');
            err1.innerHTML = 'Qiymat bo\'sh';
        }
        if (text_val.length > 0) {
            text.classList.remove('err');
            text.classList.add('valid');
            err1.innerHTML = '';
        }
        if (pass_val == "") {
            pass.classList.remove('valid');
            pass.classList.add('err');
            err2.innerHTML = 'Qiymat bo\'sh';
        }
        if (pass_val.length > 0) {
            pass.classList.remove('err');
            pass.classList.add('valid');
            err2.innerHTML = '';
        }
    }
    catch (e) {
        console.log(e)
    }
    console.log(text_val, pass_val)
}