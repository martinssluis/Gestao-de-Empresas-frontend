import { useState } from 'react';
import styles from './Stock.module.css';
import { useI18n } from '../../i18n/useI18n';

export default function Stock() {
  const { t } = useI18n();
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
            <h1 className={styles.h1}>{t('pages.stock.title')}</h1>

            <form className={styles.form} onSubmit={handleSubmitStock}>
              <input 
              className={styles.inputs}
              type="text"
              placeholder={t('pages.stock.product')}
              name="stockName"
              value={dataResume.stockName}
              onChange={handleChangeStock}
              />

              <input
              className={styles.inputs}
              type='text'
              placeholder={t('pages.stock.description')}
              name="stockDescription"
              value={dataResume.stockDescription}
              onChange={handleChangeStock}
              />

              <input
              className={styles.inputs}
              type="text"
              placeholder={t('pages.stock.price')}
              name="stockPrice"
              value={dataResume.stockPrice}
              onChange={handleChangeStock}
              />

              <input
              className={styles.inputs}
              type="text"
              placeholder={t('pages.stock.category')}
              name="stockCategory"
              value={dataResume.stockCategory}
              onChange={handleChangeStock}
              />
              <button className={styles.buttons} type='submit'>
                {t('pages.stock.submit')}
              </button>

            </form>
          </main>
        </section>
      </div>
   );
}
