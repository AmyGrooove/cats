import { makeStyles } from '@material-ui/core/styles';
import { CAT_PUZZLE } from '../../constants';

export default makeStyles((theme) => ({
  back: {
    backgroundColor: '#0C1225',
    width: '100%',
    height: 700,
    backgroundImage: `url(${CAT_PUZZLE})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    '@media (max-width: 1000px)': {
      height: 300,
      backgroundImage: 'none',
    },
  },
  backCat: {
    '@media (max-width: 1000px)': {
      width: 240,
      position: 'absolute',
      paddingTop: 145,
    },
  },
  flexCont: {
    display: 'flex',
    justifyContent: 'center',
  },
  buttonsCont: {
    paddingTop: 50,
    paddingLeft: 50,
    display: 'flex',
    gap: 20,
    '@media (max-width: 1000px)': {
      paddingTop: 20,
      paddingLeft: 0,
      justifyContent: 'center',
    },
  },
  puzzleButtons: {
    height: 40,
    width: 40,
    backgroundColor: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    opacity: '50%',
    transition: 'all 0.1s ease-out',
    zIndex: 10,
    '&:hover': {
      opacity: '100%',
    },
    '@media (max-width: 1000px)': {
      height: 30,
      width: 30,
    },
  },
  buttonImg: {
    width: 16,
  },
  puzzleImageHolder: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    top: -90,
    width: '100%',
    height: 700,
    paddingTop: 0,
    paddingLeft: 0,
    zIndex: 0,
    '@media (max-width: 1000px)': {
      top: -50,
      height: 300,
    },
  },
  puzzleImage: {
    width: '100%',
    height: 700,
    zIndex: 0,

    '@media (max-width: 1000px)': {
      height: 300,
    },
  },
}));
