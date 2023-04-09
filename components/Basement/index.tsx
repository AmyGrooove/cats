import React from 'react';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import { Anchor } from 'antd';
import useStyles from './styles';
import {
  BAS_CAT_MOBILE, TWITTER_ICON, DISCORD_ICON, SOCIAL_ICON, MEDIUM_ICON,
  TWITTER_LINK, DISCORD_LINK, SOCIAL_LINK, MEDIUM_LINK,
} from '../../constants';

const { Link } = Anchor;

export default function Basement() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 1100px)');

  return (
    <div>
      <Container>
        <Typography className={classes.info}>
          Now they must be purchased from someone via the marketplace that&apos;s also embedded in the blockchain.
          Via this market you can buy, bid on, and offer punks for sale. Below, you&apos;ll find information about
          the status of each Punk in the market. Punks with a blue background are not for sale and have no
          current bids. Punks with a red background are available for sale by their owner.
        </Typography>
      </Container>
      <div className={classes.void} />
      <div className={classes.paddingCenter}>
        <div className={classes.followBlock}>
          {mobile ? <img src={BAS_CAT_MOBILE} alt="" className={classes.basCatMobile} /> : <div />}
          <div className={classes.paddingLeft}>
            <Typography className={classes.label}>Hey, follow us!</Typography>
            <div className={classes.links}>
              <a href={TWITTER_LINK}>
                <img src={TWITTER_ICON} alt="" className={classes.linksSize} />
              </a>
              <a href={DISCORD_LINK}>
                <img src={DISCORD_ICON} alt="" className={classes.linksSize} />
              </a>
              <a href={SOCIAL_LINK}>
                <img src={SOCIAL_ICON} alt="" className={classes.linksSize} />
              </a>
              <a href={MEDIUM_LINK}>
                <img src={MEDIUM_ICON} alt="" className={classes.linksSize} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {mobile ? <div />
        : (
          <Anchor affix={false}>
            <Container>
              <div className={classes.navigationMenu}>
                <Link href="#Mint" title="Mint" className={classes.navigationItem} />
                <Link href="#Puzzle" title="Puzzle" className={classes.navigationItem} />
                <Link href="#About" title="About Cats" className={classes.navigationItem} />
                <Link href="#RoadMap" title="Road map" className={classes.navigationItem} />
                <div className={classes.navigationItem}>
                  <a href="/#">Links</a>
                </div>
              </div>
            </Container>
          </Anchor>
        )}
    </div>
  );
}
