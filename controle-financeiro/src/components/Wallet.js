import React from 'react'

const Wallet = ({month, setRendaProperty, updateMonth}) => {
    
    var renda = 0;
    const handleChange = (e) => {
        renda = e.target.value;
      }
  return (
    <div>
        <h1></h1>
        <label htmlFor="">renda do mês</label>
        <input type="text" name="" id="" onChange={handleChange}/>
        <button onClick={() => setRendaProperty(renda)}>Adicionar</button>
        
    </div>
  )
}

export default Wallet