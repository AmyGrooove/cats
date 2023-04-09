import { Typography } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import useStyles from './styles';
import { fetchWrapper } from '../../utils/fetch.wrapper';

import { AppContext } from '../../services/app.context';

export default function MintInfo() {
  const classes = useStyles();

  const context = useContext(AppContext);
  const [count, setCount] = useState(0);
  const [all, setAll] = useState(100);

  // update cats count from backend
  useEffect(() => {
    fetchWrapper.get('/api/token/count').then((res : any) => {
      setCount(res.mint);
      setAll(res.all);
    });
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.textWrapper}>
        <Typography className={classes.topTitle}>Already minted</Typography>
        <Typography className={classes.mainTitle}>{count}</Typography>
        <div className={classes.contLabel}>
          <Typography className={classes.bottomTitle}>out of</Typography>
          <Typography className={classes.tenNumber}>{all}</Typography>
        </div>
      </div>
    </div>
  );
}
