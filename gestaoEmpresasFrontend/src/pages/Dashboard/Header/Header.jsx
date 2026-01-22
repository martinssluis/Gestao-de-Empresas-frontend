import logo from '/logo.png';
import styles from './Header.module.css';
import Botao from './Botao.jsx';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="LeftHeader">
        <img
          id={styles.logoSistema}
          src={logo}
          alt="Logo do sistema de gestão"
        />
      </div>

      {/*
      NAV RETIRADO PARA TESTE
      <nav aria-label="links_uteis">
        <ul className={styles.list}>
          <Botao idBotao={'botao1'} nome={'Dashboard'} />
          <Botao idBotao={'botao2'} nome={'Estoque'} />
        </ul>
      </nav>
      */}
    </header>
  );
}
