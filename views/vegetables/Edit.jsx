const React = require('react'); 

class Edit extends React.Component{
    render(){
        const {_id,name,isGreen} = this.props.vegetable; 
        return(
            <div>
                <h1>Edit Page</h1>
                <form action = {`/vegetables/${_id}?_method=PUT`} method ='POST'>
                    Name: <input type = "text" name ="name" defaultValue ={name}/><br/>
                    isGreen: <input type = 'checkbox' name ="isGreen" checked ={isGreen}/><br/>
                    <input type = "submit" name= "" value ="Submit Changes"/>
                </form>
            </div>
        )
    }
}

module.exports = Edit; 