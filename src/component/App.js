import React,{Component} from 'react';
import axios from 'axios';
import '../index.css';
import{TiWeatherPartlySunny} from "react-icons/ti";
import { FcApproval,FcCancel,FcGlobe,FcSearch} from "react-icons/fc";
import { MdSwapVert } from "react-icons/md";


class App extends Component{
    constructor(props){
    	super(props);
    	this.state={
    		searchterm:"",
    		data:[],
    		loading:true,
    		name:'',
    	}

    }


	 componentDidMount(){
            

	 	

	 	this.fetchApi()
           
    }


      fetchApi=async()=>{
           const url=`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchterm}&units=metric&appid=213bf87e6cb8354e1642b89e088a81bb`
	 	   const resp=await fetch(url)
	 	   const resjson=await resp.json();
	 	 
	 	   this.setState({
	 	   	data:resjson.main,
	 	   	loading:false,
	 	   	name:this.state.searchterm
	 	   })

	 	   console.log("here",resjson)
	 	}

   changeInput=(e)=>{
        this.setState({
        	searchterm:e.target.value,
        	
        })
   

       
   }

	render(){
		return(
			<>
			<div className="Mainbox">
			<div className="head">
			<h2>Weather App <TiWeatherPartlySunny/> </h2>
			</div>
			
            <div className="inputfield">
            <input className="insideInput" placeholder=" &#128269; Enter City " onChange={(e)=>this.changeInput(e)}></input>
            <span><button className="button" onClick={()=> this.fetchApi()}>Search <FcSearch/> </button></span>
            </div>
            {!this.state.data ? <h3 style={{textAlign:"center",color:"lightblue"}}>Enter Valid Data & hit search!! <FcCancel/></h3> : <div className="outerBox"> <div className="box">
             <div>

                <div>
                <h2>City :{this.state.name} <FcGlobe/> </h2>
                </div>

                 <div>
                <h2>Current Temperature : {this.state.data.temp} &deg;C <FcApproval/> </h2>

                </div>

                <div>
                <h3>Max-{this.state.data.temp_max} | Min-{this.state.data.temp_min}  <MdSwapVert/></h3>
               
                </div>
               &copy; Aditya Barve
                
             
              </div>
            </div></div> 
           
         } 
          </div>

			</>
			)
	}
	}



export default App;
