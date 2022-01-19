import React , {useState} from 'react'

export default function CreateNote(props) {

    const [note,setNote] = useState({
        title:"",
        content:""
    })
    const inputChange=(e)=>{
        const {name,value} = e.target;
        setNote((prev)=>{
           return { 
               ...prev,
                [name]:value
           }
        })
    }
    const addEvent=()=>{
        props.addNote(note);
    }

    return (
        <div className="container my-3">
            <h1>Google - Keep App Clone</h1>
            <div className="card">
                <div className="card-body bg-dark">
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input 
                         className="form-control" 
                         onChange={inputChange} 
                         name='title'
                         value={note.title}
                         placeholder="Enter your title ...."/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea 
                        className="form-control"
                        rows="3"
                        name='content'
                        onChange={inputChange} 
                        value={note.content}
                        placeholder='Enter your content ....' ></textarea>
                    </div>
                    <button className='btn btn-success' onClick={addEvent}>Add Note</button>
                </div>
            </div>
        </div>
    )
}
