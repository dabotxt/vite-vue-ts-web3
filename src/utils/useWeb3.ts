import Web3 from 'web3';
export function useWeb3() {
    async function getAccount(): Promise<any> {
        await isMetamask()
            .then((res:string) => {
                console.log(res)
                window.ethereum
                    .request({ method: 'eth_requestAccounts' })
                    .then((res: string[]) => {
                        console.log(res)
                    })
            })
            .catch((res:string) => {
                console.log(res)
            })
    }
    function isMetamask(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (typeof window.ethereum !== 'undefined') {
                resolve('MetaMask is installed!')
            } else {
                reject('MetaMask is uninstalled!')
            }
        })
    }
    return {
        getAccount
    }
}
