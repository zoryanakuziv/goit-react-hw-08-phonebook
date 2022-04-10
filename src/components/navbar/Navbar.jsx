import AppBar from '@mui/material/AppBar';
import { Outlet, useNavigate } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Filter from 'components/filter';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AppButton from 'components/buttons/AppButton';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import CssBaseline from '@mui/material/CssBaseline';

export default function Navbar() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let authSelector = useSelector(state => state.auth.isLoaded);
  let userName = useSelector(state => state.auth.user.name);
  return (
    <>
      <CssBaseline>
        <AppBar
          style={{
            height: '100px',
            color: '#2B65EC',
            backgroundColor: '#87CEEB',
          }}
        >
          <Toolbar variant="string">
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              onClick={() => navigate('/')}
            >
              YourPHONEBOOK
            </Typography>

            {authSelector && (
              <Typography
                variant="h7"
                component="div"
                align="right"
                sx={{ flexGrow: 1 }}
                onClick={() => navigate('/')}
              >
                Add contact
              </Typography>
            )}
            {authSelector && (
              <AppButton onClick={() => navigate('add')}>
                <AddIcon />
              </AppButton>
            )}
            {authSelector && <Filter />}
            {!authSelector && (
              <AppButton onClick={() => navigate('login')}>
                <LoginIcon />
              </AppButton>
            )}
            {authSelector && (
              <>
                <AppButton onClick={() => dispatch(logout())}>
                  <LogoutIcon />
                </AppButton>
                <p>
                  Hello,
                  <br />
                  {userName} !
                </p>
              </>
            )}
            {!authSelector && (
              <AppButton onClick={() => navigate('register')}>
                <PersonAddAltIcon />
              </AppButton>
            )}
          </Toolbar>
        </AppBar>
      </CssBaseline>
      <Outlet />
    </>
  );
}
