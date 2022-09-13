/*! For license information please see main.c2a9127f.chunk.js.LICENSE.txt */
(this["webpackJsonprpg-404"]=this["webpackJsonprpg-404"]||[]).push([[0],{208:function(e,t,n){},294:function(e){e.exports=JSON.parse('{"contractName":"RPG404","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"flipSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"freeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_quantity","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newMaxPerTxDuringMint","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"freeMintedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFreeSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerAddressDuringFreeMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerAddressDuringMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerTxDuringMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"mintedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]}')},318:function(e,t,n){},319:function(e,t,n){},321:function(e,t,n){},322:function(e,t,n){},323:function(e,t,n){},324:function(e,t){},332:function(e,t,n){},333:function(e,t,n){},334:function(e,t,n){},335:function(e,t,n){},336:function(e,t,n){},337:function(e,t){},377:function(e,t){},379:function(e,t){},400:function(e,t){},402:function(e,t){},414:function(e,t){},415:function(e,t){},430:function(e,t){},517:function(e,t){},541:function(e,t){},579:function(e,t,n){},580:function(e,t,n){"use strict";n.r(t);var a=n(13),r=n.n(a),i=n(293),s=n.n(i),c=(n(318),n(1)),o=n(10),u=n(25),l=n(44),p=n(52),d=n(294),m=Object(a.createContext)({contractAddress:"0xc21dCcA393Fe26D585db6598533b655816A87543",contractAbi:d.abi,openseaColletionName:"rpg-404",isTestnet:!1,parseEtherError:function(){},price:-1,setPrice:function(){},maxSupply:-1,setMaxSupply:function(){},maxFreeSupply:-1,setMaxFreeSupply:function(){},totalSupply:-1,setTotalSupply:function(){},maxPerTxDuringMint:-1,setMaxPerTxDuringMint:function(){},maxPerAddressDuringFreeMint:-1,setMaxPerAddressDuringFreeMint:function(){},currPage:null,setCurrPage:function(){},provider:null,library:null,chainId:null,account:null,checkAndSwitchNetwork:function(){},statusMsg:"",updateStatus:function(){}}),b=(n(319),n(11)),f=function(e){var t=Object(a.useRef)();return Object(b.jsx)("div",{className:"social-icon",onMouseEnter:function(){t.current.src=""+e.iconHover},onMouseLeave:function(){t.current.src=""+e.iconNormal},onClick:e.onClick,children:Object(b.jsx)("img",{ref:t,className:"social-icon-img",src:""+e.iconNormal,alt:e.alt})})};var y=function(e){var t=Object(a.useContext)(m),n=t.contractAddress,r=t.openseaColletionName,i=t.isTestnet,s=[{ref:null,iconNormal:"/img/social/icon_twitter.png",iconHover:"/img/social/icon_twitter_hover.png",alt:"Twitter",onClick:function(){window.open("https://twitter.com/intent/follow?screen_name=rug_pull_games")}},{ref:null,iconNormal:"/img/social/icon_opensea.png",iconHover:"/img/social/icon_opensea_hover.png",alt:"Opensea",onClick:function(){window.open("https://".concat(i?"testnets.":"","opensea.io/collection/").concat(r))}},{ref:null,iconNormal:"/img/social/icon_etherscan.png",iconHover:"/img/social/icon_etherscan_hover.png",alt:"Etherscan",onClick:function(){window.open("https://".concat(i?"rinkeby.":"","etherscan.io/address/").concat(n))}},{ref:null,iconNormal:"/img/social/icon_metamask.png",iconHover:"/img/social/icon_metamask_hover.png",alt:"MetaMask",onClick:function(){e.connectWallet()}}];return Object(b.jsx)("div",{className:"social-links",children:s.map((function(e){return Object(a.createElement)(f,Object(p.a)(Object(p.a)({},e),{},{key:"social-icon-".concat(e.alt)}))}))})};n(321);var g=function(){return Object(b.jsxs)("div",{className:"logo",children:[Object(b.jsx)("img",{className:"logo-rpg-icon",src:"/img/icon_rug_pull_games_logo_lg.png",alt:"Twitter",onClick:function(){return window.open("https://rug-pull.games","_blank")}}),Object(b.jsx)("img",{className:"logo-rpg-404-icon",src:"/img/icon_rpg_404.png",alt:"Discord"})]})};n(322);var j=function(e){return Object(b.jsxs)("div",{className:"navbar",children:[Object(b.jsx)(g,{}),Object(b.jsx)(y,{connectWallet:e.connectWallet})]})},v=n(63),x=(n(323),new l.a.providers.JsonRpcProvider("https://mainnet.infura.io/v3/".concat("9ff9cd34b94a48d9bc6e3fc48f02673f"))),h=function(e,t){return e.length>=2*t+2?"".concat(e.substring(0,t+2),"...").concat(e.substr(e.length-t)):e};var O=function(){var e=Object(a.useContext)(m).account,t=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],r=t[1],i=function(){var e=Object(o.a)(Object(c.a)().mark((function e(t){var a;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n[t]){e.next=2;break}return e.abrupt("return",n[t]);case 2:return console.log("fetching address.. "),a=x.lookupAddress(t),r((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(v.a)({},t,null!==a&&void 0!==a?a:t))})),e.abrupt("return",null!==a&&void 0!==a?a:t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{names:n,getName:i}}(),n=t.getName,r=Object(a.useState)(""),i=Object(u.a)(r,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){var t=function(){var t=Object(o.a)(Object(c.a)().mark((function t(){var a;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=8;break}return l(h(e,4)),t.next=4,n(e);case 4:!(a=t.sent)||a&&42===a.length&&a.startsWith("0x")?l(h(e,4)):l(a),t.next=9;break;case 8:l("");case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(b.jsx)("div",{className:"wallet-acc",children:s})};n(332);var w=function(e){return Object(b.jsx)("div",{className:"status",children:e.statusMsg})};n(333),n(334);var M=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(1),p=Object(u.a)(s,2),d=p[0],f=p[1],y=Object(a.useContext)(m),g=y.contractAddress,j=y.contractAbi,v=y.openseaColletionName,x=y.isTestnet,h=y.parseEtherError,O=y.checkAndSwitchNetwork,w=y.price,M=y.setPrice,k=y.maxSupply,T=y.setMaxSupply,N=y.maxFreeSupply,S=y.setMaxFreeSupply,P=y.totalSupply,C=y.setTotalSupply,_=y.maxPerTxDuringMint,A=y.setMaxPerTxDuringMint,E=y.maxPerAddressDuringFreeMint,F=y.setMaxPerAddressDuringFreeMint,I=y.setCurrPage,D=y.account,B=y.updateStatus;Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(c.a)().mark((function e(){var t,n,a,r,i,s,o,u,p,d,m,b;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,n=t.ethereum){e.next=4;break}return B("Please install MetaMask."),e.abrupt("return");case 4:if(D){e.next=7;break}return B("Please connect wallet first"),e.abrupt("return");case 7:if(B(g),g&&""!==g){e.next=11;break}return B("Contract is not available"),e.abrupt("return");case 11:return e.prev=11,a=new l.a.providers.Web3Provider(n),r=a.getSigner(),i=new l.a.Contract(g,j,r),B("Loading mint contract info..."),e.next=18,i.maxSupply();case 18:return s=e.sent,T(s.toNumber()),e.next=22,i.maxFreeSupply();case 22:return o=e.sent,S(o.toNumber()),e.next=26,i.totalSupply();case 26:return u=e.sent,C(u.toNumber()),e.next=30,i.maxPerTxDuringMint();case 30:return p=e.sent,A(p.toNumber()),e.next=34,i.maxPerAddressDuringFreeMint();case 34:if(d=e.sent,F(d.toNumber()),!(P<N)){e.next=40;break}M(0),e.next=44;break;case 40:return e.next=42,i.cost();case 42:m=e.sent,M(l.a.utils.formatEther(m));case 44:B("Mint contract info loaded"),e.next=51;break;case 47:e.prev=47,e.t0=e.catch(11),b=h(e.t0),B(b);case 51:case"end":return e.stop()}}),e,null,[[11,47]])})));return function(){return e.apply(this,arguments)}}();e()}),[D]);var W=function(e){e&&w>-1&&(e=P<N?Math.min(E,Math.max(1,e)):Math.min(_,Math.max(1,e)),f(e))};Object(a.useEffect)((function(){var e=function(){var e=Object(o.a)(Object(c.a)().mark((function e(){var t,n,a,r,i,s,o,u;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,n=t.ethereum){e.next=4;break}return B("Please install MetaMask."),e.abrupt("return");case 4:if(D){e.next=6;break}return e.abrupt("return");case 6:if(g&&""!==g){e.next=8;break}return e.abrupt("return");case 8:return e.prev=8,e.next=11,O(x,B);case 11:return a=new l.a.providers.Web3Provider(n),r=a.getSigner(),i=new l.a.Contract(g,j,r),e.next=16,i.totalSupply();case 16:if(s=e.sent,C(s.toNumber()),!(P<N)){e.next=22;break}M(0),e.next=26;break;case 22:return e.next=24,i.cost();case 24:o=e.sent,M(l.a.utils.formatEther(o));case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(8),u=h(e.t0),B(u);case 32:case"end":return e.stop()}}),e,null,[[8,28]])})));return function(){return e.apply(this,arguments)}}(),t=setInterval((function(){e()}),500);return function(){return clearInterval(t)}}));var G,L=function(){var t=Object(o.a)(Object(c.a)().mark((function t(){var n,a,s,o,u,p,m;return Object(c.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(P>=k)){t.next=4;break}return alert("Thank you for your interest. \nGohan-kun is sold out. \nPlease check https://opensea.io/collection/gohan-kun."),window.open("https://".concat(x?"testnets.":"","opensea.io/collection/").concat(v)),t.abrupt("return");case 4:if(n=window,a=n.ethereum){t.next=8;break}return B("Please install MetaMask."),t.abrupt("return");case 8:if(D){t.next=12;break}return B("Please connect wallet first"),e.connectWallet(),t.abrupt("return");case 12:if(!r){t.next=15;break}return B("Busy... please wait"),t.abrupt("return");case 15:if(g&&""!==g){t.next=18;break}return B("Contract is not available"),t.abrupt("return");case 18:if(!(w<-1)){t.next=21;break}return B("Load contract info first"),t.abrupt("return");case 21:return t.prev=21,t.next=24,O(x,B);case 24:if(s=new l.a.providers.Web3Provider(a),o=s.getSigner(),u=new l.a.Contract(g,j,o),B("Initialize minting..."),i(!0),!(P<N)){t.next=35;break}return t.next=32,u.freeMint(d);case 32:p=t.sent,t.next=38;break;case 35:return t.next=37,u.mint(d,{value:l.a.utils.parseEther((w*d).toString())});case 37:p=t.sent;case 38:return B("Mint (price: ".concat(w,", quantity: ").concat(d,")... please wait")),t.next=41,p.wait();case 41:B("Mined, see transction: https://".concat(x?"rinkeby.":"","etherscan.io/tx/").concat(p.hash)),i(!1),t.next=50;break;case 45:t.prev=45,t.t0=t.catch(21),m=h(t.t0),B(m),i(!1);case 50:case"end":return t.stop()}}),t,null,[[21,45]])})));return function(){return t.apply(this,arguments)}}();return G=-1!==P&&P<k?Object(b.jsxs)("div",{className:"vending-mint",children:[Object(b.jsx)("img",{className:"vending-btn-add",src:"/img/btn_mint_add.png",alt:"Button of Increasing Mint Quantity",onClick:function(){W(d+1)}}),Object(b.jsx)("img",{className:"vending-btn-sub",src:"/img/btn_mint_sub.png",alt:"Button of Decreasing Mint Quantity",onClick:function(){W(d-1)}}),Object(b.jsx)("img",{className:"vending-bg-input-frame",src:"/img/bg_mint_input_frame.png",alt:"Mint Quantity Input Frame"}),Object(b.jsx)("img",{className:"vending-btn-mint",src:"/img/btn_mint.png",alt:"Mint Quantity Input Frame",onClick:L}),Object(b.jsx)("div",{className:"vending-price",children:w>0?"Price: ".concat(w," eth"):0===w?"Price: Free":""}),Object(b.jsx)("div",{className:"vending-supply",children:w>-1?"Mint#: ".concat(P," / ").concat(P<N?N:k):""}),Object(b.jsx)("div",{className:"vending-quantity",children:w>-1?d:"???"})]}):Object(b.jsx)("img",{className:"vending-btn-opensea",src:"/img/btn_mint_opensea.png",alt:"Buy NFTs on Opensea",onClick:function(){window.open("https://".concat(x?"testnets.":"","opensea.io/collection/").concat(v))}}),Object(b.jsxs)("div",{className:"vending-machine",children:[Object(b.jsx)("img",{className:"vending-bg",src:"/img/bg_vending_machine.png",alt:"Vending Machine Background"}),Object(b.jsx)("img",{className:"vending-btn-to-game",src:"/img/btn_mint_to_game.png",alt:"Button of Vending Machine to Game",onClick:function(){return I(R.GAME)}}),G]})};var k=function(e){var t=Object(a.useRef)(null);return Object(b.jsxs)("div",{className:"mint",children:[Object(b.jsx)("img",{className:"mint-market-bg",src:"/img/bg_mint_market.png",alt:"Mint Market Background",onClick:function(){var e;null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}}),Object(b.jsx)("div",{ref:t,children:Object(b.jsx)(M,Object(p.a)({},e.connectWallet))})]})},T=n(297);n(208);function N(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),r=n[0],i=n[1],s=function(){e.setNftDetail(e.metadata)},c=function(){e.setNftDetail(null)};return Object(b.jsxs)("div",{className:"nft-item",onClick:function(){e.selectNft(e.metadata),e.hideNftPanel()},onMouseOver:s,onMouseOut:c,onTouchStart:s,onTouchEnd:c,onTouchCancel:c,draggable:"true",onDragStart:function(e){i(e.clientX),e.dataTransfer.setDragImage(e.target,1e5,0)},onDrag:function(t){t.clientX>0&&(e.scrollPanel(r-t.clientX),i(t.clientX)),t.dataTransfer.setDragImage(t.target,1e5,0)},children:[Object(b.jsx)("img",{className:"nft-item-loading",src:"/img/placehold_nft_loading.png",alt:"NFT Loading"}),Object(b.jsx)("img",{className:"nft-image",src:"https://rpg.mypinata.cloud/ipfs/".concat(e.metadata.image.split("ipfs://")[1]),alt:e.metadata.name})]})}var S=function(e){var t=Object(a.useRef)(),n=function(e){t.current.scrollLeft+=e};return Object(b.jsx)("div",{className:"nft-panel",children:Object(b.jsx)("div",{className:"nft-container",ref:t,onWheel:function(e){e.deltaY>0&&n(30),e.deltaY<0&&n(-30)},children:e.metadata.map((function(t){var r={metadata:t,selectNft:e.selectNft,hideNftPanel:e.hideNftPanel,setNftDetail:e.setNftDetail,scrollPanel:n};return Object(a.createElement)(N,Object(p.a)(Object(p.a)({},r),{},{key:"nft-metadata-".concat(t.dna)}))}))})})};n(335);var P=function(e){return Object(b.jsx)("div",{className:"nft-detail",children:e.metadata&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Name: ",e.metadata.name]}),e.metadata.attributes.map((function(e){return function(e){return Object(b.jsxs)("p",{children:[e.trait_type,": ",e.value]},"nft-metadata-attr-".concat(e.trait_type))}(e)}))]})})};n(336);var C=function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)({}),d=Object(u.a)(s,2),f=d[0],y=d[1],g=Object(a.useState)(!1),j=Object(u.a)(g,2),v=j[0],x=j[1],h=Object(a.useState)("open"),O=Object(u.a)(h,2),w=O[0],M=O[1],k=Object(a.useState)(!1),N=Object(u.a)(k,2),C=N[0],_=N[1],A=Object(a.useState)(null),E=Object(u.a)(A,2),F=E[0],I=E[1],D=Object(a.useState)(null),B=Object(u.a)(D,2),W=B[0],G=B[1],L=Object(a.useContext)(m),U=L.account,q=L.contractAddress,H=L.contractAbi,Y=L.parseEtherError,J=L.checkAndSwitchNetwork,Q=L.isTestnet,X=L.updateStatus,V=L.setCurrPage,z=function(){var e=Object(o.a)(Object(c.a)().mark((function e(){var t,n,a,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=window,n=t.ethereum){e.next=4;break}return X("Please install MetaMask."),e.abrupt("return");case 4:return e.prev=4,e.delegateYield(Object(c.a)().mark((function e(){var t,a,s,o,u,p,d,m,b;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J(Q,X);case 2:if(X(q),q&&""!==q){e.next=6;break}return X("Contract is not available"),e.abrupt("return",{v:void 0});case 6:return y({}),t=new l.a.providers.Web3Provider(n),a=t.getSigner(),s=new l.a.Contract(q,H,a),X("Loading NFTs from blockchain..."),e.next=13,s.walletOfOwner(U);case 13:if(o=e.sent,u=[],o.length>0){X("You have ".concat(o.length," ").concat(o.length>1?"NFTs":"NFT",". Loading metadata...")),p=Object(T.a)(o);try{for(p.s();!(d=p.n()).done;)m=d.value,b=m.toNumber(),s.tokenURI(b).then((function(e){e.startsWith("ipfs://")&&(e="https://rpg.mypinata.cloud/ipfs/".concat(e.split("ipfs://")[1])),fetch(e).then((function(e){return e.json()})).then((function(e){u.push(e),i([].concat(u)),X("You have ".concat(o.length," ").concat(o.length>1?"NFTs":"NFT",". ").concat(u.length," / ").concat(o.length," loaded. ").concat(r.length===o.length?"Select your favor NFT and play.":""))})).catch((function(e){var t=Y(e);X(t)}))}))}catch(c){p.e(c)}finally{p.f()}}else X("You don't have any RPG404 NFTs. Please mint or buy on opensea.io");case 16:case"end":return e.stop()}}),e)}))(),"t0",6);case 6:if("object"!==typeof(a=e.t0)){e.next=9;break}return e.abrupt("return",a.v);case 9:e.next=15;break;case 11:e.prev=11,e.t1=e.catch(4),s=Y(e.t1),X(s);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=window.ethereum;if(e)return z(),e.on("accountsChanged",z),function(){null===e||void 0===e||e.removeListener("accountsChanged",z)}}),[U]);var K=function(e){e&&G(e)},Z=function(){G(null)},$=function(){U?r.length>0?(M("open"),x(!0)):(X("No NFT loaded"),z()):(X("Please connect wallet first"),e.connectWallet())};return Object(b.jsxs)("div",{className:"game",children:[Object(b.jsx)("img",{className:"game-bg",src:"/img/game_bg.png",alt:"Game Background"}),Object(b.jsx)("iframe",{id:"godot-game",className:"game-iframe",title:"RPG 404",src:"/game/game.html",frameBorder:"0",scrolling:"no",crossOrigin:"anonymous"}),!C&&Object(b.jsxs)("div",{className:"game-cover",children:[Object(b.jsx)("img",{className:"game-cover-img",src:"/img/game_cover.png",alt:"Game Cover"}),!v&&Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"btn-game-play btn-clickable",src:"/img/btn_game_play.png",alt:"Play Game Button",onClick:function(){if(U)if(r.length>0)if(f.name){var t=document.getElementById("godot-game");t?(t.contentWindow.nftMetadata=Object(p.a)({},f),window.nftMetadata=JSON.stringify(f),_(!0),t.contentWindow.startGame(),X("Game start, enjoy!")):(_(!1),X("Cannot find game :-("))}else X("Please select your favor NFT before playing"),$();else X("No NFT loaded"),z();else X("Please connect wallet first"),e.connectWallet()},onMouseOver:function(){K('Press "Space", "Enter", or "Mouse Left" to jump.')},onMouseOut:Z,onTouchStart:function(){K("Touch panel to jump.")},onTouchEnd:Z,onTouchCancel:Z}),Object(b.jsx)("img",{className:"btn-select-nft btn-clickable",src:"/img/btn_game_select_nft.png",alt:"Select NFT Button",onClick:$,onMouseOver:function(){K('Select a "RPG 404" NFT as your player.')},onMouseOut:Z,onTouchStart:function(){K('Select a "RPG 404" NFT as your player.')},onTouchEnd:Z,onTouchCancel:Z}),Object(b.jsx)("div",{className:"game-guide",children:W})]})]}),Object(b.jsx)("img",{className:"btn-game-to-mint",src:"/img/btn_game_to_mint.png",alt:"Mint Button",onClick:function(){return V(R.MINT)}}),v?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:w,children:Object(b.jsx)(S,{metadata:r,selectNft:function(e){if(e){var t=e;y(Object(p.a)({},t)),X("Selected NFT: ".concat(t.name))}},setNftDetail:I,hideNftPanel:Object(o.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M("close"),e.next=3,new Promise((function(e){return setTimeout(e,200)}));case 3:x(!1);case 4:case"end":return e.stop()}}),e)})))})}),Object(b.jsx)(P,{metadata:F})]}):null]})},_=function(e){return"0x"+Number(e).toString(16)},A=function(e){var t="error";if(e&&e.message){console.error(e.message);var n=e.message.match(/(?:"message":)".*?"/g);t=n&&n.length>0&&""!==n[0]?n[0].replace('"message":',""):e.message}return t},E=n(309),F=n(307),I=n.n(F),D=n(308),B=n.n(D),W={walletlink:{package:I.a,options:{appName:"RPG 404",infuraId:"9ff9cd34b94a48d9bc6e3fc48f02673f"}},walletconnect:{package:E.a,options:{infuraId:"9ff9cd34b94a48d9bc6e3fc48f02673f"}}},G=new B.a({theme:"dark",providerOptions:W,disableInjectedProvider:!1}),L={"0x63564c40":{chainId:"0x63564c40",rpcUrls:["https://api.harmony.one"],chainName:"Harmony Mainnet",nativeCurrency:{name:"ONE",decimals:18,symbol:"ONE"},blockExplorerUrls:["https://explorer.harmony.one"],iconUrls:["https://harmonynews.one/wp-content/uploads/2019/11/slfdjs.png"]},"0xa4ec":{chainId:"0xa4ec",rpcUrls:["https://forno.celo.org"],chainName:"Celo Mainnet",nativeCurrency:{name:"CELO",decimals:18,symbol:"CELO"},blockExplorerUrl:["https://explorer.celo.org"],iconUrls:["https://celo.org/images/marketplace-icons/icon-celo-CELO-color-f.svg"]}},R=(n(579),{GAME:"game",MINT:"mint"});var U=function(){var e=Object(a.useContext)(m),t=e.contractAddress,n=e.contractAbi,r=e.openseaColletionName,i=e.isTestnet,s=Object(a.useState)(0),p=Object(u.a)(s,2),d=p[0],f=p[1],y=Object(a.useState)(0),g=Object(u.a)(y,2),v=g[0],x=g[1],h=Object(a.useState)(0),M=Object(u.a)(h,2),T=M[0],N=M[1],S=Object(a.useState)(0),P=Object(u.a)(S,2),E=P[0],F=P[1],I=Object(a.useState)(0),D=Object(u.a)(I,2),B=D[0],W=D[1],U=Object(a.useState)(0),q=Object(u.a)(U,2),H=q[0],Y=q[1],J=Object(a.useState)(R.GAME),Q=Object(u.a)(J,2),X=Q[0],V=Q[1],z=Object(a.useState)(),K=Object(u.a)(z,2),Z=K[0],$=K[1],ee=Object(a.useState)(),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)(),ie=Object(u.a)(re,2),se=ie[0],ce=ie[1],oe=Object(a.useState)(),ue=Object(u.a)(oe,2),le=ue[0],pe=ue[1],de=Object(a.useState)(""),me=Object(u.a)(de,2),be=me[0],fe=me[1],ye=function(e){console.log(e),fe("Status: ".concat(e))},ge=Object(a.useCallback)(Object(o.a)(Object(c.a)().mark((function e(){var t,n,a,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,G.connect();case 3:return t=e.sent,n=new l.a.providers.Web3Provider(t),e.next=7,n.listAccounts();case 7:return a=e.sent,e.next=10,n.getNetwork();case 10:return r=e.sent,$(t),ae(n),a&&pe(a[0]),ce(r.chainId),e.next=17,G.toggleModal();case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),ye(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])}))),[]),je=Object(a.useCallback)(function(){var e=Object(o.a)(Object(c.a)().mark((function e(t){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.provider.request({method:"wallet_switchEthereumChain",params:[{chainId:_(t)}]});case 3:e.next=16;break;case 5:if(e.prev=5,e.t0=e.catch(0),4902!==e.t0.code){e.next=16;break}return e.prev=8,e.next=11,ne.provider.request({method:"wallet_addEthereumChain",params:[L[_(t)]]});case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(8),ye(e.t1);case 16:case"end":return e.stop()}}),e,null,[[0,5],[8,13]])})));return function(t){return e.apply(this,arguments)}}(),[ne]),ve=Object(a.useCallback)(function(){var e=Object(o.a)(Object(c.a)().mark((function e(t,n){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Z){e.next=3;break}throw ye("Please connect wallet first."),new Error("Please connect wallet first.");case 3:t&&4!==se&&(n("Please change network to testnet"),je("4")),t||1===se||(n("Please change network to Ethereum Mainnet"),je("1"));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[se,Z,je]),xe=Object(a.useCallback)(Object(o.a)(Object(c.a)().mark((function e(){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.clearCachedProvider();case 2:pe(),ce();case 3:case"end":return e.stop()}}),e)}))),[]);Object(a.useEffect)((function(){if(null!==Z&&void 0!==Z&&Z.on){var e=function(){var e=arguments.length<=0?void 0:arguments[0];if(0===e.length)ye("No authorized account found");else if(e[0]!==le){var t=e[0];pe(t),ye("Connected (address: ".concat(t,")"))}},t=function(e){ce(e)},n=function(e){console.log("disconnect",e),xe()};return Z.on("accountsChanged",e),Z.on("chainChanged",t),Z.on("disconnect",n),function(){Z.removeListener&&(Z.removeListener("accountsChanged",e),Z.removeListener("chainChanged",t),Z.removeListener("disconnect",n))}}}),[le,xe,Z]);var he=Object(a.useMemo)((function(){return{contractAddress:t,contractAbi:n,openseaColletionName:r,isTestnet:i,parseEtherError:A,price:d,setPrice:f,maxSupply:v,setMaxSupply:x,maxFreeSupply:E,setMaxFreeSupply:F,totalSupply:T,setTotalSupply:N,maxPerTxDuringMint:B,setMaxPerTxDuringMint:W,maxPerAddressDuringFreeMint:H,setMaxPerAddressDuringFreeMint:Y,currPage:X,setCurrPage:V,provider:Z,library:ne,chainId:se,account:le,checkAndSwitchNetwork:ve,statusMsg:be,updateStatus:ye}}),[n,t,X,Z,ne,se,le,ve,i,E,H,B,v,r,d,be,T]);return Object(b.jsx)(m.Provider,{value:he,children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(j,{connectWallet:ge}),X===R.GAME&&Object(b.jsx)(C,{connectWallet:ge}),X===R.MINT&&Object(b.jsx)(k,{connectWallet:ge}),Object(b.jsx)(O,{}),Object(b.jsx)(w,{statusMsg:be})]})})};s.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(U,{})}))}},[[580,1,2]]]);
//# sourceMappingURL=main.c2a9127f.chunk.js.map