import { makeStyles } from '@material-ui/core/';

export default makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.only('md')]: {
      gap: '10px',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '15px',
      gap: '10px',
    },
    '@media (max-width: 1100px)': {
      marginLeft: 4,
      marginTop: 0,
    },
  },
  socialIcon: {
    transition: 'all 0.1s ease-out',
    '&:hover': {
      transform: 'translate(0,-5px)',
    },
    '@media (max-width: 1100px)': {
      height: 34,
    },
  },
  navigationMenu: {
    display: 'flex',
    gap: '30px',
    float: 'left',
  },
  navigationItem: {
    fontFamily: 'Cera Pro',
    fontSize: 20,
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.1s ease-out',
    '&:hover': {
      transform: 'translate(0,-4px)',
    },
    '@media (max-width: 1100px)': {
      fontSize: 22,
      lineHeight: '50px',
      textAlign: 'center',
      cursor: 'pointer',
    },
  },
  line1: {
    height: 3,
    background: '#4F5355',
    borderRadius: '20%',
  },
  lineCont: {
    width: 15,
    position: 'relative',
    left: 4,
  },
  line2: {
    height: 3,
    background: '#4F5355',
    borderRadius: '20%',
    marginTop: 5,
  },
  mobileBurger: {
    position: 'absolute',
    right: 20,
    top: 20,
    height: 34,
    width: 34,
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#FFFFFF',
  },
  burgerMenu: {
    zIndex: 2,
    position: 'absolute',
    height: '100%',
    top: '-100%',
    right: 0,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#010111',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s ease-out',
  },
  burgerMenuActive: {
    zIndex: 1000,
    position: 'fixed',
    height: '100%',
    top: 0,
    right: 0,
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#010111',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.25s ease-out',
    '&:hover': {
      transform: 'translate(0,-4px)',
    },
  },
  burgerCont: {
    display: 'block',
  },
}));
