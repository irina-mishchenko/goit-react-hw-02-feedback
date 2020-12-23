import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        className={s.button}
        type="button"
        data-name="good"
        onClick={onLeaveFeedback}
      >
        Good
      </button>
      <button
        className={s.button}
        type="button"
        data-name="neutral"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        data-name="bad"
        onClick={onLeaveFeedback}
      >
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
