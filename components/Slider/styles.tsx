import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  wrapper: {
    marginTop: 40,
    paddingBottom: 100,
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    '@media (max-width: 1100px)': {
      marginTop: 37,
      paddingBottom: 80,
    },
  },
  title: {
    marginBottom: 60,
    fontFamily: 'Cera Pro',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    color: '#fff',
    '@media (max-width: 1100px)': {
      fontSize: 14,
    },
  },
  sliderContMY: {
    paddingLeft: 30,
    paddingRight: 30,
    '@media (max-width: 1100px)': {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  sliderItem: {
    width: 370,
    height: 370,
    background: '#fff',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 1100px)': {
      width: 280,
      height: 280,
    },
  },
  image: {
    width: 260,
    height: 260,
    background: '#C4C4C4',
    borderRadius: '50%',
    '@media (max-width: 1100px)': {
      width: 200,
      height: 200,
    },
  },
  imageTitle: {
    marginTop: 30,
    fontFamily: 'Cera Pro',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: ' 0.1em',
    textTransform: 'uppercase',
    color: '#010111',
  },
  pagination: {
    marginTop: -10,
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    '@media (max-width: 1100px)': {
      marginTop: 40,
    },
  },
  paginationItem: {
    width: '20px',
    height: '6px',
    borderRadius: '3px',
    opacity: '20%',
    background: '#FFFFFF',
    transition: '0.2s',
  },
  paginationItemActive: {
    width: '30px',
    height: '6px',
    borderRadius: '3px',
    background: '#fa1e53',
    transition: '0.2s',
  },
  onSlider: {
    transition: 'all 0.2s ease-out',
  },
}));
