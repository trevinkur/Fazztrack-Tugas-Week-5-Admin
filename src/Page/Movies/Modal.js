import axios from "axios";

function Modal(props) {

    const {editMovie, setEditMovie, refetch, setRefetch} = props

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
                    
                    <button type="button" className="btn btn-primary" onClick={(e) => handleEdit(e,editMovie.movie_id)}
                    data-bs-dismiss="modal">Save changes</button>
                </div>
            </form>
           
            </div>
        </div>
        </div>)
}

export default Modal