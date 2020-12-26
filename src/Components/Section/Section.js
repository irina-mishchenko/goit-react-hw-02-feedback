import propTypes from 'prop-types';

import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.container}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;
