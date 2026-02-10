import logo from '/logo.png';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="LeftHeader">
        <img
          id={styles.logoSistema}
          src={logo}
          alt="Logo do sistema de gestão"
        />
        {/* Criar funcionalidade do header icon account */}
      </div>
    </header>
  );
}
