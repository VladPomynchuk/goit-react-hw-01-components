import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children }) => {
  return <section className={s.section}>{children} </section>;
};

Section.propTypes = {
  children: PropTypes.node,
  bgc: PropTypes.string,
};

export default Section;
