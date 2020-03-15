import React , { Component } from 'react'
import { Bar, Chart, Pie, Radar } from 'react-chartjs-2'

export default class Charts extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      value: [],country:[], intensity:[],relevance:[], likelihood:[], label:'',
       chartData :{
         labels:['one', 'two', 'three', 'four', 'five'],
         datasets : [{
          label:'population',
           data:[
             5000,3000,4000,2000,1800
           ]
 
        }]
       } 
   
    }
  }
  componentDidMount(){
    fetch("./data.json")
    .then(response => {return response.json();})
    .then(data=>{
      
      this.setState({value:data, chartData:data.slice(0, 30),
         relevance:data.slice(0,30).map(item => item.relevance), 
         likelihood:data.slice(0,30).map(item => item.likelihood), 
         country:data.slice(0,30).map(item => item.region), 
         label:data.slice(0,30).map(item => item.sector), 
         intensity:data.slice(0,30).map(item => item.intensity)})
      
      
    //  console.log(this.state.country)
     // console.log(this.state.intensity)
      //console.log(this.state.chartData)
     // console.log(this.state.chartData.country)
    })

    .catch(err => console.log(err))

    this.setState({
      chartData :{
        labels:this.state.country,
        datasets : [{
         label:'population',
          data:this.state.intensity


       }]
      } 
    })
  }

 

handleClick = (event,array) =>{
  console.log(event.target.children)
}

handleTopic = (event) =>{
 if(event.target.value == 'All'){
   const changedValue= this.state.value
  this.setState({ chartData:changedValue.slice(0, 30), 
    relevance:changedValue.slice(0,30).map(item => item.relevance),
     likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
     country:changedValue.slice(0,30).map(item => item.region), 
     intensity:changedValue.slice(0,30).map(item => item.intensity)})
 }else{
  let val = event.target.value
  let changedValue = this.state.value.filter(item =>{
    return val == item.topic
  })
  this.setState({ chartData:changedValue.slice(0, 30), 
    relevance:changedValue.slice(0,30).map(item => item.relevance),
     likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
     country:changedValue.slice(0,30).map(item => item.region), 
     intensity:changedValue.slice(0,30).map(item => item.intensity)})
//console.log(changedValue)
 }
}

handleSector = (event) =>{
  if(event.target.value == 'All'){
    const changedValue= this.state.value
   this.setState({ chartData:changedValue.slice(0, 30), 
     relevance:changedValue.slice(0,30).map(item => item.relevance),
      likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
      country:changedValue.slice(0,30).map(item => item.region), 
      intensity:changedValue.slice(0,30).map(item => item.intensity)})
  }else{
   let val = event.target.value
   let changedValue = this.state.value.filter(item =>{
     return val == item.sector
   })
   this.setState({ chartData:changedValue.slice(0, 30), 
     relevance:changedValue.slice(0,30).map(item => item.relevance),
      likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
      country:changedValue.slice(0,30).map(item => item.region), 
      intensity:changedValue.slice(0,30).map(item => item.intensity)})
// console.log(changedValue)
  }
 }
 
handleRegion = (event) =>{
  if(event.target.value == 'All'){
    const changedValue= this.state.value
   this.setState({ chartData:changedValue.slice(0, 30), 
     relevance:changedValue.slice(0,30).map(item => item.relevance),
      likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
      country:changedValue.slice(0,30).map(item => item.region), 
      intensity:changedValue.slice(0,30).map(item => item.intensity)})
  }else{
   let val = event.target.value
   let changedValue = this.state.value.filter(item =>{
     return val == item.region
   })
   this.setState({ chartData:changedValue.slice(0, 30), 
     relevance:changedValue.slice(0,30).map(item => item.relevance),
      likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
      country:changedValue.slice(0,30).map(item => item.region), 
      intensity:changedValue.slice(0,30).map(item => item.intensity)})
// console.log(changedValue)
  }
 }

 handlePestle = (event) =>{
  if(event.target.value == 'All'){
    const changedValue= this.state.value
   this.setState({ chartData:changedValue.slice(0, 30), 
     relevance:changedValue.slice(0,30).map(item => item.relevance),
      likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
      country:changedValue.slice(0,30).map(item => item.region), 
      intensity:changedValue.slice(0,30).map(item => item.intensity)})
  }else{
   let val = event.target.value
   let changedValue = this.state.value.filter(item =>{
     return val == item.pestle
   })
   this.setState({ chartData:changedValue.slice(0, 30), 
     relevance:changedValue.slice(0,30).map(item => item.relevance),
      likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
      country:changedValue.slice(0,30).map(item => item.region), 
      intensity:changedValue.slice(0,30).map(item => item.intensity)})
// console.log(changedValue)
  }
 }

 handleYear = (event) =>{
  if(event.target.value == 'All'){
    const changedValue= this.state.value
   this.setState({ chartData:changedValue.slice(0, 30), 
     relevance:changedValue.slice(0,30).map(item => item.relevance),
      likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
      country:changedValue.slice(0,30).map(item => item.region), 
      intensity:changedValue.slice(0,30).map(item => item.intensity)})
  }else{
   let val = event.target.value
   let changedValue = this.state.value.filter(item =>{
     return val == item.end_year
   })
   this.setState({ chartData:changedValue.slice(0, 30), 
     relevance:changedValue.slice(0,30).map(item => item.relevance),
      likelihood:changedValue.slice(0,30).map(item => item.likelihood), 
      country:changedValue.slice(0,30).map(item => item.region), 
      intensity:changedValue.slice(0,30).map(item => item.intensity)})
// console.log(changedValue)
  }
 }
 
  
  render(){

    const {StateValue} = this.props
    return(
      <div className="row">
      <div className="col-md-10 chart" id="chart">
      <Radar
        data={{
        labels:this.state.label,
        datasets : [{
         label:'Intensity',
          data:this.state.intensity,
          backgroundColor:'skyblue' },
       {label:'Likelehood',
          data:this.state.likelihood,
          backgroundColor:'red'},
          {label:'relevance',
          data:this.state.relevance,
          backgroundColor:'black'}
       ]
      } }
        options={{
          title:{display:true, title:'Project One', fontSize:25},
          legend:{display:true, position:'right'},
          onClick:this.handleClick
        }}
        />
      </div>
        <div className="col-md-2">
          <div>
          <h3>Topic</h3>
          <select onChange={this.handleTopic}>
          <option value="All">All</option>
          <option value="4D">4D</option>
          <option value="5G">5G</option>
          <option value="agriculture">agriculture</option>
          <option value="artificial intelligence">artificial intelligence</option>
          <option value="bank">bank</option>
          <option value="battery">battery</option>
          <option value="biofuel">biofuel</option>
          <option value="body">body</option>
          <option value="building">building</option>
          <option value="bank">bank</option>
          <option value="bus">bus</option>
          <option value="car">car</option>
          <option value="cargo">cargo</option>
          <option value="cash">cash</option>
          <option value="city">city</option>
          <option value="climate">climate</option>
          <option value="coal">coal</option>
          <option value="communication">communication</option>

          </select>
          </div>

          <div>
          <h3>Sector</h3>
          <select onChange={this.handleSector}>
          <option value="All">All</option>
          <option value="Automotive">Automotive</option>
          <option value="Construction">Construction</option>
          <option value="Energy">Energy</option>
          <option value="Environment">Environment</option>
          <option value="Financial services">Financial services</option>
          <option value="Financial services">Financial services</option>
          <option value="Food &amp; agriculture">Food &amp; agriculture</option>
          <option value="Government">Government</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Retail">Retail</option>
          <option value="Science">Science</option>
          <option value="Security">Security</option>
          <option value="Telecoms">Telecoms</option>
          <option value="Water">Water</option>
          </select>
          </div>

          <div>
          <h3>Region</h3>
          <select onChange={this.handleRegion}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Central Africa">Central Africa</option>
          <option value="Central America">Central America</option>
          <option value="Central Asia">Central Asia</option>
          <option value="Eastern Asia">Eastern Asia</option>
          <option value="Eastern Europe">Eastern Europe</option>
          <option value="Europe">Europe</option>  
          <option value="Northern America">Northern America</option>
          <option value="Northern Europe">Northern Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="South America">South America</option>
          <option value="South-Eastern Asia">South-Eastern Asia</option>
          <option value="Southern Asia">Southern Asia</option>
          <option value="Southern Europe">Southern Europe</option>
          <option value="Western Africa">Western Africa</option>
          <option value="Western Europe">Western Europe</option>
          <option value="World">World</option>
          </select>
          </div>

          <div>
          <h3>Pestle</h3>
          <select onChange={this.handlePestle}>
          <option value="All">All</option>
          <option value="Economic">Economic</option>
          <option value="Environmental">Environmental</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Industries">Industries</option>
          <option value="Political">Political</option>
          <option value="Social">Social</option>
          <option value="Technological">Technological</option>
          </select>
          </div>

          <div>
          <h3>Year</h3>
          <select onChange={this.handleYear}>
          <option value="All">All</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2025">2025</option>
          <option value="2028">2028</option>
          <option value="2030">2030</option>
          <option value="2035">2035</option>
          <option value="2040">2040</option>
          <option value="2042">2042</option>
          <option value="2043">2043</option>
          <option value="2048">2048</option>
          <option value="2050">2050</option>
          <option value="2050">2050</option>
          </select>
          </div>

        </div>



      </div>
    )
  }
}