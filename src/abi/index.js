export default {
  // saleClockAuction: {
  //   address: '0xDE33cc4D5be256763d99bAaF5f1eF61196352127',
  //   abi: [
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_tokenId', type: 'uint256' },
  //         { name: '_startingPrice', type: 'uint256' },
  //         { name: '_endingPrice', type: 'uint256' },
  //         { name: '_duration', type: 'uint256' },
  //         { name: '_seller', type: 'address' }
  //       ],
  //       name: 'createAuction',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [],
  //       name: 'unpause',
  //       outputs: [{ name: '', type: 'bool' }],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_tokenId', type: 'uint256' }],
  //       name: 'bid',
  //       outputs: [],
  //       payable: true,
  //       stateMutability: 'payable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '', type: 'uint256' }],
  //       name: 'lastGen0SalePrices',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'paused',
  //       outputs: [{ name: '', type: 'bool' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [],
  //       name: 'withdrawBalance',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '_tokenId', type: 'uint256' }],
  //       name: 'getAuction',
  //       outputs: [
  //         { name: 'seller', type: 'address' },
  //         { name: 'startingPrice', type: 'uint256' },
  //         { name: 'endingPrice', type: 'uint256' },
  //         { name: 'duration', type: 'uint256' },
  //         { name: 'startedAt', type: 'uint256' }
  //       ],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'ownerCut',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [],
  //       name: 'pause',
  //       outputs: [{ name: '', type: 'bool' }],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'isSaleClockAuction',
  //       outputs: [{ name: '', type: 'bool' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_tokenId', type: 'uint256' }],
  //       name: 'cancelAuctionWhenPaused',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'gen0SaleCount',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'owner',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_tokenId', type: 'uint256' }],
  //       name: 'cancelAuction',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '_tokenId', type: 'uint256' }],
  //       name: 'getCurrentPrice',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'nonFungibleContract',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'averageGen0SalePrice',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: 'newOwner', type: 'address' }],
  //       name: 'transferOwnership',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       inputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'constructor'
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         { indexed: false, name: 'tokenId', type: 'uint256' },
  //         { indexed: false, name: 'startingPrice', type: 'uint256' },
  //         { indexed: false, name: 'endingPrice', type: 'uint256' },
  //         { indexed: false, name: 'duration', type: 'uint256' }
  //       ],
  //       name: 'AuctionCreated',
  //       type: 'event'
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         { indexed: false, name: 'tokenId', type: 'uint256' },
  //         { indexed: false, name: 'totalPrice', type: 'uint256' },
  //         { indexed: false, name: 'winner', type: 'address' }
  //       ],
  //       name: 'AuctionSuccessful',
  //       type: 'event'
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [{ indexed: false, name: 'tokenId', type: 'uint256' }],
  //       name: 'AuctionCancelled',
  //       type: 'event'
  //     },
  //     { anonymous: false, inputs: [], name: 'Pause', type: 'event' },
  //     { anonymous: false, inputs: [], name: 'Unpause', type: 'event' }
  //   ]
  // },
  // kittyCore: {
  //   address: '0x34d8bC4655937395CCE625FC8971419e7F975587',
  //   abi: [
  //     {
  //       constant: true,
  //       inputs: [{ name: '_interfaceID', type: 'bytes4' }],
  //       name: 'supportsInterface',
  //       outputs: [{ name: '', type: 'bool' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'cfoAddress',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [
  //         { name: '_tokenId', type: 'uint256' },
  //         { name: '_preferredTransport', type: 'string' }
  //       ],
  //       name: 'tokenMetadata',
  //       outputs: [{ name: 'infoUrl', type: 'string' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'promoCreatedCount',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'name',
  //       outputs: [{ name: '', type: 'string' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_to', type: 'address' },
  //         { name: '_tokenId', type: 'uint256' }
  //       ],
  //       name: 'approve',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'ceoAddress',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'GEN0_STARTING_PRICE',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_address', type: 'address' }],
  //       name: 'setSiringAuctionAddress',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'totalSupply',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'pregnantKitties',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '_kittyId', type: 'uint256' }],
  //       name: 'isPregnant',
  //       outputs: [{ name: '', type: 'bool' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'GEN0_AUCTION_DURATION',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'siringAuction',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_from', type: 'address' },
  //         { name: '_to', type: 'address' },
  //         { name: '_tokenId', type: 'uint256' }
  //       ],
  //       name: 'transferFrom',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_address', type: 'address' }],
  //       name: 'setGeneScienceAddress',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_newCEO', type: 'address' }],
  //       name: 'setCEO',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_newCOO', type: 'address' }],
  //       name: 'setCOO',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_kittyId', type: 'uint256' },
  //         { name: '_startingPrice', type: 'uint256' },
  //         { name: '_endingPrice', type: 'uint256' },
  //         { name: '_duration', type: 'uint256' }
  //       ],
  //       name: 'createSaleAuction',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [],
  //       name: 'unpause',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '', type: 'uint256' }],
  //       name: 'sireAllowedToAddress',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [
  //         { name: '_matronId', type: 'uint256' },
  //         { name: '_sireId', type: 'uint256' }
  //       ],
  //       name: 'canBreedWith',
  //       outputs: [{ name: '', type: 'bool' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '', type: 'uint256' }],
  //       name: 'kittyIndexToApproved',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_kittyId', type: 'uint256' },
  //         { name: '_startingPrice', type: 'uint256' },
  //         { name: '_endingPrice', type: 'uint256' },
  //         { name: '_duration', type: 'uint256' }
  //       ],
  //       name: 'createSiringAuction',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: 'val', type: 'uint256' }],
  //       name: 'setAutoBirthFee',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_addr', type: 'address' },
  //         { name: '_sireId', type: 'uint256' }
  //       ],
  //       name: 'approveSiring',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_newCFO', type: 'address' }],
  //       name: 'setCFO',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_genes', type: 'uint256' },
  //         { name: '_owner', type: 'address' }
  //       ],
  //       name: 'createPromoKitty',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: 'secs', type: 'uint256' }],
  //       name: 'setSecondsPerBlock',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'paused',
  //       outputs: [{ name: '', type: 'bool' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [],
  //       name: 'withdrawBalance',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '_tokenId', type: 'uint256' }],
  //       name: 'ownerOf',
  //       outputs: [{ name: 'owner', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'GEN0_CREATION_LIMIT',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'newContractAddress',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_address', type: 'address' }],
  //       name: 'setSaleAuctionAddress',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '_owner', type: 'address' }],
  //       name: 'balanceOf',
  //       outputs: [{ name: 'count', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_v2Address', type: 'address' }],
  //       name: 'setNewAddress',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'secondsPerBlock',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [],
  //       name: 'pause',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '_owner', type: 'address' }],
  //       name: 'tokensOfOwner',
  //       outputs: [{ name: 'ownerTokens', type: 'uint256[]' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_matronId', type: 'uint256' }],
  //       name: 'giveBirth',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [],
  //       name: 'withdrawAuctionBalances',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'symbol',
  //       outputs: [{ name: '', type: 'string' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '', type: 'uint256' }],
  //       name: 'cooldowns',
  //       outputs: [{ name: '', type: 'uint32' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '', type: 'uint256' }],
  //       name: 'kittyIndexToOwner',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_to', type: 'address' },
  //         { name: '_tokenId', type: 'uint256' }
  //       ],
  //       name: 'transfer',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'cooAddress',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'autoBirthFee',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'erc721Metadata',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_genes', type: 'uint256' }],
  //       name: 'createGen0Auction',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '_kittyId', type: 'uint256' }],
  //       name: 'isReadyToBreed',
  //       outputs: [{ name: '', type: 'bool' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'PROMO_CREATION_LIMIT',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [{ name: '_contractAddress', type: 'address' }],
  //       name: 'setMetadataAddress',
  //       outputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'saleAuction',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [{ name: '_id', type: 'uint256' }],
  //       name: 'getKitty',
  //       outputs: [
  //         { name: 'isGestating', type: 'bool' },
  //         { name: 'isReady', type: 'bool' },
  //         { name: 'cooldownIndex', type: 'uint256' },
  //         { name: 'nextActionAt', type: 'uint256' },
  //         { name: 'siringWithId', type: 'uint256' },
  //         { name: 'birthTime', type: 'uint256' },
  //         { name: 'matronId', type: 'uint256' },
  //         { name: 'sireId', type: 'uint256' },
  //         { name: 'generation', type: 'uint256' },
  //         { name: 'genes', type: 'uint256' }
  //       ],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_sireId', type: 'uint256' },
  //         { name: '_matronId', type: 'uint256' }
  //       ],
  //       name: 'bidOnSiringAuction',
  //       outputs: [],
  //       payable: true,
  //       stateMutability: 'payable',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'gen0CreatedCount',
  //       outputs: [{ name: '', type: 'uint256' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: true,
  //       inputs: [],
  //       name: 'geneScience',
  //       outputs: [{ name: '', type: 'address' }],
  //       payable: false,
  //       stateMutability: 'view',
  //       type: 'function'
  //     },
  //     {
  //       constant: false,
  //       inputs: [
  //         { name: '_matronId', type: 'uint256' },
  //         { name: '_sireId', type: 'uint256' }
  //       ],
  //       name: 'breedWithAuto',
  //       outputs: [],
  //       payable: true,
  //       stateMutability: 'payable',
  //       type: 'function'
  //     },
  //     {
  //       inputs: [],
  //       payable: false,
  //       stateMutability: 'nonpayable',
  //       type: 'constructor'
  //     },
  //     { payable: true, stateMutability: 'payable', type: 'fallback' },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         { indexed: false, name: 'owner', type: 'address' },
  //         { indexed: false, name: 'matronId', type: 'uint256' },
  //         { indexed: false, name: 'sireId', type: 'uint256' },
  //         { indexed: false, name: 'cooldownEndBlock', type: 'uint256' }
  //       ],
  //       name: 'Pregnant',
  //       type: 'event'
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         { indexed: false, name: 'from', type: 'address' },
  //         { indexed: false, name: 'to', type: 'address' },
  //         { indexed: false, name: 'tokenId', type: 'uint256' }
  //       ],
  //       name: 'Transfer',
  //       type: 'event'
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         { indexed: false, name: 'owner', type: 'address' },
  //         { indexed: false, name: 'approved', type: 'address' },
  //         { indexed: false, name: 'tokenId', type: 'uint256' }
  //       ],
  //       name: 'Approval',
  //       type: 'event'
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [
  //         { indexed: false, name: 'owner', type: 'address' },
  //         { indexed: false, name: 'kittyId', type: 'uint256' },
  //         { indexed: false, name: 'matronId', type: 'uint256' },
  //         { indexed: false, name: 'sireId', type: 'uint256' },
  //         { indexed: false, name: 'genes', type: 'uint256' }
  //       ],
  //       name: 'Birth',
  //       type: 'event'
  //     },
  //     {
  //       anonymous: false,
  //       inputs: [{ indexed: false, name: 'newContract', type: 'address' }],
  //       name: 'ContractUpgrade',
  //       type: 'event'
  //     }
  //   ]
  // },
  bigWin: {
    address: '0x24fa984ec7c8c21df49b39d5e9b2a8556f87bcd8',
    abi: [
      {
        constant: true,
        inputs: [],
        name: 'usdtAddr',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'value', type: 'uint256' }],
        name: 'getNodeLevel',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: 'level', type: 'uint256' },
          { name: 'times', type: 'uint256' }
        ],
        name: 'getRecommendScaleByLevelAndTim',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'pure',
        type: 'function'
      },
      {
        constant: false,
        inputs: [],
        name: 'stopImport',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: 'addr', type: 'address' },
          { name: 'roundId', type: 'uint256' }
        ],
        name: 'getUserByAddress',
        outputs: [
          { name: 'info', type: 'uint256[14]' },
          { name: 'inviteCode', type: 'string' },
          { name: 'beCode', type: 'string' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: 'index', type: 'uint256' },
          { name: 'rouId', type: 'uint256' }
        ],
        name: 'getLineUserId',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'time', type: 'uint256' }],
        name: 'verydangerous',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'code', type: 'string' }],
        name: 'isUsed',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'addr', type: 'address' }],
        name: 'setUSDTAddr',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'account', type: 'address' }],
        name: 'removeWhitelistAdmin',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'account', type: 'address' }],
        name: 'addWhitelistAdmin',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [],
        name: 'endRound',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'start', type: 'uint256' },
          { name: 'end', type: 'uint256' }
        ],
        name: 'christmas',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'donnottouch',
        outputs: [
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' },
          { name: '', type: 'uint256' }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'value', type: 'uint256' }],
        name: 'getLevel',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: '_str', type: 'string' },
          { name: 'str', type: 'string' }
        ],
        name: 'compareStr',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'pure',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'id', type: 'uint256' }],
        name: 'getUserAddressById',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'isOwner',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'addr', type: 'address' },
          { name: 'status', type: 'uint256' }
        ],
        name: 'actUserStatus',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'amt', type: 'uint256' },
          { name: 'inviteCode', type: 'string' },
          { name: 'beCode', type: 'string' }
        ],
        name: 'deposit',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'line', type: 'uint256' }],
        name: 'updateLine',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'code', type: 'string' }],
        name: 'getUserAddressByCode',
        outputs: [{ name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'start', type: 'uint256' },
          { name: 'end', type: 'uint256' },
          { name: 'isUser', type: 'uint256' }
        ],
        name: 'helloworld',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'usdtbalance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'account', type: 'address' }],
        name: 'isWhitelistAdmin',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'bonusLi', type: 'uint256' },
          { name: 'sendLi', type: 'uint256' },
          { name: 'withdrawLi', type: 'uint256' }
        ],
        name: 'actAllLimit',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'addr', type: 'address' },
          { name: 'inviteCode', type: 'string' },
          { name: 'beCode', type: 'string' }
        ],
        name: 'importGlobal',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'level', type: 'uint256' }],
        name: 'getFireScByLevel',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'pure',
        type: 'function'
      },
      {
        constant: false,
        inputs: [],
        name: 'happy',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'donnotimitate',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [{ name: 'newOwner', type: 'address' }],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'level', type: 'uint256' }],
        name: 'getScByLevel',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'pure',
        type: 'function'
      },
      {
        inputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      { payable: true, stateMutability: 'payable', type: 'fallback' }
    ]
  },
  tokenUsdt: {
    address: '0x03134eD1A394bD80575933F91b20467a3fd9a6Af',
    abi: [
      {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'spender', type: 'address' },
          { name: 'amount', type: 'uint256' }
        ],
        name: 'approve',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'totalSupply',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'sender', type: 'address' },
          { name: 'recipient', type: 'address' },
          { name: 'amount', type: 'uint256' }
        ],
        name: 'transferFrom',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'decimals',
        outputs: [{ name: '', type: 'uint8' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'spender', type: 'address' },
          { name: 'addedValue', type: 'uint256' }
        ],
        name: 'increaseAllowance',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [{ name: 'account', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: true,
        inputs: [],
        name: 'symbol',
        outputs: [{ name: '', type: 'string' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'spender', type: 'address' },
          { name: 'subtractedValue', type: 'uint256' }
        ],
        name: 'decreaseAllowance',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: false,
        inputs: [
          { name: 'recipient', type: 'address' },
          { name: 'amount', type: 'uint256' }
        ],
        name: 'transfer',
        outputs: [{ name: '', type: 'bool' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
      },
      {
        constant: true,
        inputs: [
          { name: 'owner', type: 'address' },
          { name: 'spender', type: 'address' }
        ],
        name: 'allowance',
        outputs: [{ name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function'
      },
      {
        inputs: [
          { name: 'name_', type: 'string' },
          { name: 'symbol_', type: 'string' },
          { name: 'totalSupply_', type: 'uint256' },
          { name: 'holder_', type: 'address' },
          { name: 'decimals_', type: 'uint8' }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'from', type: 'address' },
          { indexed: true, name: 'to', type: 'address' },
          { indexed: false, name: 'value', type: 'uint256' }
        ],
        name: 'Transfer',
        type: 'event'
      },
      {
        anonymous: false,
        inputs: [
          { indexed: true, name: 'owner', type: 'address' },
          { indexed: true, name: 'spender', type: 'address' },
          { indexed: false, name: 'value', type: 'uint256' }
        ],
        name: 'Approval',
        type: 'event'
      }
    ]
  }
}
