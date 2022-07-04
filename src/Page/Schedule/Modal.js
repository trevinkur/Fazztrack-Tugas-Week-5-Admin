import axios from "axios";
import { useState } from "react";

function Modal(props) {

    const [movie, setMovie] = useState([]);
    const [cinema, setCinema] = useState([])
    const {editSchedule, setEditSchedule, refetch, setRefetch} = props

    function handleEdit(e, id) {
        e.preventDefault()
        if(id != 0) {
            axios({
                method: 'PATCH',
                data: editSchedule,
                url: `http://localhost:5000/api/v1/schedule/${id}`
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
            data: editSchedule,
            url: `http://localhost:5000/api/v1/schedule/`
        }).then((res) => {
            alert(res.data.message)
            setRefetch(!refetch)
        }).catch((res) => {
            alert(res.data.message)
            setRefetch(!refetch)}
        )}
        
    }

    function moviesName() {
        axios({
            method: "GET",
            url: `http://localhost:5000/api/v1/movies/search?title`
        }).then((res) => {setMovie(res.data.data)})
    
    }

    function cinemaName() {
        axios({
            method: "GET",
            url: `http://localhost:5000/api/v1/cinema?name`
        }).then((res) => {setCinema(res.data.data)})
    
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
                    <select className="form-select form-select-lg mb-3 align-self-center" aria-label=".form-select-lg example "
                        onChange={(e) => setEditSchedule((prevState) => {return {...prevState, movie_id: e.target.value}})}
                        onClick={() => moviesName()} >
                        <option selected>orderby</option>
                        { movie.map((item) => <option value={item.movie_id}>{item.title}</option>)}
                    </select>
                    </div>
                    <div class="mb-3">
                        <label for="Schedule" class="form-label">Schedule</label>
                        <input type="text" class="form-control" id="Schedule" value={editSchedule.schedule }
                        onChange={(e) => setEditSchedule((prevState) => {return {...prevState, schedule: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="showTime" class="form-label">Show Time</label>
                        <input type="text" class="form-control" id="showTime" value={editSchedule.show_time} 
                         onChange={(e) => setEditSchedule((prevState) => {return {...prevState, show_time: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="statusRoom" class="form-label">status Room</label>
                        <input type="text" class="form-control" id="statusRoom" value={editSchedule.status_room} 
                         onChange={(e) => setEditSchedule((prevState) => {return {...prevState, status_room: e.target.value}})} />
                    </div>
                    <div class="mb-3">
                        <label for="place" class="form-label">Place</label>
                        <input type="text" class="form-control" id="place" value={editSchedule.place}
                         onChange={(e) => setEditSchedule((prevState) => {return {...prevState, place: e.target.value}})} />
                    </div>
                    <select className="form-select form-select-lg mb-3 align-self-center" aria-label=".form-select-lg example "
                        onChange={(e) => setEditSchedule((prevState) => {return {...prevState, cinema_id: e.target.value}})}
                        onClick={() => cinemaName()} >
                        <option selected>orderby</option>
                        { cinema.map((item) => <option value={item.cinema_id}>{item.cinema_name + " " + item.address }</option>)}
                    </select>
                </div>
                <div className="modal-footer">
                    
                    <button type="button" className="btn btn-primary" onClick={(e) => handleEdit(e,editSchedule.schedule_id)}
                    data-bs-dismiss="modal">Save changes</button>
                </div>
            </form>
           
            </div>
        </div>
        </div>)
}

export default Modal