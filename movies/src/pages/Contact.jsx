import { Form } from "react-router-dom";

function Contact(){

  return(
    <div>
      
      <Form method="POST" action="/contact" className="contact-grid" >
        <h1>Contact Us</h1>

        <div className="contact-field">
          <label htmlFor="name">Name</label>
          <input 
            className="contact-input"
            name="name"
            type="text" 
            id="name"
            placeholder="Enter your name"
            />
        </div>

        <div className="contact-field">
          <label htmlFor="email">E-mail</label>
          <input 
            className="contact-input"
            name="email"
            type="email" 
            id="email"
            placeholder="Enter your e-mail"
            />
        </div>

        <div className="contact-field">
          <label htmlFor="message">Message</label>
          <textarea 
            className="contact-input"
            name="message" 
            id="message"
            placeholder="Enter your message"
            >

          </textarea>
        </div>

        <button className="btn ">Send</button>
      </Form>
    </div>
  );
}

export default Contact;


export const contactFormData = async ({request})=>{
    try{
      const res = await request.formData()
      console.log(res)
      const data = Object.fromEntries(res);
      console.log(data)
      return null;
    }

    catch(error){
      console.log(error)
    }
  }