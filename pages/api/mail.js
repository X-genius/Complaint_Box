//const mail = require('@sendgrid/mail');
//const fs = require('fs');

//Key Name which you using sendgrid.
//mail.setApiKey();

//const imageData = `${__dirname}/image.jpg`;
//const imageb64 = fs.readFileSync(imageData).toString("base64");
export default function handler(req, res) {
  const body = JSON.parse(req.body);
  
  const message = `
  Name : ${body.fullName}\r\n
  Phone Number : ${body.phoneNumber}\r\n
  Email : ${body.userEmail}\r\n
  Office Location : ${body.officeLocation}\r\n
  Officer Designation : ${body.designation}\r\n
  Message : ${body.message}
  `;

  const data = {
  to : 'amanbaghel255@gmail.com',
  from : `baghelaman671@gmail.com`,
  subject : 'Complaint Against Govt Employee',
  text : message,
  //html :'<img src="cid:myimagecid"/>',
  // attachments : [
  //   {
  //     filename: 'image.jpg',          
  //     content: imageb64,
  //     content_id: "myimagecid",
  //   }
  // ],
  html : message.replace(/\r\n/g , '<br>')
  };

  mail.send(data)
  .then(() => 
  {
    console.log('Message sent')
  })
  .catch((error) => 
  {
    console.log(error.response.body)
  })
  res.status(200).json({ status : 'Ok' });
}
