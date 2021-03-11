import { ChainId } from 'goswap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.ROPSTEN]: '0x53C43764255c17BD724F74c4eF150724AC50a3ed',
  [ChainId.KOVAN]: '0x2cc8688C5f75E365aaEEb4ea8D6a480405A48D2A',
  [ChainId.RINKEBY]: '0x42Ad527de7d4e9d9d011aC45B31D8551f8Fe9821',
  [ChainId.GÖRLI]: '0x77dCa2C955b15e9dE4dbBCf1246B4B85b651e50e',
  [ChainId.BIANMAIN]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
  [ChainId.BIANTEST]: '0xe348b292e8eA5FAB54340656f3D374b259D658b8',
  [ChainId.HECOMAIN]: '0x27F2494c8828f1326EEee1630FdA48EAF6dD042e',
  [ChainId.HECOTEST]: '0x935Bfe9AfaA2Be26049ea4EDE40A3A2243361F87',
  [ChainId.OKTEST]: '0x27F2494c8828f1326EEee1630FdA48EAF6dD042e'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
