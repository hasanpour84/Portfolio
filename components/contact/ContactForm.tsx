"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [message, setMessage] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { setMessage("Please complete each field with a valid email address."); return; }
    setMessage("Thank you—your inquiry is ready to send. Connect this form to your preferred form service before launch.");
    form.reset();
  }
  return <form className={styles.form} onSubmit={submit} noValidate><label>Name<input name="name" required autoComplete="name" /></label><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>What can I help with?<textarea name="message" required /></label><button className={styles.submit} type="submit">Send inquiry ↗</button><p className={styles.formMessage} aria-live="polite">{message}</p></form>;
}
