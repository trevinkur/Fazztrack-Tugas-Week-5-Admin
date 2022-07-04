import { useEffect, useState } from "react";
import axios from "axios";
import Editor from "./Editor";
import Loader from "../../Component/Loader";
import Empty from "../../Component/Empty";


function Movies() {
    const [refetch, setRefetch] = useState(false)
    const [showMovie, setShowMovie] =  useState({
        loading: false,
        result: {
            data: []
        }
    })
    const [editMovie, setEditMovie] = useState({})
    const [search, setSearch] = useState({
        title: "",
        sortby:"",
        order:""
    })

    useEffect(() => {
       
        setShowMovie((prevState) => ({
            ...prevState, loading: true
        }))
        axios({
            method: "GET",
            url: `http://localhost:5000/api/v1/movies/search?title=${search.title}${search.sortby ? "&sortby=" + search.sortby : ""}${search.order ? "&order=" + search.order : ""}`
        }).then((res) => setShowMovie({
            loading: false,
            result: res.data
        })).catch((err) => console.log(err))
        
    }, [refetch])

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

    function handleEdit(e, id) {
        e.preventDefault()
        if(id != 0) {
            axios({
                method: 'PATCH',
                data: editMovie,
                url: `http://localhost:5000/api/v1/movies/${id}`
            }).then((res) => {
                alert(res.data.message)
                setRefetch(!refetch)
            }).catch((res) => {
                alert(res.data.message)
                setRefetch(!refetch)}
            )
        } else {
            axios({
            method: 'POST',
            data: editMovie,
            url: `http://localhost:5000/api/v1/movies/`
        }).then((res) => {
            alert(res.data.message)
            setRefetch(!refetch)
        }).catch((res) => {
            alert(res.data.message)
            setRefetch(!refetch)}
        )}
        
    }
 
    return (
    <>
        <table className="table">
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
        <tbody>
        { showMovie.result.data.length === 0 ? <Empty /> :  showMovie.loading ? <Loader /> : showMovie.result.data.map((item, i) => {
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
                <button type="button" className="btn btn-primary" 
                data-bs-toggle="modal" data-bs-target="#editModal" 
                onClick={() => {
                    setEditMovie(item)
                }}>
                    Edit
                </button>
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.movie_id)} >
                    Delete
                </button>
            </td>
          </tr>)
        })}
        </tbody>
      </table>
      <Editor update={setEditMovie} search={setSearch} setRefetch={setRefetch} refetch={refetch}/>


      <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form onSubmit={(e) => handleEdit(e)}>
                <div className="modal-body">
                    <div class="mb-3">
                        <label for="movieTitle" class="form-label">Title</label>
                        <input type="text" class="form-control" id="movieTitle" value={editMovie.title }
                        onChange={(e) => setEditMovie((prevState) => {return {...prevState, title: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="movieCover" class="form-label">Cover</label>
                        <input type="text" class="form-control" id="movieCover" value={editMovie.cover} 
                         onChange={(e) => setEditMovie((prevState) => {return {...prevState, cover: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="movieReleaseDate" class="form-label">Release Date</label>
                        <input type="text" class="form-control" id="movieReleaseDate" value={editMovie.release_date}
                         onChange={(e) => setEditMovie((prevState) => {return {...prevState, release_date: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="movieDuration" class="form-label">Duration</label>
                        <input type="text" class="form-control" id="movieDuration" value={editMovie.duration} 
                        onChange={(e) => setEditMovie((prevState) => {return {...prevState, duration: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="movieDirector" class="form-label">Director</label>
                        <input type="text" class="form-control" id="movieDirector" value={editMovie.director} 
                         onChange={(e) => setEditMovie((prevState) => {return {...prevState, director: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="movieCategories" class="form-label">Categories</label>
                        <input type="text" class="form-control" id="movieCategories" value={editMovie.categories} 
                         onChange={(e) => setEditMovie((prevState) => {return {...prevState, categories: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="movieCast" class="form-label">Cast</label>
                        <input type="text" class="form-control" id="movieCast" value={editMovie.cast}
                         onChange={(e) => setEditMovie((prevState) => {return {...prevState, cast: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="movieSynopsis" class="form-label">Synopsis</label>
                        <textarea class="form-control" id="movieSynopsis" rows="3"
                         onChange={(e) => setEditMovie((prevState) => {return {...prevState, description: e.target.value}})} 
                         value={editMovie.description}>
                         </textarea>
                    </div>  
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={(e) => handleEdit(e,editMovie.movie_id)}>Save changes</button>
                </div>
            </form>
           
            </div>
        </div>
        </div>
    </>
    )
}  




function Loading() {
    return <h1 className="font-d-s">loading...</h1>
}

export default Movies