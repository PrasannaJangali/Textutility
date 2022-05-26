import React from 'react'

export default function Alert(props) {
  const mystyle={
    height:'50px'
  }
  return (
    <div style={mystyle}>
    {
      props.alert && <div >
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {props.alert.msg}
      </div>
      </div> 
    }
    </div>
    
  )
}
