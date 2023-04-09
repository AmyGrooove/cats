// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { useWeb3React } from '@web3-react/core';
import { WalletConnectConnector, UserRejectedRequestError } from '@web3-react/walletconnect-connector';
import {
  ARROW_RIGHT_ICON, PLUS_ICON_OFF, MINUS_ICON_OFF,
  MINUS_ICON_ON, PLUS_ICON_ON,
} from '../../../constants';
import { SingleCollection } from '../../../constants/contractsAbi';
import { singleCollectionAddress } from '../../../constants/data';

import { injected, resetWalletConnector, walletconnect } from '../../../utils/connectors';

import useStyles from './styles';
import { fetchWrapper } from '../../../utils/fetch.wrapper';
import {
  getWelcomeToken, getAuthToken, userSubject, getPingAuth, login,
} from '../../../services/user.service';

import {
  connectMetamask,
} from '../../../services/wallet.service';

export default function FormMint() {
  const classes = useStyles();
  const [count, setCount] = useState(1);
  const [user, setUser] = userSubject();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [btnMint, setBtnMint] = React.useState(false);

  const {
    activate, active, account, library, chainId, connector, deactivate, error, setError,
  } = useWeb3React();

  const handleIncrementCount = () => {
    if (count === 20) {
      return;
    }
    setCount((prevCount: number) => prevCount + 1);
  };

  const handleDecrementCount = () => {
    if (count <= 1) {
      return;
    }
    setCount((prevCount: number) => prevCount - 1);
  };

  const _mint = async () => {
    // console.log('address', singleCollectionAddress, process.env.COLLECTION_ADDRESS, process.env.NEXT_PUBLIC_COLLECTION_ADDRESS);
    // Check login and login
    // console.log('User', user);
    // console.log('Now', Date.now());
    let _user;
    if (!user.token || user.time + 86400 * 60 <= Date.now()) {
      _user = await login(library, account);
      await setUser(_user);
    } else {
      _user = user;
    }
    // console.log('User', _user);

    const freeNFT = await fetchWrapper.get(`/api/token?count=${count}`, _user.token);
    console.log('freeNFT ', freeNFT);

    // Re login id user token exceed maximum nfts
    if (freeNFT === false) {
      setUser({});
      // _mint();
    } else {
      if (library) {
        const c = new library.eth.Contract(SingleCollection, singleCollectionAddress);

        const _value = 0.03 * count;

        // console.log(freeNFT.tokenIds, freeNFT.sign.v, freeNFT.sign.r, freeNFT.sign.s, freeNFT.fees, freeNFT.ipfsHashes);
        c.methods.mint(
          freeNFT.tokenIds,
          freeNFT.sign.v, freeNFT.sign.r, freeNFT.sign.s,
          // fees,
          freeNFT.fees,
          freeNFT.ipfsHashes,
        ).send({
          from: account,
          value: library.utils.toWei(_value.toString(), 'ether'),
        });
      }

      // update puzzle
      await fetchWrapper.get('/api/images', user.token);
    }
  };

  const activateWallet = async () => {
    activate(injected, undefined, true).catch(() => {
      console.log('Connect error');
      // deactivate();
    });
  };

  const activateWalletConnect = () => activate(walletconnect, undefined, true).catch(() => {
    resetWalletConnector(walletconnect);
    console.log('Connect error');
  });

  const handleMint = async () => {
    console.log('LIB ', library, connector, error);
    // Check if metamask installed
    if ((typeof window.ethereum === 'undefined'
      || (typeof window.web3 === 'undefined')) && !active) {
      // await resetWalletConnector();
      console.log('NO METAMASK installed');
      console.log(activateWalletConnect());
      // handleOpen();
    } else if (!library) {
      console.log('💰 NOT Activated');

      activateWallet();
      setBtnMint(true);
    }

    console.log(active, account, library, user);
    if (library) {
      // Change network
      if (library.currentProvider.chainId !== process.env.NEXT_PUBLIC_TARGET_CHAIN) {
        await library.currentProvider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: process.env.NEXT_PUBLIC_TARGET_CHAIN }],
        });
      }

      _mint();
    }
  };

  const comingSoon = (process.env.NEXT_PUBLIC_COMING_SOON === 'true');

  return (
    <>
      { comingSoon
      && (
      <div className={classes.comingSoon}>
        Coming soon...
      </div>
      )}
      { !comingSoon
      && (
      <div className={classes.wrapper}>
        <div className={classes.countWrapper}>
          <button type="button" className={classes.manipulateButton} onClick={handleDecrementCount}>
            <img src={MINUS_ICON_OFF} alt="" className={classes.onButton} />
            <img src={MINUS_ICON_ON} alt="" />
          </button>
          <Typography className={classes.count}>{count}</Typography>
          <button type="button" className={classes.manipulateButton} onClick={handleIncrementCount}>
            <img src={PLUS_ICON_OFF} alt="" className={classes.onButton} />
            <img src={PLUS_ICON_ON} alt="" />
          </button>
        </div>
        <div className={classes.mintPadding}>
          <button type="button" className={classes.mintButton} onClick={handleMint}>
            {btnMint
            && <Typography className={classes.mintLabel}>Mint</Typography>}
            {!btnMint
            && <Typography className={classes.mintLabelConnect}>Connect Wallet</Typography>}
          </button>
        </div>
        <button type="button" className={classes.addButton}>
          <img src={ARROW_RIGHT_ICON} alt="" className={classes.mobileHightAddButton} />
        </button>
      </div>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className={classes.centerBox}
      >
        <Box>
          <div className={classes.modaleBox}>
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2" className={classes.paddingTop}>
                You have to use MetaMask for minting
              </Typography>
              <Typography id="modal-modal-description" className={classes.paddingBop}>
                Please install
                {' '}
                <a href="https://metamask.io/" className={classes.link} target="_blank" rel="noreferrer">MetaMask</a>
                {' '}
                extension for your browser.
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
