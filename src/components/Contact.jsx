import emailjs from '@emailjs/browser';
import React,{form} from 'react';

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rit', 'template_rit', form.current, 'X471RlOMMI_kzQOPW')
      .then((result) => {
          console.log(result.text);
          window.location.reload(true)
          alert("Thank you for connecting to us")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="max-w-4xl my-0 mx-auto py-4">
        <div className="flex flex-col items-center">
          <h3 className=" text-3xl p1/y my-8">Reach out to us</h3>
          <p className="basis-2/5 text-lg my-2">Want to discuss a project/up for any work, or just want to say Hello? We are just a click away</p>
        </div>
        <div className="">
          <div className="flex flex-col basis-2/5">
            <h4 className="text-xl my-4 self-center">Contact us</h4>
            <div className="">
              <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                <label className="text-base">Name</label>
                <input className="text-gray-800 p-2 outline rounded " type="text" name="from_name"  placeholder="Please enter your name"/>
                <label className="text-base">Email</label>
                <input className="text-gray-800 p-2  outline rounded" type="email" name="from_email" placeholder="Please enter your email"/>
                <label className="text-base">Message</label>
                <textarea  className=" text-gray-800 text-blue-600/70 p-2 outline rounded"name="message"rows={4} placeholder="Please enter your message" />
                <button className="text-blue-600/70 my-2 py-1 outline rounded" htmlType="submit" value="Send">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};