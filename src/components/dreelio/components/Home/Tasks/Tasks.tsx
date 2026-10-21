import styles from './Tasks.module.css';

export interface TasksProps {
  /** Inline SVG markup */
  icon: string;
  /** Text */
  tasks: string;
  /** Text */
  tasks2: string;
  /** Inline SVG markup */
  icon2: string;
}

export function Tasks(props: TasksProps) {
  return (
    <div className={styles.tasks2}>
      <div className={styles.tasks3}>
        <div className={styles.default_7} data-border={'true'}>
          <span
            className={styles.icon22}
            data-framecoded-svg="true"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: props.icon }}
          />
          <div className={styles.tasks}>
            <p className={styles.tasks4}>{props.tasks}</p>
          </div>
          <p className={styles.tasks5}>{props.tasks2}</p>
        </div>
        <span
          className={styles.icon3}
          data-framecoded-svg="true"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: props.icon2 }}
        />
      </div>
    </div>
  );
}
