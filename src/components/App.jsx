import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            username:"kkojha47",
            userData:[],
            userRepos:[],
            perPage:5
        }
    }
      
    render(){
        return(
            <div className="container">
                {this.state.username}
            </div>
        )
    }
}
 App.propTypes={
     clientId: React.PropTypes.string,
     clientSecret: React.PropTypes.string
 };
 App.defaultProps={
       clientId:'acba103d50bd9d496e98',
       clientSecret:'6eba14e08b198808984c9a0e626deef774ebfbcf'
 };

 export default App