import React, { useState, useEffect, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { ethers } from "ethers";
import NFTContext from "../NFTContext";
import NFTPanel from "./NFTPanel";
import NFTDetail from "./NFTDetail";
import { PageName } from "../../App";
import "./Game.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Game(props) {
  const [metadata, setMetadata] = useState([]);
  const [currMetadata, setCurrMetadata] = useState({});
  const [showNftPanel, setShowNftPanel] = useState(false);
  const [showNftPanelAnim, setShowNftPanelAnim] = useState("open");
  const [playing, setPlaying] = useState(false);
  const [nftDetail, setNftDetail] = useState(null);
  const [guideMsg, setGuideMsg] = useState(null);

  const isMoblie = useMediaQuery({ query: "(max-width: 599px)" });
  const { height, width } = useWindowDimensions();

  //! web3 API in NFTContext
  const {
    provider,
    library,
    account,
    contractAddress,
    contractAbi,
    parseEtherError,
    checkAndSwitchNetwork,
    isTestnet,
    updateStatus,
    setCurrPage,
  } = useContext(NFTContext);

  //! load NFTs
  const loadNft = async () => {
    // const { ethereum } = window;
    // if (!ethereum) {
    //   updateStatus("Please install MetaMask.");
    //   return;
    // }
    try {
      //* check network
      await checkAndSwitchNetwork(isTestnet, updateStatus);

      updateStatus(contractAddress);
      if (!contractAddress || contractAddress === "") {
        updateStatus("Contract is not available");
        return;
      }

      // clean metadata
      setCurrMetadata({});

      const signer = library.getSigner();
      const nftContract = new ethers.Contract(contractAddress, contractAbi, signer);

      updateStatus("Loading NFTs from blockchain...");

      let nfts = await nftContract.walletOfOwner(account);

      const meta = [];
      if (nfts.length > 0) {
        //* show selected switch nft
        updateStatus(`You have ${nfts.length} ${nfts.length > 1 ? "NFTs" : "NFT"}. Loading metadata...`);
        for (const bg of nfts) {
          const nftIdx = bg.toNumber();
          nftContract.tokenURI(nftIdx).then((tokenMetadataURI) => {
            if (tokenMetadataURI.startsWith("ipfs://")) {
              tokenMetadataURI = `https://rpg.mypinata.cloud/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`;
            }
            // console.log(tokenMetadataURI);
            fetch(tokenMetadataURI)
              .then((response) => response.json())
              .then((tokenMetadata) => {
                // console.log(tokenMetadata);
                meta.push(tokenMetadata);
                setMetadata([...meta]);
                updateStatus(
                  `You have ${nfts.length} ${nfts.length > 1 ? "NFTs" : "NFT"}. ${meta.length} / ${
                    nfts.length
                  } loaded. ${metadata.length === nfts.length ? "Select your favor NFT and play." : ""}`
                );
              })
              .catch((err) => {
                const errMsg = parseEtherError(err);
                updateStatus(errMsg);
              });
          });
        }
      } else {
        //* you don't have any RPG404 nfts, please mint or buy on opensea.io
        updateStatus(`You don't have any RPG404 NFTs. Please mint or buy on opensea.io`);
      }
    } catch (err) {
      const errMsg = parseEtherError(err);
      updateStatus(errMsg);
    }
  };

  //! load NFTs effect
  useEffect(() => {
    // const { ethereum } = window;
    // if (!ethereum) {
    //   return;
    // }

    loadNft();
    if (provider?.on) {
      provider.on("accountsChanged", loadNft);
      return () => {
        provider?.removeListener("accountsChanged", loadNft);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, provider]);

  //! select NFT
  const selectNft = (selectedMetadata) => {
    if (selectedMetadata) {
      const newMetadata = selectedMetadata;
      setCurrMetadata({ ...newMetadata });
      updateStatus(`Selected NFT: ${newMetadata.name}`);
    }
  };

  //! show guide
  const showGuild = (msg) => {
    if (msg) {
      setGuideMsg(msg);
    }
  };

  const hideGuild = () => {
    setGuideMsg(null);
  };

  //! open NFT panel
  const openNftPanel = () => {
    if (account) {
      if (metadata.length > 0) {
        setShowNftPanelAnim("open");
        setShowNftPanel(true);
      } else {
        updateStatus("No NFT loaded");
        loadNft();
      }
    } else {
      updateStatus("Please connect wallet first");
      props.connectWallet();
    }
  };

  //! play game
  const playGame = () => {
    if (account) {
      if (metadata.length > 0) {
        if (currMetadata.name) {
          //* Play Game!!
          const elem = document.getElementById("godot-game");
          if (elem) {
            elem.contentWindow.nftMetadata = { ...currMetadata };
            window.nftMetadata = JSON.stringify(currMetadata);
            setPlaying(true);
            elem.contentWindow.startGame();
            updateStatus("Game start, enjoy!");
          } else {
            setPlaying(false);
            updateStatus("Cannot find game :-(");
          }
        } else {
          updateStatus("Please select your favor NFT before playing");
          openNftPanel();
        }
      } else {
        updateStatus("No NFT loaded");
        loadNft();
      }
    } else {
      updateStatus("Please connect wallet first");
      props.connectWallet();
    }
  };

  return (
    <div className="game">
      {(!playing || !isMoblie) && (
        <img className="game-bg" src={process.env.PUBLIC_URL + "/img/game_bg.png"} alt="Game Background" />
      )}
      <iframe
        id="godot-game"
        className={`game-iframe ${playing ? "game-iframe-show" : "game-iframe-hide"}`}
        title="RPG 404"
        src={process.env.PUBLIC_URL + "/game/game.html"}
        frameBorder="0"
        scrolling="no"
        crossOrigin="anonymous"
        style={
          isMoblie
            ? {
                zoom: (height / width) * 0.9,
                left: (height / width) * -40,
              }
            : {}
        }
      />
      {playing && <div className="game-iframe-cover"></div>}
      {!playing && (
        <div className="game-cover">
          <img className="game-cover-img" src={process.env.PUBLIC_URL + "/img/game_cover.png"} alt="Game Cover" />
          {!showNftPanel && (
            <div>
              <img
                className="btn-game-play btn-clickable"
                src={process.env.PUBLIC_URL + "/img/btn_game_play.png"}
                alt="Play Game Button"
                onClick={playGame}
                onMouseOver={() => {
                  showGuild(`Press "Space", "Enter", or "Mouse Left" to jump.`);
                }}
                onMouseOut={hideGuild}
                onTouchStart={() => {
                  showGuild(`Touch panel to jump.`);
                }}
                onTouchEnd={hideGuild}
                onTouchCancel={hideGuild}
              />
              <img
                className="btn-select-nft btn-clickable"
                src={process.env.PUBLIC_URL + "/img/btn_game_select_nft.png"}
                alt="Select NFT Button"
                onClick={openNftPanel}
                onMouseOver={() => {
                  showGuild(`Select a "RPG 404" NFT as your player.`);
                }}
                onMouseOut={hideGuild}
                onTouchStart={() => {
                  showGuild(`Select a "RPG 404" NFT as your player.`);
                }}
                onTouchEnd={hideGuild}
                onTouchCancel={hideGuild}
              />
              <div className="game-guide">{guideMsg}</div>
            </div>
          )}
        </div>
      )}
      <img
        className="btn-game-to-mint"
        src={process.env.PUBLIC_URL + "/img/btn_game_to_mint.png"}
        alt="Mint Button"
        onClick={() => setCurrPage(PageName.MINT)}
      />
      {showNftPanel ? (
        <div>
          <div className={showNftPanelAnim}>
            <NFTPanel
              metadata={metadata}
              selectNft={selectNft}
              setNftDetail={setNftDetail}
              hideNftPanel={async () => {
                setShowNftPanelAnim("close");
                await new Promise((r) => setTimeout(r, 200));
                setShowNftPanel(false);
              }}
            />
          </div>
          <NFTDetail metadata={nftDetail} />
        </div>
      ) : null}
    </div>
  );
}
