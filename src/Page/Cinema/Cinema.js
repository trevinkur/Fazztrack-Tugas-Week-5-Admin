
import axios from "axios";
import Loader from "../../Component/Loader";
import Empty from "../../Component/Empty";


function Cinema(props) {
    const {showCinema, setEditCinema, refetch, setRefetch} = props

    return (
    <div className="container-table"> 
        
        { showCinema.result.data.length === 0 ? <Empty /> : 
        showCinema.loading ? <Loader /> : <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Cinema Name</th>
            <th scope="col">Logo</th>
            <th scope="col">Address</th>
        </tr>
        </thead>
        <tbody>{ showCinema.result.data.map((item, i) => {
            return(<TableData item={item} i={i} key={item.cinema_id} 
                setEditCinema={setEditCinema} refetch={refetch} setRefetch={setRefetch}/>)
            })}</tbody></table>
        }
    </div>
    )
}  


function TableData(props) {
    const {item, i, setEditCinema, refetch, setRefetch} = props
    
    function handleDelete(id) {
        if(window.confirm("Are You sure?"))
        axios({
            method: "DELETE",
            url: `http://localhost:5000/api/v1/cinema/${id}`
        }).then((res) => {
            alert(res.data.message)
            setRefetch(!refetch)
        })
        .catch((res) => alert(res.data.message))
        console.log(id)
    }

    return(<tr>
        <th scope="row">{i+1}</th>
        <td>{item.cinema_name}</td>
        <td>{item.cinema_logo}</td>
        <td>{item.address}</td>
        <td>
            <button type="button" className="btn btn-primary" 
            data-bs-toggle="modal" data-bs-target="#editModal" 
            onClick={() => {
                setEditCinema(item)
            }}>
                Edit
            </button>
            <button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(item.cinema_id)} >
                Delete
            </button>
        </td>
      </tr>)
}




export default Cinema