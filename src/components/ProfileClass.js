import { Component } from "react";

class Profile extends Component{

    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Akshay",
                location: "dummy"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo : json
        })
        console.log(this.state.userInfo);
    }

    render(){
        return(
            <div>
                <h2>
                    Profile Component 
                </h2>
                <img src={this.state.userInfo.avatar_url} />
                <h3>Name: {this.state.userInfo.name}</h3>
                <h3>Location: {this.state.userInfo.location}</h3>
            </div>
        );
    }
}
export default Profile;