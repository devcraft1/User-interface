export const MarketplaceABI = [
  "function listToken(address contractAddress, uint256 tokenId, uint256 amount, uint256 price) public nonReentrant",
  "function purchaseToken(uint256 listingId, uint256 amount) public payable nonReentrant",
];

export const marketplaceAddress = "0x53B499CE8191ddDcE9b1F4Bc07a404c06f9B1bE7";

//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         internalType: "bytes",
//         name: "data",
//         type: "bytes",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "acceptBuyOffer",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//     ],
//     name: "makeBuyOffer",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "tokenContractAddress",
//         type: "address",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "buyer",
//         type: "address",
//       },
//     ],
//     name: "BuyOfferWithdrawn",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "minPrice",
//         type: "uint256",
//       },
//     ],
//     name: "makeSellOffer",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "buyer",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "NewBuyOffer",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "seller",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "NewSellOffer",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         internalType: "bytes",
//         name: "data",
//         type: "bytes",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "purchase",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "RoyaltiesPaid",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "seller",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "buyer",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "Sale",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "address",
//         name: "seller",
//         type: "address",
//       },
//     ],
//     name: "SellOfferWithdrawn",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//     ],
//     name: "withdrawBuyOffer",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "tokenId",
//         type: "uint256",
//       },
//     ],
//     name: "withdrawSellOffer",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "_tokenContractAddress",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "activeBuyOffers",
//     outputs: [
//       {
//         internalType: "address",
//         name: "buyer",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "price",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "createTime",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "activeSellOffers",
//     outputs: [
//       {
//         internalType: "address",
//         name: "seller",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "minPrice",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     name: "buyOffersEscrow",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];

// const marketplaceDetails = { MarketplaceABI, marketplaceAddress };

// export default marketplaceDetails;
