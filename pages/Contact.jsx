import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_ucmygaf";
    const templateID = "template_z8q5rp9";

    emailjs.send(serviceID, templateID, form, "lWDqvGY4Fj9noKYtz")
      .then(() => {
        alert("Correo enviado con éxito");
        setForm({ email: "", subject: "", message: "" });
      })
      .catch((err) => alert("Error: " + JSON.stringify(err)));
  };

  return (
    <div className="form-container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="text" name="subject" placeholder="Asunto" value={form.subject} onChange={handleChange} required />
        <textarea name="message" placeholder="Mensaje" value={form.message} onChange={handleChange} required />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
