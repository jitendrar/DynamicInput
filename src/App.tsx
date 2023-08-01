import './App.css';
import { InputFieldComponent } from './components/InputFieldComponent';

function App() {
  return (
    <div className="App">
      <InputFieldComponent options={[
        { label: "RentIncome", value: 400 },
        { label: "CapitalGain", value: 500 },
        { label: "Dividend", value: 100 },
        { label: "AdRevenue", value: 500 },
        { label: "Salary", value: 800 }]} />
    </div>
  );
}

export default App;
