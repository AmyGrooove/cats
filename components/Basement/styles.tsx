import { makeStyles } from '@material-ui/core/styles';
import { BAS_CAT } from '../../constants';

export default makeStyles((theme) => ({
  info: {
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'left',
    paddingTop: 80,
    paddingBottom: 120,
    lineHeight: 2,
    '@media (max-width: 1100px)': {
      fontSize: 16,
      textAlign: 'center',
      paddingBottom: 80,
    },
  },
  paddingCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  basCat: {
    width: 116,
  },
  followBlock: {
    borderRadius: 20,
    width: 830,
    height: 262,
    backgroundColor: 'rgb(14,14,34,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${BAS_CAT})`,
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 1100px)': {
      width: '100%',
      height: 135,
      backgroundImage: 'none',
    },
  },
  void: {
    '@media (max-width: 1100px)': {
      height: 23,
      width: '100%',
      backgroundColor: 'rgb(14,14,34,0.6)',
    },
  },
  basCatMobile: {
    position: 'absolute',
    left: 0,
  },
  label: {
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontSize: 46,
    textAlign: 'center',
    fontWidth: 'bold',
    color: '#FFFFFF',
    '@media (max-width: 1100px)': {
      fontSize: 24,
    },
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: 30,
    '@media (max-width: 1100px)': {
      gap: 20,
      paddingTop: 12,
    },
  },
  linksSize: {
    height: 50,
    transition: 'all 0.1s ease-out',
    position: 'relative',
    '&:hover': {
      transform: 'translate(0,-4px)',
    },
    '@media (max-width: 1100px)': {
      height: 34,
      width: 34,
    },
  },
  paddingLeft: {
    '@media (max-width: 1100px)': {
      position: 'relative',
      top: -8,
      left: 15,
    },
  },
  navigationMenu: {
    fontFamily: 'Cera Pro',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontSize: 20,
    opacity: 0.55,
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: 45,
    paddingLeft: 350,
    paddingRight: 350,
  },
  navigationItem: {
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.1s ease-out',
    '&:hover': {
      transform: 'translate(0,-4px)',
    },
  },
}));
