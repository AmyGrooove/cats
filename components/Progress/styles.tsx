import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    paddingLeft: 120,
    paddingRight: 120,
    paddingTop: 30,
    paddingBottom: 100,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'hidden',
    '@media (max-width: 500px)': {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 50,
      justifyContent: 'center',
      position: 'relative',
      top: -40,
    },
  },
  fishSize: {
    width: 90,
  },
  fishPadding: {
    marginLeft: -60,
    marginRight: -60,
  },
  fish1: {
    position: 'absolute',
    left: 0,
  },
  fish2: {
    position: 'absolute',
    right: 0,
  },
  label: {
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 22,
    lineHeight: '28px',
    textAlign: 'center',
    letterSpacing: '10%',
    color: '#FFFFFF',
    fontWidth: 'bold',
  },
  paddingCat: {
    width: 114,
    height: 1,
  },
  mobileCat: {
    width: 125,
  },
}));
