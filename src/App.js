import { useState } from 'react'
import Discount from './Discount'
function App() {
  let [checked, setChecked] = useState(false)

  const handelChange = () => {
    setChecked(!checked)
  }

  return (
    <div className='container pt-4'>
      <h1>Mount Vs Update</h1>

      <h3>Do you agree?</h3>
      <form className='pt-4'>
        <div className='form-check form-switch'>
          <input
            className='form-check-input'
            type='checkbox'
            id='flexSwitchCheckChecked'
            value={checked}
            onChange={handelChange}
          />
          <label className='form-check-label' htmlFor='flexSwitchCheckChecked'>
            I Agree
          </label>
        </div>
      </form>

      <Discount agree={checked} />
    </div>
  )
}

export default App
