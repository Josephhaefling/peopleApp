import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    borderRadius: '10px',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '40px',
  },
  submit: {
  },
  googleButton: {
  },
  userInfo: {
  }
}));