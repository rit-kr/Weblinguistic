import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";
import emailjs from '@emailjs/browser';

// import { Button, Form, Input } from 'antd';
import { useRef } from "react";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rit', 'template_rit', form.current, 'X471RlOMMI_kzQOPW')
      .then((result) => {
          console.log(result.text);
          window.location.reload(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="max-w-6xl my-0 mx-auto py-4">
        <div className="flex flex-col items-center">
          <h3 className=" text-5xl p1/y my-8">Reach out to me</h3>
          <p className="basis-2/5 text-lg my-8">Want to discuss a project/up for any work, or just want to say Hello?</p>
        </div>
        <div className="flex">
          <div className="flex flex-col basis-2/5">
            <h4 className="text-xl my-4 self-center">Contact Me</h4>
            <div className="">
              <form className="flex flex-col" ref={form} onSubmit={sendEmail}>
                <label className="text-base">Name</label>
                <input className="text-gray-800 p-2 rounded" type="text" name="from_name"  placeholder="Please enter your name"/>
                <label className="text-base">Email</label>
                <input className="text-gray-800 p-2 rounded" type="email" name="from_email" placeholder="Please enter your email"/>
                <label className="text-base">Message</label>
                <textarea  className=" text-gray-800 text-blue-600/70 p-2 rounded"name="message"rows={4} placeholder="Please enter your message" />
                <button className="text-blue-600/70 my-1" htmlType="submit" value="Send">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};