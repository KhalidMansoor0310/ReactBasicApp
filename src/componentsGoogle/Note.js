import React from 'react'

function Note(props) {
    const deleteItem=()=>{
        props.deleteNote(props.id);
    }
    return (
      
                    <div className="card my-3" style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{props.item}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{props.id}</h6>
                            <p className="card-text">{props.content}</p>
                            <button className='btn btn-danger' onClick={deleteItem}>Delete</button>
                        </div>
                    </div>
             
    )
}

export default Note
