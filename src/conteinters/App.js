import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Error from '../components/Error';



class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users=>this.setState({robots:users}));
    }

    onSearchChange =(event)=>{
       this.setState({searchfield:event.target.value})
    }

    render(){
        const filteredRobots= this.state.robots.filter(robot=>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return(
            <div className='tc'>
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <Error>
                    <CardList robots={filteredRobots}/>
                    </Error>
                </Scroll>
            </div>
        );
    }
}
export default App;