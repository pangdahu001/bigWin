import web3ModalStore from './web3Modal'
import { tokenUsdtCont, BigWinCont } from '../../util/contract'
import { BigNumber } from 'bignumber.js'
import { ethers } from 'ethers'
import { Notification } from 'element-ui'
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
    allowance: new BigNumber(0),
    contractBalance: new BigNumber(0),
    NodeNumber: '',
    NodeLevel: '',
    inviteCode: '',
    beCode: '',
    userInfo: []
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
    setNodeNumber (state, NodeNumber) {
      state.NodeNumber = NodeNumber
    },
    setNodeLevel (state, NodeLevel) {
      state.NodeLevel = NodeLevel
    },
    setStateKey (state, { key, value }) {
      state[key] = value
    },
    setcontractBalance (state, contractBalance) {
      state.contractBalance = contractBalance
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
      // console.log(web3ModalStore.state.BigWinContSigner)
      commit('setBetToFalse')
      try {
        await web3ModalStore.state.BigWinContSigner?.estimateGas.deposit(
          new BigNumber(value).times(new BigNumber(10).pow(6)).toString(),
          state.inviteCode,
          state.beCode
        )
        await web3ModalStore.state.BigWinContSigner.functions
          .deposit(
            new BigNumber(value).times(new BigNumber(10).pow(6)).toString(),
            state.inviteCode,
            state.beCode
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
      } catch (error) {
        console.log(error)
        Notification.error(error.data.message || 'failed')
      }
    },
    async getPlayers ({ state }) {
      const players = await state.contract.methods.getPlayers().call()
      state.players = players
      return players
    },
    async getBalance ({ commit, rootState }) {
      console.log(tokenUsdtCont().web3)
      const contractBalance = await tokenUsdtCont().contract.functions.balanceOf(
        rootState.web3Modal.account
      )
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
      const contractAllowance = await state.usdtContract.functions.allowance(
        rootState.web3Modal.account,
        state.bigWinContract?.address
      )

      let newAllowance = new BigNumber(contractAllowance)

      console.log(newAllowance)
      commit('setAllowance', newAllowance)
    },
    async approve ({ state, commit }) {
      commit('setBetToFalse')
      // console.log(web3ModalStore.state.usdtContSigner.functions.approve)
      // let gas = await state.usdtContract.methods
      //   .approve(state.bigWinContract?.address, ethers.constants.MaxUint256)
      //   .estimateGas()web3ModalStore.state.BigWinContSigner
      let gas = await web3ModalStore.state.usdtContSigner?.estimateGas.approve(
        state.bigWinContract?.address,
        ethers.constants.MaxUint256
      )
      await web3ModalStore.state.usdtContSigner.functions
        .approve(state.bigWinContract?.address, ethers.constants.MaxUint256, {
          gasLimit: gas
        })
        .then(receipt => {
          console.log(receipt)
        })
    },
    async getContractBalance ({ commit, state }) {
      console.log(BigWinCont().web3)
      const contractBalance = await BigWinCont().web3.eth.getBalance(
        state.bigWinContract?.address
      )
      // console.log(contractBalance)
      // const balance = tokenUsdtCont().web3.utils.fromWei(
      //   contractBalance,
      //   'ether'
      // )
      console.log(contractBalance)
      commit('setcontractBalance', contractBalance)
    },
    async getuserByaddress ({ commit }, roundID) {
      console.log(web3ModalStore.state.account)
      console.log(roundID)

      let currentBigWin = BigWinCont(web3ModalStore.state.account)
      console.log(currentBigWin)
      const contractInfo = await currentBigWin.contract?.functions.getUserByAddress(
        web3ModalStore.state.account,
        roundID
      )
      // info[0] = userGlobal.id
      // info[1] = user.lineAmount
      // info[2] = user.freeAmount
      // info[3] = user.freezeAmount
      // info[4] = user.inviteAmonut
      // info[5] = user.bonusAmount
      // info[6] = user.lineLevel
      // info[7] = user.dayBonusAmount
      // info[8] = user.rewardIndex
      // info[9] = user.investTimes
      // info[10] = user.level

      console.log(contractInfo)
      commit('setStateKey', { key: 'userInfo', value: contractInfo.info })
      commit('setStateKey', { key: 'beCode', value: contractInfo.beCode })
      commit('setStateKey', {
        key: 'inviteCode',
        value: contractInfo.inviteCode
      })
    },
    getNodeNumber ({ commit, dispatch, state }) {
      if (state.NodeNumber) {
        return
      }
      let web3 = BigWinCont().web3
      setInterval(async () => {
        const NodeNumber = await web3.eth.getBlockNumber()
        // console.log(NodeNumber)
        commit('setNodeNumber', NodeNumber)
        dispatch('getNodeLevel')
      }, 1000)
    },
    async getNodeLevel ({ commit, state }) {
      const contractBalance = await state.bigWinContract.functions.getNodeLevel(
        state.NodeNumber
      )
      console.log(contractBalance)
      commit('setNodeLevel', contractBalance[0].toNumber())
    },
    async getBonus () {},
    async getRound ({ dispatch, state }) {
      const roundID = await state.bigWinContract.donnottouch()
      // console.log(roundID)
      dispatch('getuserByaddress', roundID[0])
    }
  },
  getters: {
    isLoading: state => state.loading,
    transactionData: state => state.receipt,
    isConfirmed: state => state.confirmed,
    getPlayers: state => state.players,
    getWinner: state => state.winner,
    getBalance: state => state.balance,
    getNodeNumber: state => state.NodeNumber,
    getNodeLevel: state => state.NodeLevel,
    allowanceVal: state => state.allowance,
    bigWinContract: state => state.bigWinContract,
    getBeCode: state => state.beCode,
    getInviteCode: state => state.inviteCode,
    getUserInfo: state => state.userInfo
  }
}

export default lotteryStore
