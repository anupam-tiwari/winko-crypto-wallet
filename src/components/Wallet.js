import React, { useState, useEffect } from 'react'
import {ethers} from 'ethers'
import Interactions from '../interactions/interactions'
import styles from './Wallet.module.css'
import winkoTokenAbi from '../contract/winkoTokenABI.json'


export default function Wallet() {
   // gene cahe chain address
    const contractAddress = "0x329BEEeD3277d359857b710244719055bA5b0455"; 

    const [tokenName, setTokenName] = useState("Token");
    const [connectButtonText, setConnButtonText] = useState("Connect Wallet");
    const [errorMessage, setErrorMsg] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [balance, setBalance] = useState(null);

    const [provider, setProvider]  = useState(null); 
    const [signer, setSigner] = useState(null); 
    const [contract, setContract] = useState(null);

    const connectWalletHandler = () => {
        if(window.ethereum && window.ethereum.isMetaMask){
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then(result =>{
              accountChangedHandler(result[0]); 
              setConnButtonText("wallet Connected");

            })
            .catch(error => {
              setErrorMsg()
            })
        }
        else{
          console.log("need to install metamask");
          errorMessage("Please Install Metamask");
        }
    }

    const accountChangedHandler = (newAddress) => {
      setDefaultAccount(newAddress); 
      updateEthers();
    }
    
    const updateEthers = () => {
      let tempProvider = new ethers.providers.Web3Provider(window.ethereum); 

      let tempSigner = tempProvider.getSigner(); 

      let tempContract = new ethers.Contract(contractAddress, winkoTokenAbi, tempSigner)

      setProvider(tempProvider)
      setSigner(tempSigner)
      setContract(tempContract)
    }

    useEffect(() => {
      if(contract != null){
        updateBalance(); 
        updateTokenName(); 
      }
    }, [contract])

    const updateBalance = async () =>{
      let balanceBig = await contract.balanceOf(defaultAccount);
      let balanceNumber = balanceBig.toNumber(); 

      let decimals = await contract.decimals(); 

      let tokenBalance = balanceNumber/Math.pow(10,decimals);

      setBalance(tokenBalance);
    }

    const updateTokenName = async () => {
      setTokenName(await contract.name()); 

    }
    

  return (

    <div>
        <h2>{tokenName + "Wallet"}</h2>
        <button className={styles.button6} onClick={connectWalletHandler}>{connectButtonText}</button>

        <div className={styles.walletCard}>
            <div>
              <h3>Address: {defaultAccount}</h3>
            </div>
            <div>
              <h3>{tokenName} Balance: {balance}</h3>
            </div>
            {errorMessage}
        </div>
        <Interactions contract={contract}></Interactions>
    </div>
  )
}
