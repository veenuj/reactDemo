function RowItemsToDo(props) {

    return (
        <tr>
            <th scope="row">{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <td>{props.rowDistances}</td>
        </tr>
    );
}


export default RowItemsToDo