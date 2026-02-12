import nomeSistema from "/nomeSistema.png";
import styles from "./Header.module.css";
import { useI18n } from "../../i18n/useI18n";

export default function Header() {
  const { t } = useI18n();

  return (
    <header className={styles.header}>
      <div className="LeftHeader">
        <img
          id={styles.logoSistema}
          src={nomeSistema}
          alt={t("header.logoAlt")}
        />
        {/* Criar funcionalidade do header icon account */}
      </div>
    </header>
  );
}
