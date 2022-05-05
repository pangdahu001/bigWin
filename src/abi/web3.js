import Web3 from 'web3'

const web3Provider = window.web3 ? window.web3.currentProvider : null

const web3 = web3Provider
  ? new Web3(web3Provider)
  : new Web3(
      new Web3.providers.HttpProvider(
        'https://testnet.bscscan.com/address/0x24fa984Ec7C8c21DF49B39d5e9B2A8556f87bCd8'
      )
    )

web3.eth.defaultAccount = web3.eth.accounts[0]

export async function initWeb3Account (callback) {
  let provider, web3, account
  if (window.ethereum) {
    provider = window.ethereum
    try {
      await window.ethereum.enable()
    } catch (error) {
      //   console.log("User denied account access");
    }
  } else if (window.web3) {
    provider = window.web3.currentProvider
  } else {
    provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545')
  }
  web3 = new Web3(provider)
  web3.eth.defaultAccount = web3.eth.accounts[0]
  account = web3.eth.accounts[0]
  callback && callback(provider, web3, account)
}

export default web3
