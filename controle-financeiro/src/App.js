import { useState} from 'react';
import './App.css';
import Header from './components/Header';
import Month from './components/Month';
import rightarrow from './assets/right-arrow.png'
import leftarrow from './assets/left-arrow.png'


function App() {

  const [month, setMonth] = useState([
    { id: 0, name: "janeiro", rendaDoMes: 0 },
    { id: 1, name: "fevereiro", rendaDoMes: 0 },
    { id: 2, name: "março", rendaDoMes: 0 },
    { id: 3, name: "abril", rendaDoMes: 0 },
    { id: 4, name: "maio", rendaDoMes: 0 },
    { id: 5, name: "junho", rendaDoMes: 0 },
    { id: 6, name: "julho", rendaDoMes: 0 },
    { id: 7, name: "agosto", rendaDoMes: 0 },
    { id: 8, name: "setembro", rendaDoMes: 0 },
    { id: 9, name: "outubro", rendaDoMes: 0 },
    { id: 10, name: "novembro", rendaDoMes: 0 },
    { id: 11, name: "dezembro", rendaDoMes: 0 },

  ])

  const [divida, setDividas] = useState([
    { id: 999, monthId: 99, description: "", value: 0 }
  ])

  let addDebt = (debtDescription, debtValue, monthId) => {
    if (isNaN(debtValue) || debtValue.value === 0) {
      return alert("Insira valores válidos")
    } else {
      var d = { id: debtIds, monthId: monthId, description: debtDescription, value: debtValue };
      setDebtId(debtIds + 1)
      setDividas([...divida, d]);
    }
  }
  
  let removeDebt = (e) => {
      setDividas(divida.filter((item) => item.id !== e));
  }


  let [debtIds, setDebtId] = useState(1)


  let setRendaProperty = (e) => {
    if (isNaN(e) || e === 0) {
      return alert("Insira um número")
    }
    else {
      month[actualMonth].rendaDoMes = e;
      setMonth(prevState => {
        return month.map((item) => {
          return month.id === actualMonth ? { ...item, rendaDoMes: e } : item
        })
      })
    }
  }
  let [actualMonth, setActualMonth] = useState(0)


  const nextMonth = () => {
    setActualMonth(actualMonth + 1)
  }

  const previousMonth = () => {
    setActualMonth(actualMonth - 1)
  }
  /*identar = alt + shift + f */
  return (
    <div className='App'>
      <Header />
      <div>
        <div className='mes'>
          <img src={leftarrow} alt="alt" onClick={previousMonth} className="arrow" />
          <span className='monthName'>{month[actualMonth].name}</span>
          <img src={rightarrow} alt="alt" onClick={nextMonth} className="arrow" />
        </div>

        <div className='body'>
          {
            month.map((m) => (
              actualMonth === m.id ? (<Month key={month[m.id].id} month={month[m.id]} setRendaProperty={setRendaProperty} divida={divida} addDebt={addDebt} removeDebt={removeDebt} />)
                :
                (<span></span>)
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
