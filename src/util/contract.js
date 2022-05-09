import Web3 from 'web3'
import abi from '../abi/index.js'
import { Contract } from '@ethersproject/contracts'
import { ethers } from 'ethers'
import { getLibrary } from '@/util/web3'
// function getSigner (library, account) {
//   return library.getSigner(account).connectUnchecked()
// }

// function getProviderOrSigner (account, provider) {
//   return account ? new Wallet(account, provider) : provider
// }

export const BigWinCont = account => {
  const web3 = new Web3(window.ethereum)
  // const contract = new web3.eth.Contract(abi.bigWin.abi, abi.bigWin.address)

  const provider = web3.currentProvider
    ? new ethers.providers.Web3Provider(web3.currentProvider)
    : getLibrary()
  console.log(provider)
  const contract = new Contract(
    abi.bigWin.address,
    abi.bigWin.abi,
    account ? provider.getSigner(account).connectUnchecked() : provider
  )

  return { contract, web3 }
}

export const tokenUsdtCont = account => {
  const web3 = new Web3(window.ethereum)
  // const contract = new web3.eth.Contract(
  //   abi.tokenUsdt.abi,
  //   abi.tokenUsdt.address
  // )
  const provider = web3.currentProvider
    ? new ethers.providers.Web3Provider(web3.currentProvider)
    : getLibrary()

  const contract = new Contract(
    abi.tokenUsdt.address,
    abi.tokenUsdt.abi,
    account ? provider.getSigner(account).connectUnchecked() : provider
  )

  return { contract, web3 }
}
