import React from 'react'
import Wallet from './Wallet'


const Month = ({selectedMonthId, month, setRendaProperty, updateMonth}) => {
    

  return (
    <div>
        <span>{month.name}</span>
        <br />
        <span>{month.rendaDoMes}</span>

        <Wallet month={month} setRendaProperty={setRendaProperty} updateMonth={updateMonth}/>
    </div>
  )
}

export default Month