import React, { useContext, useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Divider, Typography } from '@material-ui/core';
import useStyles from './styles';
import {
  OFF_FISH, ON_FISH, CAT_LICKING,
} from '../../constants';
// import { catCount } from '../../constants/data';
import { fetchWrapper } from '../../utils/fetch.wrapper';
import { AppContext } from '../../services/app.context';

export default function Progress() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 1000px)');

  const context = useContext(AppContext);

  const [catCount, setCount] = useState(3334);

  // update cats count from backend
  useEffect(() => {
    fetchWrapper.get('/api/token/count').then((res : any) => {
      setCount(res.mint);
    });
  });

  const kryg = () => {
    let buf = catCount;
    buf /= 1000;
    buf = Math.trunc(buf);

    return (buf * 1000);
  };

  const arrayCat = [
    1000, 2000, 3000, 4000, 5000,
    6000, 7000, 8000, 9000, 10000,
  ];

  const CatArray = arrayCat.map((fish: number) => (
    <div>
      {catCount >= fish && catCount < fish + 1000 ? (<img src={CAT_LICKING} alt="" />)
        : (
          <div>
            <img src={catCount >= fish + 1000 ? OFF_FISH : ON_FISH} alt="" />
            <Typography className={classes.label}>{fish}</Typography>
          </div>
        )}
    </div>
  ));

  return (
    <div id="Progress">
      {mobile
        ? (
          <div className={classes.wrapper}>
            {kryg() - 1000 > 0 || kryg() === 1000
              ? (
                <div className={classes.fish1}>
                  <img src={catCount >= kryg() - 1000 ? OFF_FISH : ON_FISH} alt="" className={classes.fishSize} />
                  <Typography className={classes.label}>{kryg() === 1000 ? 1000 : kryg() - 1000}</Typography>
                </div>
              )
              : <div />}
            <img src={CAT_LICKING} alt="" className={classes.mobileCat} />
            {kryg() + 1000 < 10000 || kryg() === 9000
              ? (
                <div className={classes.fish2}>
                  <img src={catCount >= kryg() + 1000 ? OFF_FISH : ON_FISH} alt="" className={classes.fishSize} />
                  <Typography className={classes.label}>{kryg() === 10000 ? 10000 : kryg() + 1000}</Typography>
                </div>
              )
              : <div />}
          </div>
        )
        : (
          <div className={classes.wrapper}>
            {CatArray}
          </div>
        )}
    </div>
  );
}
