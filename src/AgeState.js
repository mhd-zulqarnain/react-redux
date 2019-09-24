import React from 'react'

class AgeState extends React.Component{

render() {
    return(
     <div>
         Your birthday!
         <br/>
         {this.props.date}</div>
    )
}
}

export default AgeState;