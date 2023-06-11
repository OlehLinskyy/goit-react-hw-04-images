import css from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ clickPages }) {
  return (
    <div className={css.load_more}>
      <button className={css.Button} onClick={clickPages} type="button">
        Load more
      </button>
    </div>
  );
}
export default Button;

Button.propTypes = {
  clickPages: PropTypes.func.isRequired,
};
