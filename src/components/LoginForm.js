import React ,{useState} from 'react'

function LoginForm() {
    const [data, setData] = useState({
        fname:"",
        lname:"",
        pass:""
    })
    const inputChange=(e)=>{
        console.log(e.target.value);

        const {name,value} = e.target;
        setData((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }
    return (
        <div className='ui container'>
                        <br /><br /><br />
                        <h2>Login Form in React Js</h2><br />
            <form className="ui form my-3">
                <div className="field">
                    <label>First Name</label>
                    <input type="text"
                     name="fname" 
                     onChange={inputChange} 
                     value={data.fname}
                     placeholder="First Name"/>
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text"
                     name="lname" 
                     onChange={inputChange}
                     value={data.lname}  
                     placeholder="Last Name"/>
                </div>
                <div className="field">
                    <label>password</label>
                    <input type="text"
                     name="pass" 
                     onChange={inputChange}
                     value={data.pass}  
                     placeholder="Password"/>
                </div>
              
                <button className="ui button" type="submit">Submit</button>

              
            </form>
        </div>
    )
}

export default LoginForm
