import React, { useState, useEffect, useContext } from 'react';
import { ethers } from 'ethers';
import NFTContext from '../NFTContext';
import NFTPanel from './NFTPanel';
import { PageName } from '../../App';
import './Game.css';

export default function Game() {
  const [metadata, setMetadata] = useState([]);
  const [currMetadata, setCurrMetadata] = useState({});
  const [showNftPanel, setShowNftPanel] = useState(false);
  const [showNftPanelAnim, setShowNftPanelAnim] = useState('open');

  //! web3 API in NFTContext
  const {
    currentAccount,
    contractAddress,
    contractAbi,
    parseEther,
    checkAndSwitchNetwork,
    isRinkeby,
    updateStatus,
    setCurrPage,
  } = useContext(NFTContext);

  //! load NFTs
  const loadNft = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      updateStatus('Please install MetaMask.');
      return;
    }
    try {
      //* check network
      await checkAndSwitchNetwork(isRinkeby, updateStatus);

      if (currentAccount === null) {
        updateStatus('Please connect wallet first');
        return;
      }

      updateStatus(contractAddress);
      if (!contractAddress || contractAddress === '') {
        updateStatus('Contract is not available');
        return;
      }

      // clean metadata
      setCurrMetadata({});

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const nftContract = new ethers.Contract(contractAddress, contractAbi, signer);

      updateStatus('Loading NFTs from blockchain...');

      let nfts = await nftContract.walletOfOwner(currentAccount);

      const meta = [];
      if (nfts.length > 0) {
        //* show selected switch nft
        updateStatus(`You have ${nfts.length} ${nfts.length > 1 ? 'NFTs' : 'NFT'}. Loading metadata...`);
        for (const bg of nfts) {
          const nftIdx = bg.toNumber();
          nftContract.tokenURI(nftIdx).then((tokenMetadataURI) => {
            if (tokenMetadataURI.startsWith('ipfs://')) {
              tokenMetadataURI = `https://ipfs.io/ipfs/${tokenMetadataURI.split('ipfs://')[1]}`;
            }
            // console.log(tokenMetadataURI);
            fetch(tokenMetadataURI)
              .then((response) => response.json())
              .then((tokenMetadata) => {
                // console.log(tokenMetadata);
                meta.push(tokenMetadata);
                setMetadata([...meta]);
                updateStatus(
                  `You have ${nfts.length} ${nfts.length > 1 ? 'NFTs' : 'NFT'}. ${meta.length} loaded. ${
                    metadata.length === nfts.length ? 'Select your favor NFT and play.' : ''
                  }`
                );
              });
          });
        }
      } else {
        //* you don't have any RPG404 nfts, please mint or buy on opensea.io
        updateStatus(`You don't have any RPG404 NFTs. Please mint or buy on opensea.io`);
      }
    } catch (err) {
      const errMsg = parseEther(err);
      updateStatus(errMsg);
    }
  };

  //! load NFTs effect
  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) {
      return;
    }

    loadNft();
    ethereum.on('accountsChanged', loadNft);
    return () => {
      ethereum?.removeListener('accountsChanged', loadNft);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAccount]);

  //! select NFT
  const selectNft = (selectedMetadata) => {
    console.log(selectedMetadata);
    if (selectedMetadata) {
      const newMetadata = selectedMetadata;
      setCurrMetadata({ ...newMetadata });
      console.log(currMetadata);
      updateStatus(`Selected NFT: ${newMetadata.name}`);
    }
  };

  //! open NFT panel
  const openNftPanel = () => {
    if (currentAccount) {
      if (metadata.length > 0) {
        setShowNftPanelAnim('open');
        setShowNftPanel(true);
      } else {
        updateStatus('No NFT loaded');
        loadNft();
      }
    } else {
      updateStatus('Please connect wallet first');
    }
  };

  //! play game
  const playGame = () => {
    if (currentAccount) {
      if (metadata.length > 0) {
        if (currMetadata.name) {
          //TODO: Play Game!!
          updateStatus('Game start, enjoy!');
        } else {
          updateStatus('Please select your favor NFT before playing');
        }
      } else {
        updateStatus('No NFT loaded');
        loadNft();
      }
    } else {
      updateStatus('Please connect wallet first');
    }
  };

  //! cover or iframe
  let gameFrame;
  if (currentAccount && currMetadata.name) {
    //* iframe
    gameFrame = (
      <iframe
        className='game-iframe'
        title='RPG 404'
        src={process.env.PUBLIC_URL + '/game/game.html'}
        frameBorder='0'
        scrolling='no'
        crossOrigin='anonymous'
      />
    );
  } else {
    //* cover image
    gameFrame = (
      <div className='game-cover'>
        <img className='game-cover-img' src={process.env.PUBLIC_URL + '/img/game_cover.png'} alt='Game Cover' />;
        {!showNftPanel && (
          <img
            className='btn-game-play'
            src={process.env.PUBLIC_URL + '/img/btn_game_play.png'}
            alt='Play Game Button'
            onClick={playGame}
          />
        )}
        {!showNftPanel && (
          <img
            className='btn-select-nft'
            src={process.env.PUBLIC_URL + '/img/btn_game_select_nft.png'}
            alt='Select NFT Button'
            onClick={openNftPanel}
          />
        )}
      </div>
    );
  }

  return (
    <div className='game'>
      <img className='game-bg' src={process.env.PUBLIC_URL + '/img/game_bg.png'} alt='Game Background' />
      {gameFrame}
      <img
        className='btn-game-to-mint'
        src={process.env.PUBLIC_URL + '/img/btn_game_to_mint.png'}
        alt='Mint Button'
        onClick={() => setCurrPage(PageName.MINT)}
      />
      {showNftPanel ? (
        <div className={showNftPanelAnim}>
          <NFTPanel
            metadata={metadata}
            selectNft={selectNft}
            hideNftPanel={async () => {
              setShowNftPanelAnim('close');
              await new Promise((r) => setTimeout(r, 200));
              setShowNftPanel(false);
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
