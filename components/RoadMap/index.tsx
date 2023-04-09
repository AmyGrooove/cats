import React from 'react';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import {
  ROADCAT1, ROADCAT2, ON_ROAD, OFF_ROAD,
} from '../../constants';
import { roadAchiv, roadAchivType } from '../../constants/data';

export default function Puzzle() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 1100px)');

  const roadMobile = roadAchiv.map((road: roadAchivType) => (
    <div>
      <div className={classes.mapBlock}>
        <div className={classes.catsBox}>
          <img src={road.catImg ? ROADCAT1 : ROADCAT2} alt="" className={road.catImg ? classes.imgCat1 : classes.imgCat2} />
        </div>
        <div className={classes.textBorder}>
          <div className={classes.blockMainText}>
            <Typography className={classes.blockMainLabel}>{road.mainName}</Typography>
            <img src={road.passed ? ON_ROAD : OFF_ROAD} alt="" className={classes.OnOFF} />
          </div>
          <Typography className={classes.blockMiniLabel}>
            {road.miniName}
          </Typography>
        </div>
      </div>
    </div>
  ));

  return (
    <Container id="RoadMap">
      <Typography className={classes.mainLabel}>Road Map</Typography>
      {!mobile
        ? (
          <div>
            <div className={classes.string1}>
              <div className={classes.mapBlock}>
                <img src={roadAchiv[0].catImg ? ROADCAT1 : ROADCAT2} alt="" />
                <div className={classes.textBorder}>
                  <div className={classes.blockMainText}>
                    <Typography className={classes.blockMainLabel}>{roadAchiv[0].mainName}</Typography>
                    <img src={roadAchiv[0].passed ? ON_ROAD : OFF_ROAD} alt="" className={classes.OnOFF} />
                  </div>
                  <Typography className={classes.blockMiniLabel}>
                    {roadAchiv[0].miniName}
                  </Typography>
                </div>
              </div>
              <div className={classes.string1Padd}>
                <div className={classes.mapBlock}>
                  <img src={roadAchiv[1].catImg ? ROADCAT1 : ROADCAT2} alt="" />
                  <div className={classes.textBorder}>
                    <div className={classes.blockMainText}>
                      <Typography className={classes.blockMainLabel}>{roadAchiv[1].mainName}</Typography>
                      <img src={roadAchiv[1].passed ? ON_ROAD : OFF_ROAD} alt="" className={classes.OnOFF} />
                    </div>
                    <Typography className={classes.blockMiniLabel}>
                      {roadAchiv[1].miniName}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.mapBlock}>
                <img src={roadAchiv[2].catImg ? ROADCAT1 : ROADCAT2} alt="" />
                <div className={classes.textBorder}>
                  <div className={classes.blockMainText}>
                    <Typography className={classes.blockMainLabel}>{roadAchiv[2].mainName}</Typography>
                    <img src={roadAchiv[2].passed ? ON_ROAD : OFF_ROAD} alt="" className={classes.OnOFF} />
                  </div>
                  <Typography className={classes.blockMiniLabel}>
                    {roadAchiv[2].miniName}
                  </Typography>
                </div>
              </div>
            </div>
            <div className={classes.string2}>
              <div className={classes.mapBlock}>
                <img src={roadAchiv[3].catImg ? ROADCAT1 : ROADCAT2} alt="" />
                <div className={classes.textBorder}>
                  <div className={classes.blockMainText}>
                    <Typography className={classes.blockMainLabel}>{roadAchiv[3].mainName}</Typography>
                    <img src={roadAchiv[3].passed ? ON_ROAD : OFF_ROAD} alt="" className={classes.OnOFF} />
                  </div>
                  <Typography className={classes.blockMiniLabel}>
                    {roadAchiv[3].miniName}
                  </Typography>
                </div>
              </div>
              <div className={classes.mapBlock}>
                <img src={roadAchiv[4].catImg ? ROADCAT1 : ROADCAT2} alt="" />
                <div className={classes.textBorder}>
                  <div className={classes.blockMainText}>
                    <Typography className={classes.blockMainLabel}>{roadAchiv[4].mainName}</Typography>
                    <img src={roadAchiv[4].passed ? ON_ROAD : OFF_ROAD} alt="" className={classes.OnOFF} />
                  </div>
                  <Typography className={classes.blockMiniLabel}>
                    {roadAchiv[4].miniName}
                  </Typography>
                </div>
              </div>
            </div>
            <div className={classes.string1}>
              <div className={classes.mapBlock}>
                <img src={roadAchiv[5].catImg ? ROADCAT1 : ROADCAT2} alt="" />
                <div className={classes.textBorder}>
                  <div className={classes.blockMainText}>
                    <Typography className={classes.blockMainLabel}>{roadAchiv[5].mainName}</Typography>
                    <img src={roadAchiv[5].passed ? ON_ROAD : OFF_ROAD} alt="" className={classes.OnOFF} />
                  </div>
                  <Typography className={classes.blockMiniLabel}>
                    {roadAchiv[5].miniName}
                  </Typography>
                </div>
              </div>
              <div className={classes.string3Padd}>
                <div className={classes.mapBlock}>
                  <img src={roadAchiv[6].catImg ? ROADCAT1 : ROADCAT2} alt="" />
                  <div className={classes.textBorder}>
                    <div className={classes.blockMainText}>
                      <Typography className={classes.blockMainLabel}>{roadAchiv[6].mainName}</Typography>
                      <img src={roadAchiv[6].passed ? ON_ROAD : OFF_ROAD} alt="" className={classes.OnOFF} />
                    </div>
                    <Typography className={classes.blockMiniLabel}>
                      {roadAchiv[6].miniName}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className={classes.mapBlock}>
                <img src={roadAchiv[7].catImg ? ROADCAT1 : ROADCAT2} alt="" />
                <div className={classes.textBorder}>
                  <div className={classes.blockMainText}>
                    <Typography className={classes.blockMainLabel}>{roadAchiv[7].mainName}</Typography>
                    <img src={roadAchiv[7].passed ? ON_ROAD : OFF_ROAD} alt="" className={classes.OnOFF} />
                  </div>
                  <Typography className={classes.blockMiniLabel}>
                    {roadAchiv[7].miniName}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        )
        : (
          <div>
            {roadMobile}
          </div>
        )}
    </Container>
  );
}
