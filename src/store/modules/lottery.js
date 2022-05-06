import web3ModalStore from './web3Modal'
import { tokenUsdtCont, BigWinCont } from '../../util/contract'
import { BigNumber } from 'bignumber.js'
import { ethers } from 'ethers'

const lotteryStore = {
  state: {
    usdtContract: tokenUsdtCont().contract,
    bigWinContract: BigWinCont().contract,
    transaction: '',
    confirmed: false,
    loading: false,
    receipt: '',
    players: [],
    winner: '',
    balance: 0,
    oneTimeFunction: false,
    allowance: new BigNumber(0)
  },
  mutations: {
    setContract (state, contract) {
      state.contract = contract
    },
    setWinner (state, winner) {
      state.winner = winner
    },
    resetLottery (state) {
      state.confirmed = false
      state.loading = false
      state.receipt = ''
      state.transaction = ''
    },
    setBalance (state, balance) {
      state.balance = balance
    },
    setAllowance (state, allowance) {
      state.allowance = allowance
    },
    addPlayer (state, player) {
      state.players = [...state.players, player]
    },
    setBetToFalse (state) {
      state.oneTimeFunction = false
    }
  },
  actions: {
    async deposit ({ state, commit }, value) {
      commit('setBetToFalse')
      await state.bigWinContract.methods
        .deposit(
          new BigNumber(value).times(new BigNumber(10).pow(6)).toString(),
          'abcd12',
          'abcdef'
        )
        .send(
          {
            from: web3ModalStore.state.account
          },
          function (err, transactionHash) {
            if (err) {
              console.log(err, transactionHash)
              state.loading = false
            }
            state.loading = true
          }
        )
        .on('confirmation', function (confirmationNumber, receipt) {
          if (confirmationNumber > 1 && state.oneTimeFunction == false) {
            state.oneTimeFunction = true // This function must be executed only once.
            state.loading = false
            state.confirmed = true
            state.receipt = receipt
            commit('addPlayer', receipt.from)
            const balance = (Number(state.balance) + 0.1).toFixed(1)
            commit('setBalance', balance)
          }
        })
    },
    async getPlayers ({ state }) {
      const players = await state.contract.methods.getPlayers().call()
      state.players = players
      return players
    },
    async getBalance ({ commit, rootState }) {
      console.log(tokenUsdtCont().web3)
      const contractBalance = await tokenUsdtCont()
        .contract.methods.balanceOf(rootState.web3Modal.account)
        .call()
      // console.log(contractBalance)
      // const balance = tokenUsdtCont().web3.utils.fromWei(
      //   contractBalance,
      //   'ether'
      // )
      let newBalance = new BigNumber(contractBalance)
        .div(new BigNumber(10).pow(6))
        .toString()

      commit('setBalance', newBalance)
    },
    async pickWinner ({ state, commit }) {
      commit('setBetToFalse')
      await state.contract.methods
        .pickWinner()
        .send(
          {
            from: web3ModalStore.state.account
          },
          function (err, transactionHash) {
            if (err) console.log(err, transactionHash)
          }
        )
        .on('confirmation', function (confirmationNumber, receipt) {
          console.log(receipt)
          if (confirmationNumber > 0 && state.oneTimeFunction == false) {
            commit('setWinner', receipt)
          }
        })
    },
    async getAllowance ({ state, commit, rootState }) {
      const contractAllowance = await state.usdtContract.methods
        .allowance(
          rootState.web3Modal.account,
          state.bigWinContract.options.address
        )
        .call()
      let newAllowance = new BigNumber(contractAllowance)

      console.log(newAllowance)
      commit('setAllowance', newAllowance)
    },
    async approve ({ state, commit }) {
      commit('setBetToFalse')
      await state.usdtContract.methods
        .approve(
          state.bigWinContract.options.address,
          ethers.constants.MaxUint256
        )
        .send(
          {
            from: web3ModalStore.state.account
          },
          function (err, transactionHash) {
            if (err) console.log(err, transactionHash)
          }
        )
        .on('confirmation', function (confirmationNumber, receipt) {
          console.log(receipt)
          if (confirmationNumber > 0 && state.oneTimeFunction == false) {
            commit('setWinner', receipt)
          }
        })
    }
  },
  getters: {
    isLoading: state => state.loading,
    transactionData: state => state.receipt,
    isConfirmed: state => state.confirmed,
    getPlayers: state => state.players,
    getWinner: state => state.winner,
    getBalance: state => state.balance,
    allowanceVal: state => state.allowance
  }
}

export default lotteryStore
