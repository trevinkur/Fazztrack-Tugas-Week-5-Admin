import "./index.css"
import { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import Editor from "./Editor";
import Movies from "./Movies";
import Modal from "./Modal";
import axios from "axios";


function Dashboard() {
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
       console.log(search.sortby)
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
    return(
        <>
            <Navbar />
            <Movies refetch={refetch} setRefetch={setRefetch} 
            showMovie={showMovie} setShowMovie={setShowMovie}
            editMovie={editMovie} setEditMovie={setEditMovie} />
            <Editor update={setEditMovie} search={setSearch} 
            setRefetch={setRefetch} refetch={refetch}/>
            <Modal editMovie={editMovie} setEditMovie={setEditMovie} 
             setRefetch={setRefetch} refetch={refetch}
            />
            
        </>
    )
}  

export default Dashboard