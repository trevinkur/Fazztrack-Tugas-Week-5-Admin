import "./index.css"
import { useEffect, useState } from "react";
import Navbar from "../../Component/Navbar";
import Editor from "./Editor";
import Schedule from "./Schedule";
import Modal from "./Modal";
import axios from "axios";


function Dashboard() {
    const [refetch, setRefetch] = useState(false)
    const [showSchedule, setShowSchedule] =  useState({
        loading: false,
        result: {
            data: []
        }
    })
    const [editSchedule, setEditSchedule] = useState({})
    const [search, setSearch] = useState({
        title: "",
        sortby:"",
        order:""
    })

    useEffect(() => {
       console.log(search.sortby)
        setShowSchedule((prevState) => ({
            ...prevState, loading: true
        }))
        axios({
            method: "GET",
            url: `http://localhost:5000/api/v1/schedule?title=${search.title}${search.sortby ? "&sortby=" + search.sortby : ""}${search.order ? "&order=" + search.order : ""}`
        }).then((res) => setShowSchedule({
            loading: false,
            result: res.data
        })).catch((err) => console.log(err))
        
    }, [refetch])
    return(
        <>
            <Navbar />
            <Schedule refetch={refetch} setRefetch={setRefetch} 
            showSchedule={showSchedule} setShowSchedule={setShowSchedule}
            editSchedule={editSchedule} setEditSchedule={setEditSchedule} />
            <Editor update={setEditSchedule} search={setSearch} 
            setRefetch={setRefetch} refetch={refetch}/>
            <Modal editSchedule={editSchedule} setEditSchedule={setEditSchedule} 
             setRefetch={setRefetch} refetch={refetch}
            />
            
        </>
    )
}  

export default Dashboard