import styles from "./Login.module.css";
import HeaderLogin from "./HeaderLogin";
import { useNavigate } from "react-router-dom";
import nomeSistema from "/nomeSistema.png";
import imgLogin from "/imgLogin.png";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <HeaderLogin />
      <section className={styles.loginPage}>
        <div className={styles.divImagem}>
          <img src={imgLogin} />
        </div>
        <div className={styles.estiloLogin}>
          <section>
            <main className={styles.loginContainer}>
              <img className={styles.imgNomeSG} src={nomeSistema} />
              <h2>Entre no SG</h2>
              <p>usando seu usuário e senha</p>
              <form className={styles.form}>
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
                  onClick={() => navigate("/app/dashboard")}
                >
                  Entrar
                </button>
              </form>
            </main>
          </section>
        </div>
      </section>
    </>
  );
}
