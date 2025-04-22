import s from './ClickCounter.module.css';

const ClickCounter = ({ value, onUpdate }) => {
  return (
    <button className={s.buttonClick} onClick={onUpdate}>
      {value}
    </button>
  );
};
export default ClickCounter;
