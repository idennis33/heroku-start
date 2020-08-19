const React = require('react');


 class Index extends React.Component{
     render(){
         const {vegetables} = this.props
         return (
             <>
             <h1>Vegetables Index Page</h1>
             <a href = {`/vegetables/new`}>Add New Vegetable</a><br/>
             {vegetables.map((vegetable)=>{
                 return(
                     <div key={vegetable._id}>
                        <h1><a href ={`/vegetables/${vegetable._id}`}>{vegetable.name}</a></h1>
                        {vegetable.isGreen ? `It is green` : `It is not green`}<br/>
                        <a href ={`/vegetables/${vegetable._id}/edit`}>Edit Vegetable</a><br/>
                        <form action={`/vegetables/${vegetable._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form>
                     </div>
                 )
             })}
             </>
         );
     }
 }



module.exports = Index; 