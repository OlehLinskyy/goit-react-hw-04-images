import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#FF3975"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
      />
    </div>
  );
}
export default Loader;
