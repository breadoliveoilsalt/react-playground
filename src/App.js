import logo from './logo.svg';
import './App.css';

const OrderPie = ({ PieForm, orderAction }) => {

  // ...assume fulsome pie data comes from another asyncronous call instead of being hard coded below
  const pieData = {name: "Cherry"} 

  const handleSubmit = () => {
    orderAction(pieData)
    // ...assume there's a following method to redirect to <OrderPreviewPage/>
  }

  return (
    <PieForm
      pieName={pieData.name}
      onSubmit={handleSubmit}
    />
  )
}

const SimplePieForm = ({ pieName, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <p>Click to confirm your order of the pie below</p>
      <p>{pieName}</p>
      <button type="submit">Submit</button>
    </form>
  );
}

const postPieOrderService = (pieData) => {
  // assume this posts pie data to complete the order instead of an alert
  alert(`Ordering Pie: ${JSON.stringify(pieData)} `)
}

const App = () => {

  return (
    <div className="App">
      <OrderPie
        PieForm={SimplePieForm}
        orderAction={(pieData) => postPieOrderService(pieData)}
      />
    </div>
  );
}

export default App;
