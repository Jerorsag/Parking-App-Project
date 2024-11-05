import './App.css';
import { RegisterForm } from './Components/RegisterForm/RegisterForm';
import { Home } from './Components/Home/Home';
import { Toggle } from './Components/TogglePanel/Toggle';

function App() {

  return (
    <div className='home'>
      <Home></Home>
      <RegisterForm></RegisterForm>
      <Toggle></Toggle>
    </div>
  )
}

export default App
