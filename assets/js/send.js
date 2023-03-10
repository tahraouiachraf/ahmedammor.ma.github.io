$('#SendMail').on('click', function () { 
    Email.send({
        Host : "smtp.gmail.com",
        Username : "tahraouiachraf1@gmail.com",
        Password : "ihxduuaalaazkfov",
        To : 'tahraoui.c5@gmail.com',
        From : "tahraouiachraf1@gmail.com",
        Subject : "Test",
        Body : "Test"
    }).then(
        alert('test')
    );
})