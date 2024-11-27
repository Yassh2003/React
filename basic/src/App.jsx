import './App.css'
import Head from './components/Head';
import Card from './components/Card';
function App() {
  return (
    <div className='main-div'>
      <div id='h-div'>
        <Head/>
      </div>
      <div className='inner-div'>
        <div className='card-div'>
          <Card cardhead="STRATEGY" cardmid="Money Momentum" cardpara="Tract Premium helps you start saver investments insights covering" bottomhead="3 yrs CAGR" perdiv="7.20%" style={{"backgroundColor":"rgb(76, 209, 165)"}}/>
        </div>
        <div className='card-div'>
          <Card cardhead="PLANS" cardmid="Long-Term"  cardpara="Tract Premium helps you start saver investments insights covering" bottomhead="3 yrs CAGR" perdiv="14.20%" style={{"backgroundColor":"rgb(6, 8, 11)","color":"white"}}/>
        </div>
        <div className='card-div'>
          <Card cardhead="STRATEGY" cardmid="Long-Term"  cardpara="Tract Premium helps you start saver investments insights covering" bottomhead="3 yrs CAGR" perdiv="11.20%" style={{"backgroundColor":"rgb(161, 41, 191)"}}/>
        </div>
        <div className='card-div'>
          <Card cardhead="PLANS" cardmid="Long-Term"  cardpara="Tract Premium helps you start saver investments insights covering" bottomhead="3 yrs CAGR" perdiv="8.20%" style={{"backgroundColor":"rgb(254, 249, 95)"}}/>
        </div>
      </div>
    </div>
  )
}

export default App
