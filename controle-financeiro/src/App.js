import { useState, setState } from 'react';
import './App.css';
import Header from './components/Header';
import Month from './components/Month';

function App() {

  const [month, setMonth] = useState([
    {id: 0, name:"janeiro", rendaDoMes:0},
    {id: 1, name:"fevereiro", rendaDoMes:0}
  ]) 

  let setRendaProperty = (e) =>{
        month[actualMonth].rendaDoMes = e;
        setMonth(prevState => {
          return month.map((item) => {
              // Check for the item with the specified id and update it
              return month.id === actualMonth ? {...item, rendaDoMes: e} : item
          })
      })
  }
  
  

  let[actualMonth, setActualMonth] = useState(0)


  const nextMonth = () =>{
    setActualMonth(actualMonth+1)
  }

  const previousMonth = () =>{
    setActualMonth(actualMonth-1)
  }

  return (
    <div className='App'>
      <Header/>
     
      <div className='mes'>
            <button onClick={previousMonth}>Mês Anterior</button>
            <span>{month[0].nome}</span>
            <button onClick={nextMonth}>Próximo Mês</button>
        </div>
      <div>
      {
        month.map((m)=>(
          actualMonth==m.id? (<Month key={month[m.id].id} month={month[m.id]} setRendaProperty={setRendaProperty} />)
          :
            (<span></span>)
        ))
        }
      </div>
     
    </div>
  );
}

export default App;
