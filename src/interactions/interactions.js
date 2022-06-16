import React, { useState } from 'react'
import styles from "../components/Wallet.module.css"
import { ethers } from 'ethers'

export default function Interactions(props) {
  
  const [transferHash, setTransferHash] = useState(null)
  
  const transferHandler = async(e) => {
    e.preventDefault(); 
    let transferAmount = e.target.sendAmount.value; 
    let recieverAddress = e.target.recieverAddress.value; 

    let txt = await props.contract.transfer(recieverAddress, transferAmount);
    setTransferHash(txt.hash)
  }
  return (
    <div className={styles.interactionsCard}>
      <form onSubmit={transferHandler}>
        <h3>Make transaction</h3>
        <p> Reciever Address</p>
        <input type="text" id="recieverAddress" className={styles.addressInput}></input>

        <p>Send Amount</p>
        <input type='number' id='sendAmount' min='0' step='1'></input>
        
        <button type="submit" className={styles.button6}>Send</button>
        <div>
          {transferHash}
        </div>
      </form>
    </div>
  )
}
