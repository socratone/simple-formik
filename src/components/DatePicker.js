import { useRef } from 'react';
import { DatePicker as AntdDatePicker } from 'antd';
import { ClickAwayListener } from '@material-ui/core';

const DatePicker = ({ value, name, onChange, onBlur }) => {
  const input = useRef(null);

  const handleChange = (moment) => {
    if (!input.current || moment === null) {
      input.current.setAttribute('value', '');
    } else {
      const value = moment.format();
      input.current.setAttribute('value', value);
    }
    input.current.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const fireBlur = () => {
    if (input.current) {
      input.current.focus();
      input.current.blur();
    }
  };

  return (
    <>
      <ClickAwayListener onClickAway={fireBlur}>
        <span style={{ display: 'inline-block' }}>
          <AntdDatePicker onChange={handleChange} />
        </span>
      </ClickAwayListener>
      <input
        style={{ width: 0, padding: 0, border: 0 }}
        ref={input}
        name={name}
        type="text"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </>
  );
};

export default DatePicker;
