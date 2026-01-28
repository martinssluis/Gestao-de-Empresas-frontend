import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.estiloLogin}>
      <section>
        <main className={styles.loginContainer}>
          <h1>Login</h1>
          <form>
            <input
              className={styles.inputs}
              type="text"
              placeholder="Usuário"
            />
            <input
              className={styles.inputs}
              type="password"
              placeholder="Senha"
            />
            <button
              className={styles.buttons}
              type="button"
              onClick={() => navigate('/app/dashboard')}
            >
              Entrar
            </button>
          </form>
        </main>
      </section>
    </div>
  );
}
