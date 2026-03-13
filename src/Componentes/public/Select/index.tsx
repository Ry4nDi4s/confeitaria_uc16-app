"use client";
import styles from "./styles.module.css"

type Props = {
  label?: string;
};

export default function Select({ label}: Props) {
  return (
    <span className={styles.root}>
      {label}
      <label>
        <select>
          <option value="bolo">Bolo Simples</option>
          <option value="docinho">Docinhos</option>
        </select>
      </label>
    </span>
  );
}