export default {
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
