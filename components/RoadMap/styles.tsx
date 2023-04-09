import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainLabel: {
    paddingTop: 120,
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 44,
    textAlign: 'center',
    color: '#FFFFFF',
    '@media (max-width: 1100px)': {
      paddingTop: 80,
      paddingBottom: 40,
    },
  },
  mapBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 1100px)': {
      paddingBottom: 40,
    },
  },
  textBorder: {
    width: 200,
    paddingLeft: 43,
  },
  blockMainLabel: {
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 22,
    color: '#FFFFFF',
    textAlign: 'left',
    '@media (max-width: 1100px)': {
      fontSize: 18,
    },
  },
  catsBox: {
    width: 110,
    display: 'flex',
    justifyContent: 'center',
  },
  blockMiniLabel: {
    fontFamily: 'Cera Pro',
    fontStyle: 'normal',
    fontSize: 14,
    color: '#FFFFFF',
    opacity: '0.6',
    textAlign: 'left',
    lineHeight: 1.6,
    '@media (max-width: 500px)': {
      fontSize: 12,
    },
  },
  blockMainText: {
    display: 'flex',
    paddingBottom: 10,
  },
  catsSred: {
  },
  OnOFF: {
    paddingLeft: 13,
  },
  string1: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: 20,
  },
  string1Padd: {
    paddingTop: 135,
  },
  string2: {
    marginLeft: 100,
    marginRight: 100,
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop: 60,
  },
  string3Padd: {
    paddingBottom: 135,
  },
  nothing: {
  },
  imgCat2: {
    width: 110,
  },
  imgCat1: {
    width: 56,
  },
}));
