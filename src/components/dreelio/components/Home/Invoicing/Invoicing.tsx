import styles from './Invoicing.module.css';

export interface InvoicingProps {
  /** Inline SVG markup */
  icon: string;
  /** Text */
  invoicing: string;
  /** Text */
  invoicing2: string;
  /** Inline SVG markup */
  icon2: string;
}

export function Invoicing(props: InvoicingProps) {
  return (
    <div className={styles.invoicing}>
      <div className={styles.invoicing2}>
        <div className={styles.default_11} data-border={'true'}>
          <span
            className={styles.icon62}
            data-framecoded-svg="true"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: props.icon }}
          />
          <div className={styles.tasks52}>
            <p className={styles.invoicing3}>{props.invoicing}</p>
          </div>
          <p className={styles.invoicing4}>{props.invoicing2}</p>
        </div>
        <span
          className={styles.icon7}
          data-framecoded-svg="true"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: props.icon2 }}
        />
      </div>
    </div>
  );
}
