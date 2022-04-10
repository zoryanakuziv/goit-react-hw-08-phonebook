import Button from '@mui/material/Button';
import propTypes from 'prop-types';

export default function ContainedButton({ children, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{ mr: 1, ml: 1, mt: 1 }}
      type="submit"
    >
      {children}
    </Button>
  );
}
ContainedButton.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
};
