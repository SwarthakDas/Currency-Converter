import { InputDiv } from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import { useState } from "react"
const App = () => {

  const [amount,setAmount]=useState()
  const [from,setFrom]=useState("inr")
  const [to,setTo]=useState("usd")
  const [convertedAmount,setConvertedAmount]=useState()
  const currencyInfo=useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert=()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }

  return (
    <div className="bg-gradient-to-br from-sky-800 to-indigo-900 h-screen flex flex-col items-center">
      <div className="text-white text-4xl font-extrabold p-10">
        Currency Converter
      </div>
        <div className="bg-white flex p-10 bg-opacity-10 backdrop-blur-md shadow-2xl rounded-2xl">
          <form onSubmit={(e)=>{
            e.preventDefault();
            convert()
          }} className="flex flex-col items-center">
            <div className="">
              <InputDiv label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency)=>setFrom(currency)} selectCurrency={from} onAmountChange={(amount)=>setAmount(amount)} />
            </div>
            <div>
              <button onClick={swap} className="bg-sky-500 py-2 px-6 rounded-xl text-white font-semibold cursor-pointer hover:bg-sky-400 transition-colors duration-300 shadow-md">Swap</button>
            </div>
            <div>
              <InputDiv label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency)=>setTo(currency)} selectCurrency={to} amountDisabled />
            </div>
            <button type="submit" className="bg-indigo-600 py-2 px-6 rounded-xl text-white font-bold cursor-pointer hover:bg-indigo-500 transition-colors duration-300 shadow-md">Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
    </div>
  )
}

export default App
