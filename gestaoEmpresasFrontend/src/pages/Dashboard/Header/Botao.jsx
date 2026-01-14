import styles from './Header.module.css';

export default function Botao({ nome, idBotao }) {
  return (
    <>
      <li className={styles.listItem}>
        <button className={styles.headerButton} id={idBotao}>
          {' '}
          {nome}
        </button>
      </li>
    </>
  );
}
