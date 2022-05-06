import { BigNumber } from 'bignumber.js'
// import web3 from './web3'
import abi from './index.js'
const MAX_INT =
  '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'

// const ContractBigWinAddr = '0x24fa984Ec7C8c21DF49B39d5e9B2A8556f87bCd8'
// const ContractUSDTAddr = '0x03134eD1A394bD80575933F91b20467a3fd9a6Af'

let bigWinCont, tokenUsdtCont

export const newBigWinCont = web3 => {
  bigWinCont = web3.eth.contract(abi.bigWin.abi).at(abi.bigWin.address)
  console.log(bigWinCont)
}
export const newTokenUsdtCont = web3 => {
  tokenUsdtCont = web3.eth.contract(abi.tokenUsdt.abi).at(abi.tokenUsdt.address)
  console.log(tokenUsdtCont)
}

export const approve = (account, callback) => {
  return tokenUsdtCont.approve(bigWinCont.address, MAX_INT, function (
    err,
    transactionHash
  ) {
    if (!err) {
      console.log(transactionHash)
      callback(transactionHash)
      return transactionHash
    } else {
      console.log(err)
    }
  })
}
export const getAllowance = (account, callback) => {
  try {
    tokenUsdtCont.allowance(account, bigWinCont.address, (err, res) => {
      callback(res)
    })
  } catch (e) {
    console.log(e)
    callback('0')
  }
}
export const deposit = (num, callback) => {
  // bigWinCont.usdtAddr((err, res) => {
  //   console.log(err, res)
  // })
  return bigWinCont.deposit(
    new BigNumber(num).times(new BigNumber(10).pow(6)).toString(),
    'abcd12',
    'abcdef',
    (err, transactionHash) => {
      if (!err) {
        console.log(transactionHash)
        callback(transactionHash)
        return transactionHash
      } else {
        console.log(err)
      }
    }
  )
}

export const getBalance = (account, callback) => {
  return tokenUsdtCont.balanceOf(account, (err, res) => {
    callback(res)
  })
}
