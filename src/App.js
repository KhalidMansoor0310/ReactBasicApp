import React from 'react'
import Cards from './components/Cards'
import Navbar from './components/Navbar';
import Sdata from './components/Sdata';


function App() {
  return (
    <>
      
      <Navbar/>
    
      <div className='ui container'>
        <h1 className=''>Simple Netflex Application</h1>
        <br /><br />
        <div className="ui three column divided grid">

          <div className="row">

            {Sdata.map((value) => {
              return (
                <div className="column">
                  <Cards
                    name={value.name}
                    imgsrc={value.imgsrc}
                    desc={value.description}
                  />
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </>
  )
}

export default App
