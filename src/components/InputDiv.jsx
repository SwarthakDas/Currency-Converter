import { useId } from "react"

const InputDiv = ({label,amount,onAmountChange,onCurrencyChange,currencyOptions=[],selectCurrency="usd",amountDisabled=false,currencyDisabled=false}) => {
  const amountId=useId()
  return (
    <div className="flex items-center shadow-xl p-4 rounded-sm bg-sky-50 gap-10 text-sky-900 font-semibold my-4">
      <div className="flex flex-col">
        <label htmlFor={amountId}>{label}</label>
        <input id={amountId} type="number" placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} className="border-2 p-2 rounded-sm border-sky-100 hover:bg-sky-100" />
      </div>
      <div>
        <p>Currency type</p>
        <select value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisabled} className="p-2 border-1 border-blue-100 cursor-pointer hover:bg-sky-100">
          {currencyOptions.map((curr)=>(
            <option key={curr} value={curr}>{curr}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputDiv