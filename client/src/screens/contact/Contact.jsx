import "./Contact.css";
import axios from "axios";
import { useState } from "react";

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formData;

  const contactPost = async (formData) => {
    const resp = await axios.post("https://getform.io/f/c5ec1c9a-e2a6-4ea7-8c66-3aab35425b0d", formData);
    return resp.data;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePost = (formData) => {
    contactPost(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="form-container">
      <div className='form-message'>Get in Touch with Me!</div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePost(formData);
      }}
      className="form"
    >
      <input
        required
        onChange={handleChange}
        name="name"
        placeholder="Name"
        type="text"
        value={name}
      />
      <input
        required
        onChange={handleChange}
        name="email"
        placeholder="Email"
        type="text"
        value={email}
      />
      <textarea
        required
        onChange={handleChange}
        name="message"
        placeholder="message"
        type="text"
        value={message}
      ></textarea>
        <button type="submit" className="form-button">Send</button>
      </form>
      </div>
  );
};

export default Contact;
