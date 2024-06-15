import styles from "./hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero}>
      <h1>Get Your Finances Under Control with Our Budgeting App</h1>
      <h2>
        Effortlessly Manage Your Finances with Our Budgeting App. Start Saving
        Money Today!
      </h2>
      <div className={styles.buttons}>
        <button>
          <img src="/google.webp" alt="" />
        </button>
        <button>
          <img src="/apple.webp" alt="" />
        </button>
      </div>
      <div className={styles.images}>
        <img src="/img/left-phone.webp" alt="" />
        <img src="/img/right-phone.webp" alt="" />
      </div>
    </div>
  );
}
