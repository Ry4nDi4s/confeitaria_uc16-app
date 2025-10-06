import React from 'react';
import styles from './styles.module.css';
 
export default function Loading() {
  return (
    <div className={styles.container}>
      <p className={styles.loadingText}>Carregando...</p>
    </div>
  );
};
 