import './App.css'
import AddTranscetion from './assets/components/AddTranscetion'
import Balance from './assets/components/Balance'
import Header from './assets/components/Header'
import IncomeExpense from './assets/components/IncomeExpense'
import TranectionList from './assets/components/TranectionList'
import { GlobalProvider } from './assets/context/GlobalContext'

function App() {

  return (
    <GlobalProvider>
      <Header/>
        <div className='container'>
          <Balance/>
          <IncomeExpense/>
          <TranectionList/>
          <AddTranscetion/>
        </div>
    </GlobalProvider>
  )
}

export default App
