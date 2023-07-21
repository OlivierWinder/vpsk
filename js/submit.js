const submitBtn = document.querySelector('.contact__form__submit')

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    const form = document.querySelector('.contact__form')
    let name = form.querySelector('#name').value;
    let email = form.querySelector('#email').value;
    let phone = form.querySelector('#phone').value;
    let onderwerp = form.querySelector('#onderwerp').value;
    let bericht = form.querySelector('#bericht').value;
    let body = 'name: ' + name + '</br> email: ' + email + '</br> telefoonnummer: ' + phone + '</br> onderwerp: ' + onderwerp + '</br> bericht: ' + bericht;


    Email.send({

        SecureToken : "f3c441b3-80d5-4701-adf3-752426311028",
        To : 'olivierwinder@gmail.com',
        From : "olivierwinder@gmail.com",
        Subject : "This is the subject",
        Body : body

    }).then(
        message => alert(message)
    );

})