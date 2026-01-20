import logo from '/logo.png';
import styles from './Sidebar.module.css';
//import Botao from './Botao.jsx';
import styles from './Botao.module.css'
export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoArea}>
        <img
          //id={styles.logoSistema}
          src={logo}
          alt="Logo do sistema de gestão"
          className={styles.logo}
        />
      </div>
      <nav aria-label="links_uteis">
        <ul className={styles.list}>
          <Botao idBotao={'botao1'} nome={'Dashboard'} />
          <Botao idBotao={'botao2'} nome={'Estoque'} />
          <Botao ></Botao>
        </ul>
      </nav>
    </aside>
  );
      {/*<Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
      </Drawer> */}
}
