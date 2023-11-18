//email send:
const mailer = require('nodemailer');

let transport=mailer.createTransport({
    service:'gmail',
    auth:{
        user:'xyz@gmail.com',
        pass:'yourPassword'
    }
})

let messageOb={
    from:'xyz@gmail.com',
    to:'abc@gmail.com',
    subject:'Email using NODE JS',
    text:'this mail is send using node js'
}

transport.sendMail(messageOb,(error,info) =>{
    if(error){
        console.log(error);
    }
    else{
        console.log("Email sent");
        console.log(info.response);
    }
});