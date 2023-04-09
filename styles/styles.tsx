import { makeStyles } from '@material-ui/core/styles';
import { MAIN_BLOCK_BG, MAIN_BLOCK_BG2, MAIN_BLOCK_BG_MOBILE } from '../constants';

export default makeStyles((theme) => ({
  mainSection: {
    paddingTop: 40,
    background: '#00000b',
    backgroundImage: `url(${MAIN_BLOCK_BG})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    "@media (max-width: 1000px)": {
      backgroundImage: `url(${MAIN_BLOCK_BG_MOBILE})`,
      paddingTop: 20,
    },
  },
  mainImage: {
    marginTop: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    "@media (max-width: 1000px)": {
      width: 270,
    },
  },
  mainSection2: {
    paddingTop: 40,
    background: '#010111',
    backgroundImage: `url(${MAIN_BLOCK_BG2})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
  },
}));
