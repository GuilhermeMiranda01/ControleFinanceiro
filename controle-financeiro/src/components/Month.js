import React from 'react'
import Wallet from './Wallet'


const Month = ({selectedMonthId, month, setRendaProperty, updateMonth}) => {
    

  return (
    <div>
        <br />

        <Wallet month={month} setRendaProperty={setRendaProperty} updateMonth={updateMonth}/>
    </div>
  )
}

export default Month