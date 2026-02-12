import styles from './Financial.module.css';
import { useI18n } from '../../i18n/useI18n';

export default function Financial() {
  const { t } = useI18n();
  
  return (
    <>
      <div className={styles.containerFinancial}>
        <h1>{t('pages.financial.title')}</h1>
      </div>
    </>
  );
}
