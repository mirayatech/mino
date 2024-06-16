import styles from "./how-it-works.module.css";
import {
  Smartphone,
  Building,
  ArrowRightLeft,
  WalletMinimal,
} from "lucide-react";

export function HowItWorks() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>How it Works</div>
        <h3>Using our budgeting app is simple and easy</h3>
        <p>
          Access your budget and financial information on-the-go with our mobile
          apps, available for both iOS and Android.
        </p>
      </div>

      <div className={styles.steps}>
        <div className={styles.step}>
          <div className={styles["step-icon"]}>
            <Smartphone color="white" />
          </div>
          <div className={styles["step-number"]}>01</div>
          <p>Download it from the App Store.</p>
        </div>
        <div className={styles.step}>
          <div className={styles["step-icon"]}>
            <Building color="white" />
          </div>
          <div className={styles["step-number"]}>02</div>
          <p>Connect your bank accounts.</p>
        </div>
        <div className={styles.step}>
          <div className={styles["step-icon"]}>
            <ArrowRightLeft color="white" />
          </div>
          <div className={styles["step-number"]}>03</div>
          <p>Start tracking your income and expenses.</p>
        </div>
        <div className={styles.step}>
          <div className={styles["step-icon"]}>
            <WalletMinimal color="white" />
          </div>
          <div className={styles["step-number"]}>04</div>
          <p>Set your budget and financial goals.</p>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.textContent}>
          <h3>Create a realistic budget and reach financial freedom</h3>
          <p>
            Our app is designed to help you make smarter financial decisions by
            providing the tools and insights you need to manage your money
            effectively.
          </p>
          <ul className={styles.featuresList}>
            <li>Sync with your bank accounts and credit cards</li>
            <li>Receive alerts and reminders for upcoming bills</li>
            <li>Generate reports and visualizations of your financial data</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img src="/img/5.webp" alt="" className={styles.mainImage} />
          <div className={styles.smallImages}>
            <img src="/img/6.webp" alt="" />
            <img src="/img/8.webp" alt="" />
            <img src="/img/7.webp" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.textContent}>
          <h3>Take control of your finances with our budgeting tools</h3>
          <p>
            Set Budgets and Financial Goals: Set budgets and financial goals to
            achieve your desired financial status.
          </p>
          <ul className={styles.featuresList}>
            <li>Set achievable financial goals and track your progress</li>
            <li>Never miss a bill payment again</li>
            <li>Gain insights into your spending habits</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img src="/img/10.webp" alt="" />
          <img src="/img/11.webp" alt="" />
        </div>
      </div>
    </div>
  );
}
