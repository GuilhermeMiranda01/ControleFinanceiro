import {useState} from 'react'
import add from '../assets/add.png'
import addred from '../assets/add-red.png'
import lixo from '../assets/lixo.png'


const Wallet = ({ month, setRendaProperty, updateMonth, divida, addDebt, removeDebt }) => {

    let [renda, setRenda] = useState();
    let [debtDescription, setDebtDescription] = useState("");
    let [debtValue, setDebtValue] = useState();
    const handleChange = (e) => {
        setRenda(e.target.value);
    }

    const handleDebtDescriptionChange = (e) => {
        setDebtDescription(e.target.value);
    }

    const handleDebtValueChange = (e) => {
        setDebtValue(e.target.value);
    }



    const handleRemoveDebt = (debtDescription, debtValue, monthId) =>{
        setRenda();
        setDebtDescription("");
        setDebtValue();
        addDebt(debtDescription, debtValue, month.id)
        
    }

    return (
        <div>
            <div className='divRenda'>
                <div>
                    <label htmlFor="" style={{ fontSize: "25px", marginRight: "20px" }}>renda do mês</label>
                    <br />
                    <input type="text" name="" id="" value={renda} className='input-green' onChange={handleChange} />

                    <img src={add} alt="" className='arrow' style={{ marginBottom: "-6px", marginLeft: "5px" }} onClick={() => setRendaProperty(renda)} />
                    <p style={{ fontSize: "20px", marginTop: "5px", color: "rgb(24 161 24)", marginBottom: "0px" }}>R${month.rendaDoMes}</p>
                </div>
            </div>
            <div className='divGastos'>
                <label htmlFor="" style={{ fontSize: "25px", marginRight: "20px" }}>gastos do mês</label>
                <br />
                <input type="text" name="" id="" className='input-red' onChange={handleDebtDescriptionChange} />
                <input type="text" name="" style={{ width: "50px" }} className='input-red' onChange={handleDebtValueChange} placeholder="R$" id="" />
                <img src={addred} alt="" className='arrow' style={{ marginBottom: "-6px", marginLeft: "5px" }} onClick={() => handleRemoveDebt(debtDescription, debtValue, month.id)} />
                {
                    divida !== undefined ? (
                        <div>
                            <table className='table-gastos'>
                                <tbody>
                                    {
                                        divida.map((d) => (
                                            d.monthId === month.id ? (
                                                <tr>
                                                        <td>{d.description}</td>
                                                        <td>R${d.value}</td>
                                                        <td> <img src={lixo} alt="" className='arrow' onClick={() => removeDebt(d.id)} /></td>
                                                    </tr>
                                                )
                                                    :
                                                    (<tr></tr>)
                                            ))
                                        }</tbody>
                            </table>
                        </div>
                    ) : (<span></span>)
                }
            </div>
        </div>
    )
}

export default Wallet