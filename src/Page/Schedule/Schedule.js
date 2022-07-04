
import axios from "axios";
import Loader from "../../Component/Loader";
import Empty from "../../Component/Empty";


function Schedule(props) {
    const {showSchedule, setEditSchedule, refetch, setRefetch} = props

    return (
    <div className="container-table"> 
    
        
        { showSchedule.result.data.length === 0 ? <Empty /> : 
        showSchedule.loading ? <Loader /> : <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Movie</th>
            <th scope="col">Schedule</th>
            <th scope="col">Show Time</th>
            <th scope="col">Status Room</th>
            <th scope="col">Place</th>
            <th scope="col">Cinema Name</th>
            <th scope="col">address</th>
            <th scope="col">Cinema Logo</th>
        </tr>
        </thead>
        <tbody>{ showSchedule.result.data.map((item, i) => {
            return(<TableData item={item} i={i} key={item.schedule_id} 
                setEditSchedule={setEditSchedule} refetch={refetch} setRefetch={setRefetch}/>)
            })}</tbody></table>
        
        }
    </div>
    )
}  


function TableData(props) {
    const {item, i, setEditSchedule, refetch, setRefetch} = props
    
    function handleDelete(id) {
        if(window.confirm("Are You sure?"))
        axios({
            method: "DELETE",
            url: `http://localhost:5000/api/v1/schedule/${id}`
        }).then((res) => {
            alert(res.data.message)
            setRefetch(!refetch)
        })
        .catch((res) => alert(res.data.message))
        console.log(id)
    }

    return(<tr>
        <th scope="row">{i+1}</th>
        <td>{item.title}</td>
        <td>{item.schedule}</td>
        <td>{item.show_time}</td>
        <td>{item.status_room}</td>
        <td>{item.place}</td>
        <td>{item.cinema_name}</td>
        <td>{item.cinema_logo}</td>
        <td>{item.address}</td>
        <td>
            <button type="button" className="btn btn-primary" 
            data-bs-toggle="modal" data-bs-target="#editModal" 
            onClick={() => {
                setEditSchedule(item)
            }}>
                Edit
            </button>
            <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.schedule_id)} >
                Delete
            </button>
        </td>
      </tr>)
}




export default Schedule