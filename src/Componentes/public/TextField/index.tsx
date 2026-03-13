"use client";

import styles from "./styles.module.css";

type Props = {
  label?: string;
  type:
    | "text"
    | "email"
    | "password"
    | "name"
    | "phone"
    | "CPF"
    | "datetime-local"
    | "checkbox"
    | "file"
    | "number";
  text: string;
  value?: string | number;
  required?: boolean;
  autoComplete?: string;
  multiline?: boolean;
  moeda?: boolean;
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
  moeda,
}: Props) {


  const maskMoeda = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (!numbers) return "";
    
    const numericValue = (parseInt(numbers, 10) / 100).toFixed(2);
    return "R$ " + numericValue
      .replace(".", ",")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    let val = e.target.value;
    
    if (moeda) {
      val = maskMoeda(val);
    }
    
    onChange(val); 
  }

  return (
    <span className={styles.root}>
      {label}
      <label>
        {multiline ? (
          <textarea 
            value={text} 
            onChange={handleChange} 
            required={required} 
          />
        ) : (
          <input
            type={moeda ? "text" : type} 
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

