import React, { useState } from 'react';
import { Anchor } from 'antd';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  DISCORD_ICON, SOCIAL_ICON, MEDIUM_ICON, TWITTER_ICON, BURGER_MENU,
  TWITTER_LINK, DISCORD_LINK, SOCIAL_LINK, MEDIUM_LINK, X_MARK,
} from '../../constants';
import useStyles from './styles';

const { Link } = Anchor;

export default function Header() {
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width: 1100px)');

  const [shown, setShow] = useState(false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.socialLinks}>
        <a href={TWITTER_LINK} target="_blank" rel="noreferrer">
          <img src={TWITTER_ICON} alt="Twitter" className={classes.socialIcon} />
        </a>
        <a href={DISCORD_LINK} target="_blank" rel="noreferrer">
          <img src={DISCORD_ICON} alt="Social" className={classes.socialIcon} />
        </a>
        <a href={SOCIAL_LINK} target="_blank" rel="noreferrer">
          <img src={SOCIAL_ICON} alt="S" className={classes.socialIcon} />
        </a>
        <a href={MEDIUM_LINK} target="_blank" rel="noreferrer">
          <img src={MEDIUM_ICON} alt="Medium" className={classes.socialIcon} />
        </a>
      </div>
      {mobile
        ? (
          <div>
            <button type="button" className={classes.mobileBurger} onClick={() => setShow(true)}>
              <img src={BURGER_MENU} alt="" />
            </button>
            <div>
              <div className={shown ? classes.burgerMenuActive : classes.burgerMenu} onKeyDown={() => setShow(false)} onClick={() => setShow(false)}>
                <button type="button" className={classes.mobileBurger} onClick={() => setShow(false)}>
                  <img src={X_MARK} alt="" />
                </button>
                <Anchor className={classes.navigationMenu} affix={false}>
                  <div className={classes.burgerCont}>
                    <Link href="#Mint" title="Mint" className={classes.navigationItem} />
                    <Link href="#Puzzle" title="Puzzle" className={classes.navigationItem} />
                    <Link href="#About" title="About Cats" className={classes.navigationItem} />
                    <Link href="#RoadMap" title="Road map" className={classes.navigationItem} />
                    <div className={classes.navigationItem}>
                      <a href="/#">Links</a>
                    </div>
                  </div>
                </Anchor>
              </div>
            </div>
          </div>
        )
        : (
          <Anchor className={classes.navigationMenu} affix={false}>
            <div className={classes.navigationMenu}>
              <Link href="#Mint" title="Mint" className={classes.navigationItem} />
              <Link href="#Puzzle" title="Puzzle" className={classes.navigationItem} />
              <Link href="#About" title="About Cats" className={classes.navigationItem} />
              <Link href="#RoadMap" title="Road map" className={classes.navigationItem} />
              <div className={classes.navigationItem}>
                <a href="/#">Links</a>
              </div>
            </div>
          </Anchor>
        )}
    </div>
  );
}
