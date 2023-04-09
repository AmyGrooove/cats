import React, { useContext, useEffect, useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import useStyles from './styles';
import {
  MINUS_ICON_OFF, PLUS_ICON_OFF, FULLSCREAN_ICON, CAT_PUZZLE_MOBILE, CAT_PUZZLE, SHARE_ICON_1,
} from '../../constants';
import { fetchWrapper } from '../../utils/fetch.wrapper';

export default function Puzzle() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 500px)');

  const OnZoomS = (ref : any, event : any) => {
    /*
    if(ref.state.scale == 1){
      console.log("MAX SCALE")
      window.scrollBy(0,100)
    }
    console.log(ref)
    console.log(event)
    */
  };

  return (
    <div className={classes.back} id="Puzzle">
      <TransformWrapper
        onZoomStart={OnZoomS}
        onPanningStart={OnZoomS}
      >
        {({
          zoomIn, zoomOut, resetTransform, ...rest
        }) => (
          <>
            {mobile
              ? (
                <div className={classes.flexCont}>
                  <img src={CAT_PUZZLE_MOBILE} className={classes.backCat} alt="" />
                </div>
              ) : <div />}
            <div className={classes.buttonsCont}>
              <button type="button" className={classes.puzzleButtons} onClick={() => zoomOut()}>
                <img src={MINUS_ICON_OFF} alt="" />
              </button>
              <button type="button" className={classes.puzzleButtons} onClick={() => zoomIn()}>
                <img src={PLUS_ICON_OFF} alt="" />
              </button>
              <button type="button" className={classes.puzzleButtons} onClick={() => resetTransform()}>
                <img src={FULLSCREAN_ICON} alt="" className={classes.buttonImg} />
              </button>
              <a type="button" className={classes.puzzleButtons} href="/api/puzzle.jpg" target="_blank" rel="noreferrer">
                <img src={SHARE_ICON_1} alt="" className={classes.buttonImg} />
              </a>
            </div>
            <div className={classes.puzzleImageHolder}>

              <TransformComponent>
                <img className={classes.puzzleImage} src="/api/puzzle.jpg" alt="test" />
              </TransformComponent>

            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
}
