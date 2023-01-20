import { useState, setState } from 'react';
import './App.css';
import Header from './components/Header';
import Month from './components/Month';
import rightarrow from './assets/right-arrow.png'
import leftarrow from './assets/left-arrow.png'


function App() {

  const [month, setMonth] = useState([
    { id: 0, name: "janeiro", rendaDoMes: 0 },
    { id: 1, name: "fevereiro", rendaDoMes: 0 }
  ])

  let setRendaProperty = (e) => {
    if(isNaN(e) || e == 0){
      return alert("Insira um número")
    }
    else
    {
    month[actualMonth].rendaDoMes = e;
    setMonth(prevState => {
      return month.map((item) => {
        // Check for the item with the specified id and update it
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
          <img src={leftarrow} alt="alt" onClick={previousMonth} className="arrow"/> 
          <span className='monthName'>{month[actualMonth].name}</span>
          <img src={rightarrow} alt="alt" onClick={nextMonth} className="arrow" />
        </div>
        
        <div className='body'>
          {
            month.map((m) => (
              actualMonth == m.id ? (<Month key={month[m.id].id} month={month[m.id]} setRendaProperty={setRendaProperty} />)
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
