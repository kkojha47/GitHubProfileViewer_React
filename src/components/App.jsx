import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

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
    //get User Data from GitHub
   getUserData(){
       $.ajax({
           url:'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
           datatype: 'json',
           cache: false,
           success: function(data){
               this.setState({userData:data})
              }.bind(this),
           error: function(xhr,status,err){
               alert(err);
           }.bind(this) 
       });
   }

   //get User Repos
   getUserRepos(){
       $.ajax({
           url:'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=ceated',
           datatype: 'json',
           cache: false,
           success: function(data){
               this.setState({userRepos:data})
                console.log(data);
              }.bind(this),
           error: function(xhr,status,err){
               alert(err);
           }.bind(this) 
       });
   }
    
   handeFormSubmit(username){
           this.setState({username:username},function(){
                 this.getUserData();       
                 this.getUserRepos();
           });
   }

    componentDidMount(){
        
    }

    render(){
        return(
            <div className="container">
                <Search onFormSubmit={this.handeFormSubmit.bind(this)}/>
                <Profile {...this.state}/>
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