import { TextField } from '@mui/material';
import propTypes from 'prop-types';

export default function PhoneLabel({ value, onchange }) {
  return (
    <TextField
      id="phone"
      label="Phone"
      value={value}
      variant="standard"
      onChange={onchange}
      title="+380000000000"
      type="tel"
      autoComplete="off"
      size="small"
      margin="normal"
      placeholder="+380000000000"
      inputProps={{
        pattern: '^\\+[\\(\\-]?(\\d[\\(\\)\\-]?){11}\\d$',
      }}
      required
    />
  );
}

PhoneLabel.prototype = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func,
};
