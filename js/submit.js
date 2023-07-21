const submitBtn = document.querySelector('.contact__form__submit')

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    const form = document.querySelector('.contact__form')
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const phone = form.querySelector('#phone').value;
    const onderwerp = form.querySelector('#onderwerp').value;
    const bericht = form.querySelector('#bericht').value;


    Email.send({

        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"

    }).then(
        message => alert(message)
    );

})