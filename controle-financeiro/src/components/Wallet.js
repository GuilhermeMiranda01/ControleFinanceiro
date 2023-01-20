import React from 'react'
import add from '../assets/add.png'

const Wallet = ({ month, setRendaProperty, updateMonth }) => {

    var renda = 0;
    const handleChange = (e) => {
        renda = e.target.value;
    }
    return (
        <div>
            <div className='divRenda'>
                <div>
                    <label htmlFor="" style={{ fontSize: "25px" }}>renda do mês</label>
                    <br />
                    <input type="text" name="" id="" className='input-green' onChange={handleChange} />

                    <img src={add} alt="" className='arrow' style={{ marginBottom: "-6px", marginLeft: "5px" }} onClick={() => setRendaProperty(renda)} />
                    <p style={{ fontSize: "20px", marginTop: "5px", color: "rgb(24 161 24)", marginBottom:"0px" }}>R${month.rendaDoMes}</p>
                </div>
            </div>
            <div className='divGastos'>
                <label htmlFor="" style={{ fontSize: "25px" }}>gastos do mês</label>
                <br />
                <input type="text" name="" id="" className='input-red' onChange={handleChange} />

                <img src={add} alt="" className='arrow' style={{ marginBottom: "-6px", marginLeft: "5px" }} onClick={() => setRendaProperty(renda)} />
                <p style={{ fontSize: "20px", marginTop: "5px", color: "rgb(24 161 24)" }}>R${month.rendaDoMes}</p>
            </div>
        </div>
    )
}

export default Wallet