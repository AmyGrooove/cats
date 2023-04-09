import React from 'react';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import { OPENSEA_LINK, SOCIAL_ICON } from '../../constants';

export default function About() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 500px)');

  return (
    <Container id="About">
      <Typography className={classes.labelMain}>About Cat collection</Typography>
      <div className={classes.aboutCont}>
        <div className={classes.info}>
          <Typography className={classes.labelMini}>
            10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain. The project
            that inspired the modern CryptoArt movement. Selected press and appearances include Mashable, CNBC,
            The Financial Times, Bloomberg, MarketWatch, The Paris Review, Salon, The Outline, BreakerMag,
            Christie&apos;s of London, Art|Basel, The PBS NewsHour, The New York Times in 2018 and again in 2021.
            The Cryptopunks are one of the earliest examples of a &quot;Non-Fungible Token&quot; on Ethereum,
            and were inspiration for the ERC-721 standard that powers most digital art and collectibles.
          </Typography>
          {mobile ? <div />
            : (
              <div className={classes.buttonPadding}>
                <a href={OPENSEA_LINK}>
                  <button type="button" className={classes.buttonLink}>
                    <img src={SOCIAL_ICON} alt="" />
                    <Typography className={classes.buttonLabel}>OPENSEA</Typography>
                  </button>
                </a>
              </div>
            )}
        </div>
        <div className={classes.cardContMain}>
          <div className={classes.cardContRow1}>
            <div className={classes.cardContRow2}>
              <div className={classes.card}>
                <img className={classes.cardContent} src="/about/cat1.jpg" alt="Cat" />
                <Typography className={classes.cardLabel}>NAME CAT</Typography>
              </div>
            </div>
            <div>
              <div className={classes.card}>
                <img className={classes.cardContent} src="/about/cat2.jpg" alt="Cat" />
                <Typography className={classes.cardLabel}>NAME CAT</Typography>
              </div>
            </div>
          </div>
          <div>
            <div className={classes.cardContRow2}>
              <div className={classes.card}>
                <img className={classes.cardContent} src="/about/cat3.jpg" alt="Cat" />
                <Typography className={classes.cardLabel}>NAME CAT</Typography>
              </div>
            </div>
            <div>
              <div className={classes.card}>
                <img className={classes.cardContent} src="/about/cat4.jpg" alt="Cat" />
                <Typography className={classes.cardLabel}>NAME CAT</Typography>
              </div>
            </div>
          </div>
        </div>
        {mobile
          ? (
            <div className={classes.buttonPadding}>
              <a href={OPENSEA_LINK}>
                <button type="button" className={classes.buttonLink}>
                  <img src={SOCIAL_ICON} alt="" className={classes.imgLink} />
                  <Typography className={classes.buttonLabel}>OPENSEA</Typography>
                </button>
              </a>
            </div>
          ) : <div />}
      </div>
    </Container>
  );
}
