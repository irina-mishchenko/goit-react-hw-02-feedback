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
  good: propTypes.string.isRequired,
  neutral: propTypes.string.isRequired,
  bad: propTypes.string.isRequired,
  total: propTypes.string.isRequired,
  positivePercentage: propTypes.string.isRequired,
};

export default Statictics;
