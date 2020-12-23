import propTypes from 'prop-types';

import s from './Statistics.module.css';

const Statictics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <section>
      <p className={s.statisticsItem}>Good: {good}</p>
      <p className={s.statisticsItem}>Neutral: {neutral}</p>
      <p className={s.statisticsItem}>Bad: {bad}</p>
      <p className={s.statisticsItem}>Total: {total}</p>
      <p className={s.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </p>
    </section>
  );
};

Statictics.propTypes = {
  good: propTypes.string,
  neutral: propTypes.string,
  bad: propTypes.string,
  total: propTypes.string,
  positivePercentage: propTypes.string,
};

export default Statictics;
