import axios from "axios";

function Modal(props) {

    const {editCinema, setEditCinema, refetch, setRefetch} = props

    function handleEdit(e, id) {
        e.preventDefault()
        if(id != 0) {
            axios({
                method: 'PATCH',
                data: editCinema,
                url: `http://localhost:5000/api/v1/cinema/${id}`
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
            data: editCinema,
            url: `http://localhost:5000/api/v1/cinema/`
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
                        <label for="CinemaName" class="form-label">Cinema Name</label>
                        <input type="text" class="form-control" id="CinemaName" value={editCinema.cinema_name }
                        onChange={(e) => setEditCinema((prevState) => {return {...prevState, cinema_name: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="CinemaLogo" class="form-label">Cinema Logo</label>
                        <input type="text" class="form-control" id="CinemaLogo" value={editCinema.cinema_logo} 
                         onChange={(e) => setEditCinema((prevState) => {return {...prevState, cinema_logo: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="CinemaAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="CinemaAddress" value={editCinema.release_date}
                         onChange={(e) => setEditCinema((prevState) => {return {...prevState, address: e.target.value}})} />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={(e) => handleEdit(e,editCinema.cinema_id)}
                    data-bs-dismiss="modal">Save changes</button>
                </div>
            </form>
           
            </div>
        </div>
        </div>)
}

export default Modal