import logo from './logo.svg';
import './App.css';

import TableToDo from './Components/TableToDo';

function App() {


  const todos = [
    {rowNumber: 1, rowDescription: 'Running', rowAssigned:'Anuj',rowDistances:'10'},
    {rowNumber: 2, rowDescription: 'Walking', rowAssigned:'Veenu',rowDistances:'11'},
    {rowNumber: 3, rowDescription: 'Cycling', rowAssigned:'Meenal',rowDistances:'6'},
    {rowNumber: 4, rowDescription: 'Running', rowAssigned:'Shubham',rowDistances:'5'},
    {rowNumber: 5, rowDescription: 'Swimming', rowAssigned:'Abhishek',rowDistances:'6'}
];


  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
              <TableToDo todos={todos}/>
        </div>

      </div>
    </div>
  );
}

export default App;
