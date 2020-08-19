const React = require('react'); 

class Show extends React.Component{
    render(){
        const {name,isGreen} = this.props.vegetable; 
        return(
            <div>
                <h1>Vegetables Show Page</h1>
                <p>The vegetable is {name}</p>
                <p>{isGreen ? `It is Green` : `Is not Green`}</p>
            </div>
        )
    }
}

module.exports = Show; 