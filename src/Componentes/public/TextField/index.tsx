"use client";

import { ChangeEvent } from "react";
import styles from "./styles.module.css";

type Props = {
  label?: string;
  type: "text" | "email" | "password" | "name" | "phone" | "CPF";
  text: string;
  required?: boolean;
  autoComplete?: string;
  multiline?: boolean;
  onChange(texto: string): void;
};

export default function TextField({
  label,
  type,
  text,
  required,
  autoComplete,
  multiline,
  onChange,
}: Props) {
  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    onChange(e.target.value);
  }

  return (
    <span className={styles.root}>
      <label>
        <span className={styles.label}>{label}:</span>
        {multiline ? (
          <textarea
            placeholder={label}
            value={text}
            onChange={handleChange}
            required={required}
          />
        ) : (
          <input
            type={type}
            placeholder={label}
            value={text}
            onChange={handleChange}
            required={required}
            autoComplete={autoComplete}
          />
        )}
      </label>
    </span>
  );
}
