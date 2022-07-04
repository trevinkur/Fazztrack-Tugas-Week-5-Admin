function Editor(props) {
    const {update, search, refetch, setRefetch} = props

    return(
        <div className="container bg-lightgray p-3 my-5 ">
            <div className="row ">
                <div className="col-md-4 d-flex ">
                <input type="text" className="form-control align-self-center" id="exampleFormControlInput1" placeholder="Cinema Name"
            onChange={(e) => search((prevState) => { setRefetch(!refetch); return {...prevState, name: e.target.value}} )}  ></input>
                </div>
                <div className="col-md-4 d-flex ">
                    <select className="form-select form-select-md mb-3 align-self-center" aria-label=".form-select-lg example "
                        onChange={(e) => search((prevState) => {setRefetch(!refetch); return {...prevState, sortby: e.target.value}})} >
                        <option selected>orderby</option>
                        <option value="cinema_name">Cinema Name</option>
                        <option value="address">address</option>
                    </select>
                </div>
                <div className="col-md-2  ">
                    <div className="form-check align-self-center">
                        <input className="form-check-input" type="radio" name="order" id="orderAsc" value={"asc"}
                            onClick={(e) => {setRefetch(!refetch); search((prevState) => ({...prevState, order: e.target.value}))}}
                        />
                        <label className="form-check-label" for="order1">
                            Ascending
                        </label>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="radio" name="order" id="orderDesc" value={"desc"}
                        onClick={(e) => {setRefetch(!refetch); search((prevState) => ({...prevState, order: e.target.value}))}} />
                        <label className="form-check-label" for="order2">
                            Descending
                        </label>
                    </div>
                </div>
                <div className="col-md-2 d-flex justify-content-center">
                    <button type="button" className="btn btn-primary align-self-center" 
                        data-bs-toggle="modal" data-bs-target="#editModal"
                        onClick={() => update((prevState) => (
                            {...prevState,
                            cinema_id: 0, 
                            cinema_name: "",
                            cinema_logo: "",
                            address: "",
                            }))}>
                            Update
                    </button>
                </div>
            </div>
           
            
            
        </div>
    )
}

export default Editor