import { useState } from 'react';
import styles from './Stock.module.css';

export default function Stock() {
  const [dataResume, setDataResume] = useState({
    stockName: '',
    stockDescription: '',
    stockPrice: '',
    stockCategory: '',
  });

  function handleChangeStock(event){
    // extrai o name e o value do input
    const { name,value } = event.target;

    // atualiza o estado do formulário com base no estado anterior
    setDataResume((prev)=>({
      // mantém estado anterior
      ...prev,
      // atualiza dinamicamente o campo correspondente ao input
      [name]: value,
    }));
  }

  function handleSubmitStock(event){
    event.preventDefault(); // evita reload
    console.log('Dados do produto:', dataResume);
  }


  return (   
      <div className={styles.styleStock}>
        <section>
          <main className={styles.containerStock}>
            <h1 className={styles.h1}>Cadastro de produto no estoque</h1>

            <form className={styles.form} onSubmit={handleSubmitStock}>
              <input 
              className={styles.inputs}
              type="text"
              placeholder='Produto'
              value={dataResume.stockName}
              onChange={handleChangeStock}
              />

              <input
              className={styles.inputs}
              type='text'
              placeholder='Descrição'
              value={dataResume.stockDescription}
              onChange={handleChangeStock}
              />

              <input
              className={styles.inputs}
              type="text"
              placeholder='Preço'
              value={dataResume.stockPrice}
              />

              <input
              className={styles.inputs}
              type="text"
              placeholder='Categoria'
              value={dataResume.stockCategory}
              />
              <button className={styles.buttons} type='submit'>
                Cadastrar
              </button>

            </form>
          </main>
        </section>
      </div>
   );
}
