// import "./index.css"
import { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import Editor from "./Editor";
import Cinemas from "./Cinema";
import Modal from "./Modal";
import axios from "axios";


function Dashboard() {
    const [refetch, setRefetch] = useState(false)
    const [showCinema, setShowCinema] =  useState({
        loading: false,
        result: {
            data: []
        }
    })
    const [editCinema, setEditCinema] = useState({})
    const [search, setSearch] = useState({
        name: "",
        sortby:"",
        order:""
    })

    useEffect(() => {
       console.log(search.sortby)
        setShowCinema((prevState) => ({
            ...prevState, loading: true
        }))
        axios({
            method: "GET",
            url: `http://localhost:5000/api/v1/cinema?name=${search.name}${search.sortby ? "&sortby=" + search.sortby : ""}${search.order ? "&order=" + search.order : ""}`
        }).then((res) => setShowCinema({
            loading: false,
            result: res.data
        })).catch((err) => console.log(err))
        
    }, [refetch])
    return(
        <>
            <Navbar />
            <Cinemas refetch={refetch} setRefetch={setRefetch} 
            showCinema={showCinema} setShowCinema={setShowCinema}
            editCinema={editCinema} setEditCinema={setEditCinema} />
            <Editor update={setEditCinema} search={setSearch} 
            setRefetch={setRefetch} refetch={refetch}/>
            <Modal editCinema={editCinema} setEditCinema={setEditCinema} 
             setRefetch={setRefetch} refetch={refetch}
            />
            
        </>
    )
}  

export default Dashboard