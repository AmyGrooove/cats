import React, { useState, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import { MAIN_TEXT_IMAGE } from '../constants';
import Header from '../components/Header';
import useStyles from '../styles/styles';
import FormMint from '../components/Forms/FormMint';
import Slider from '../components/Slider';
import MintInfo from '../components/MintInfo';
import Progress from '../components/Progress';
import Puzzle from '../components/Puzzle';
import About from '../components/About';
import RoadMap from '../components/RoadMap';
import Basement from '../components/Basement';

const IndexPage = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.mainSection}>
        <Container>
          <Header />
          <img src={MAIN_TEXT_IMAGE} alt="cats" className={classes.mainImage} />
          <FormMint />
        </Container>
        <Slider />
        <MintInfo />
        <Progress />
      </div>
      <Puzzle />
      <div className={classes.mainSection2}>
        <About />
        <RoadMap />
        <Basement />
      </div>
    </div>
  );
};

export default IndexPage;
