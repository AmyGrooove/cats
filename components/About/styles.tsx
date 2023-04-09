import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  labelMain: {
    paddingTop: 70,
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 44,
    textAlign: 'center',
    color: '#FFFFFF',
    '@media (max-width: 1100px)': {
      paddingTop: 40,
    },
  },
  labelMini: {
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontSize: 20,
    color: '#FFFFFF',
    lineHeight: 2,
    '@media (max-width: 1100px)': {
      fontSize: 16,
      textAlign: 'center',
    },
  },
  info: {
    paddingTop: 70,
    '@media (max-width: 1100px)': {
      paddingTop: 30,
    },
  },
  buttonPadding: {
    paddingTop: 32,
    '@media (max-width: 1100px)': {
      paddingTop: 40,
      display: 'flex',
      justifyContent: 'center',
    },
  },
  buttonLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 14,
    height: 68,
    width: 216,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    cursor: 'pointer',
    border: 'none',
    '@media (max-width: 1100px)': {
      paddingLeft: 11,
      height: 50,
      width: 160,
    },
  },
  buttonLabel: {
    paddingLeft: 20,
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#010111',
    '@media (max-width: 1100px)': {
      paddingLeft: 11,
      fontSize: 16,
    },
  },
  imgLink: {
    width: 30,
  },
  cardContMain: {
    paddingTop: 70,
    display: 'flex',
    paddingLeft: 70,
    '@media (max-width: 1100px)': {
      justifyContent: 'center',
      paddingTop: 40,
      paddingLeft: 0,
    },
  },
  cardContRow1: {
    paddingRight: 40,
    '@media (max-width: 1100px)': {
      paddingRight: 20,
    },
  },
  cardContRow2: {
    paddingBottom: 40,
    '@media (max-width: 1100px)': {
      paddingBottom: 20,
    },
  },
  card: {
    height: 230,
    width: 230,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    '@media (max-width: 1100px)': {
      height: 180,
      width: 140,
    },
  },
  aboutCont: {
    paddingRight: 30,
    paddingLeft: 30,
    display: 'flex',
    '@media (max-width: 1100px)': {
      paddingRight: 4,
      paddingLeft: 4,
      display: 'block',
    },
  },
  cardContent: {
    display: 'flex',
    height: 180,
    borderRadius: '20px 20px 0 0',
    width: '100%',
    objectFit: 'cover',
    '@media (max-width: 1100px)': {
      height: 150,
      fontSize: 14,
    },
  },
  cardLabel: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 10,
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#010111',
    opacity: '0.3',
    '@media (max-width: 1100px)': {
      paddingTop: 5,
      fontSize: 14,
    },
  },
}));
