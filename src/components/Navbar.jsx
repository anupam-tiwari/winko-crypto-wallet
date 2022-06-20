import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiOutlineDown } from 'react-icons/ai'
import { HiOutlineDotsVertical } from 'react-icons/hi'
import ethLogo from '../assets/eth.png'
import { useState } from 'react'

const style ={
    wapper: `p-4  w-screen flex justify-between items-center`, 
    headerLogo: `flex w-1/4 items-center justify-start text-black font-bold text-3xl`,
    buttonsContainer:`flex w-1/4 justify-end items-center`, 
    button: `flex items-center bg-[#191B1F] rounded-2xl mx-2 text-[0.9rem] font-semibold cursor-pointer`,
    buttonPadding: `p-2`,
    buttonTextContainer: `h-8 flex items-center`,
    buttonIconContainer: `flex items-center justify-center w-8 h-8`,
    buttonAccent: `bg-[#172A42] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
}

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState('')

  return (
    <div className={style.wapper}>
        <div>
            <h1 className={style.headerLogo}>Winko</h1>
        </div>
        <div className={style.buttonsContainer}>
            <div className={`${style.button} ${style.buttonPadding}`}>
                <div className={style.buttonIconContainer}>
                    <img src={ethLogo} alt="eth logo" height={20} width={20}></img>
                </div>
                <p>Ethereum</p>
                <div className={style.buttonIconContainer}>
                    <AiOutlineDown></AiOutlineDown>
                </div>
            </div>

            {/* <div className={`${style.button} ${style.buttonPadding}`}>
                <div className={`${style.buttonAccent} ${style.buttonPadding}`}>
                    Connect Wallet
                </div>

            </div> */}

            <div className={`${style.button} ${style.buttonPadding}`}>
          <div className={`${style.buttonIconContainer} mx-2`}>
            <HiOutlineDotsVertical />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar