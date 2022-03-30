import React from 'react'
import '../styles/button.css'
import Button from '@mui/material/Button';

function Buttons({filter, buttons}) {
  return (
    <div className='main-buttons'>
      {
        buttons.map((cat, i)=>{
          return(
          <div className='button-filter'key={i}>
            <Button
              variant="contained"
              color="success"
              onClick={()=>filter(cat)}
              >{cat}</Button>
          </div>
          )
        })
      }
    </div>
  )
}

export default Buttons