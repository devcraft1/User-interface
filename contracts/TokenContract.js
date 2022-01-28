export const TokenABI = [
  "function createAlbum(string calldata RECORD_ID,uint256 _numberOfDownloadTokens,uint256 _numberOfRoyaltyTokens,uint256 _downloadTokenPrice,uint256 _royaltyTokenPrice) external payable",
];

export const TokenAddress = "0x7595656ba326543413e5288e6aAef08b60699A17";

// export const TokenABI = [
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "initialRoyaltiesReceiver",
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
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "string",
//         name: "record_ID",
//         type: "string",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "masterNFTID",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "downloadTokensID",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "royaltyTokenID",
//         type: "uint256",
//       },
//     ],
//     name: "AlbumCreated",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "bool",
//         name: "approved",
//         type: "bool",
//       },
//     ],
//     name: "ApprovalForAll",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "owner",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "dateCreated",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "downloadTokenID",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "downloadTokenPrice",
//         type: "uint256",
//       },
//     ],
//     name: "DownloadTokenPrice",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "previousOwner",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "OwnershipTransferred",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "albumID",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "dateApproved",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//     ],
//     name: "TokensForSale",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//       {
//         indexed: false,
//         internalType: "uint256[]",
//         name: "values",
//         type: "uint256[]",
//       },
//     ],
//     name: "TransferBatch",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: true,
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         indexed: true,
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "value",
//         type: "uint256",
//       },
//     ],
//     name: "TransferSingle",
//     type: "event",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "string",
//         name: "value",
//         type: "string",
//       },
//       {
//         indexed: true,
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//     ],
//     name: "URI",
//     type: "event",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//     ],
//     name: "balanceOf",
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
//   {
//     inputs: [
//       {
//         internalType: "address[]",
//         name: "accounts",
//         type: "address[]",
//       },
//       {
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//     ],
//     name: "balanceOfBatch",
//     outputs: [
//       {
//         internalType: "uint256[]",
//         name: "",
//         type: "uint256[]",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "record_ID",
//         type: "string",
//       },
//       {
//         internalType: "uint256",
//         name: "_numberOfDownloadTokens",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_numberOfRoyaltyTokens",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_downloadTokenPrice",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_royaltyTokenPrice",
//         type: "uint256",
//       },
//     ],
//     name: "createAlbum",
//     outputs: [],
//     stateMutability: "payable",
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
//     name: "getApproved",
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
//         internalType: "address",
//         name: "account",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//     ],
//     name: "isApprovedForAll",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "owner",
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
//         name: "tokenId",
//         type: "uint256",
//       },
//     ],
//     name: "ownerOf",
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
//     inputs: [],
//     name: "renounceOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "royaltiesReceiver",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_tokenId",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "_salePrice",
//         type: "uint256",
//       },
//     ],
//     name: "royaltyInfo",
//     outputs: [
//       {
//         internalType: "address",
//         name: "receiver",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "royaltyAmount",
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
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256[]",
//         name: "ids",
//         type: "uint256[]",
//       },
//       {
//         internalType: "uint256[]",
//         name: "amounts",
//         type: "uint256[]",
//       },
//       {
//         internalType: "bytes",
//         name: "data",
//         type: "bytes",
//       },
//     ],
//     name: "safeBatchTransferFrom",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "from",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "to",
//         type: "address",
//       },
//       {
//         internalType: "uint256",
//         name: "id",
//         type: "uint256",
//       },
//       {
//         internalType: "uint256",
//         name: "amount",
//         type: "uint256",
//       },
//       {
//         internalType: "bytes",
//         name: "data",
//         type: "bytes",
//       },
//     ],
//     name: "safeTransferFrom",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "operator",
//         type: "address",
//       },
//       {
//         internalType: "bool",
//         name: "approved",
//         type: "bool",
//       },
//     ],
//     name: "setApprovalForAll",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "bytes4",
//         name: "interfaceId",
//         type: "bytes4",
//       },
//     ],
//     name: "supportsInterface",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "newOwner",
//         type: "address",
//       },
//     ],
//     name: "transferOwnership",
//     outputs: [],
//     stateMutability: "nonpayable",
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
//     name: "uri",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
// ];

// export const TokenAddress = "0x7595656ba326543413e5288e6aAef08b60699A17";

// const tokenDetails = { TokenABI, TokenAddress };

// export default tokenDetails;
