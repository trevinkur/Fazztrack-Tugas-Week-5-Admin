
import axios from "axios";
import Loader from "../../Component/Loader";
import Empty from "../../Component/Empty";


function Movies(props) {
    const {showMovie, setEditMovie, refetch, setRefetch} = props

    return (
    <div className="container-table"> 
        
        { showMovie.result.data.length === 0 ? <Empty /> : 
        showMovie.loading ? <Loader /> : <table className="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Cover</th>
            <th scope="col">Release Date</th>
            <th scope="col">Duration</th>
            <th scope="col">Director</th>
            <th scope="col">Categories</th>
            <th scope="col">Synopsis</th>
            <th scope="col">Edit</th>
        </tr>
        </thead>
        <tbody>{ showMovie.result.data.map((item, i) => {
            return(<TableData item={item} i={i} key={item.movie_id} 
                setEditMovie={setEditMovie} refetch={refetch} setRefetch={setRefetch}/>)
            })}</tbody></table>
        }
       
    </div>
    )
}  


function TableData(props) {
    const {item, i, setEditMovie, refetch, setRefetch} = props
    
    function handleDelete(id) {
        if(window.confirm("Are You sure?"))
        axios({
            method: "DELETE",
            url: `http://localhost:5000/api/v1/movies/${id}`
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
        <td>{item.cover}</td>
        <td>{item.release_date}</td>
        <td>{item.duration}</td>
        <td>{item.director}</td>
        <td>{item.categories}</td>
        <td>{item.cast}</td>
        <td>{item.description}</td>
        <td>
            <button type="button" className="btn btn-primary m-2" 
            data-bs-toggle="modal" data-bs-target="#editModal" 
            onClick={() => {
                setEditMovie(item)
            }}>
                Edit
            </button>
            <button type="button" className="btn btn-danger m-2" onClick={() => handleDelete(item.movie_id)} >
                Delete
            </button>
        </td>
      </tr>)
}




export default Movies