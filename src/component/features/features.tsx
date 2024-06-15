import styles from "./features.module.css";

export function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.header}>
          <h3>Track your income and expenses</h3>
          <p>Effortlessly Manage Your Finances with Our Budgeting App.</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/img/2.webp" alt="Personalized financial advice" />
          <img src="/img/1.webp" alt="Track income and expenses" />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.header}>
          <h3>Get personalized financial advice</h3>
          <p>
            Understand where your money goes and make informed financial
            decisions.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/img/3.webp" alt="Personalized financial advice" />
          <img src="/img/4.webp" alt="Financial summary" />
        </div>
      </div>
    </div>
  );
}
