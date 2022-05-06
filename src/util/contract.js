import Web3 from 'web3'
import abi from '../abi/index.js'

export const BigWinCont = () => {
  const web3 = new Web3(window.ethereum)
  const contract = new web3.eth.Contract(abi.bigWin.abi, abi.bigWin.address)

  return { contract, web3 }
}

export const tokenUsdtCont = () => {
  const web3 = new Web3(window.ethereum)
  const contract = new web3.eth.Contract(
    abi.tokenUsdt.abi,
    abi.tokenUsdt.address
  )

  return { contract, web3 }
}
