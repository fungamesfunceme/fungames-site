"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xaewpanw", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Não foi possível enviar a mensagem.");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-heading">
        <p>Envie uma mensagem</p>
        <span>Responderemos pelo e-mail informado.</span>
      </div>

      <label>
        Nome
        <input type="text" name="name" autoComplete="name" required />
      </label>

      <label>
        E-mail
        <input type="email" name="email" autoComplete="email" required />
      </label>

      <label>
        Assunto
        <input type="text" name="subject" required />
      </label>

      <label>
        Mensagem
        <textarea name="message" rows={5} required />
      </label>

      <input className="contact-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <button className="button button-white" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </button>

      <div className="contact-feedback" aria-live="polite">
        {status === "success" && <p className="contact-success">Mensagem enviada com sucesso.</p>}
        {status === "error" && <p className="contact-error">Não foi possível enviar. Tente novamente ou escreva para fungamesfunceme@gmail.com.</p>}
      </div>
    </form>
  );
}
