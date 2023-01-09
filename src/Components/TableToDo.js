import RowItemsToDo from "./RowItemsToDo";

function TableToDo(props) {

    return (
       <table className="table table-hover">
             <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Description</th>
                <th scope='col'>Assigned</th>
                <th scope='col'>Distance</th>
              </tr>
            </thead>
            <tbody>

                {props.todos.map(todo => (

                    <RowItemsToDo 
                    rowNumber={todo.rowNumber}
                    rowDescription={todo.rowDescription}
                    rowAssigned = {todo.rowAssigned}
                    rowDistances ={todo.rowDistances}
                    />
                ))}
                
            </tbody>
       </table>
    );
}


export default TableToDo