import nomeSistema from "/nomeSistema.png";
import styles from "./HeaderLogin.module.css";

export default function HeaderLogin() {
  return (
    <>
      <header className={styles.headerLogin}>
        <div>
          <img className={styles.nomeSistemaImg} src={nomeSistema} alt="" />
        </div>
        <nav className={styles.navBar}>
          <ul>
            <li>Ajuda</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
