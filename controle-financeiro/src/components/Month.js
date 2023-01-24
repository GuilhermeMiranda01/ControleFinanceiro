import React from 'react'
import Wallet from './Wallet'


const Month = ({selectedMonthId, month, setRendaProperty, updateMonth, divida, addDebt, removeDebt}) => {
    

  return (
    <div>
        <br />
        <Wallet month={month} setRendaProperty={setRendaProperty} updateMonth={updateMonth} divida={divida} addDebt={addDebt} removeDebt={removeDebt}/>
    </div>
  )
}

export default Month