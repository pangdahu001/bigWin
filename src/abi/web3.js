import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { newBigWinCont, newTokenUsdtCont } from './send.js'
const providerOptions = {
  /* See Provider Options Section */
}

const web3Modal = new Web3Modal({
  network: 'mainnet', // optional
  cacheProvider: true, // optional
  providerOptions // required
})

// web3.eth.defaultAccount = web3.eth.accounts[0]

export async function initWeb3Account (callback) {
  let provider, web3, account
  provider = await web3Modal.connect()
  await web3Modal.updateTheme('dark')
  web3 = new Web3(provider)
  web3.eth.defaultAccount = web3.eth.accounts[0]
  account = web3.eth.accounts[0]
  newBigWinCont(web3)
  newTokenUsdtCont(web3)
  callback && callback(provider, web3, account)
}
