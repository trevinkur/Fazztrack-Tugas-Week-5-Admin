import empty from "../img/empty.svg" 

function Empty() {
    return(
        <div className="contaier-fluid text-center">
            <img src={empty} alt="data not Found"/>
        </div>
        
    )
}

export default Empty