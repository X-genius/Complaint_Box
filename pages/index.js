import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {

  /**
   * This function help to handle email.
   */
  const handleOnSubmit = async (event) =>
  {
     event.preventDefault();
     const formData = {};
     Array.from(event.currentTarget.elements).forEach(field => {
       if(!field.name)
       {
         return;
       }

       formData[field.name] = field.value;
     });
     
     fetch('/api/mail' , {
       method : 'post',
       body : JSON.stringify(formData)
     })

     location.reload();
  }

  /**
   * This function helps to upload image.
   * @param {*} event 
   */
  const loadFile = (event) =>
  {
    const output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = () =>
    {
      URL.revokeObjectURL(output.src)
      output.width = "100";
      output.height = "100";
    }
  };

  return (
        <>
        <Head>
          <title>Complaint Box | Home</title>
          <meta name = "keywords" content = "Complaints"/>
        </Head>
        <div className = {styles.complaintContainer}>
        <div className = {styles.complaintContainerImage}>
          <h1 className = {styles.firstQuestion}><i>Do you have complaint?</i></h1>
          <p className = {styles.helpMessage}><i>We will help you to raise your voice!</i></p>
          <Image src = "/complaint-box-main-image.svg" width = {520} height = {500} className = "complaint-box-image"/>
        </div>

        <div className = {styles.complaintContainerForm}>
          <form className = {styles.complaintContainerFormField} onSubmit = {handleOnSubmit}>
                <input type = "text" name = "fullName" className = {styles.fullName} placeholder = "Enter your name"/>
                <input type = "tel" name = "phoneNumber" className = {styles.phoneNumber} placeholder = "Enter your mobile number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title = "Phone number enter XXX-XXX-XXXX"/>
                <input type= "email" name = "userEmail" className = {styles.userEmail} placeholder = "Enter your email ID" multiple/>
                <input type = "text" name = "officeLocation" className = {styles.officeLocation} placeholder = "Enter location of office"/>
                <input type = "text" name = "designation" className = {styles.officerDesignation} placeholder = "Enter the designation of officer"/>
                <textarea className = {styles.message} name = "message" placeholder = "Enter message"/>
                <input type = "file" className = {styles.imageUpload} id = "image-upload" accept="image/png, image/jpeg , image/jpg" onChange = {loadFile} name = "imageUpload" multiple/>
                <label htmlFor="image-upload" className = {styles.chooseImage}>Choose the image</label>
                <img className = {styles.outputImage} id = "output"/>
                <input type = "submit" value = "Send Complaint" className = {styles.sendComplaintBtn}/>
          </form>
        </div>
        </div>
        </>
  )
}
