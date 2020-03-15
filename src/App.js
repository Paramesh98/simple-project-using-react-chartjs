import React, { Component } from 'react'
import Charts from './components/Chart'
import './styles.css'

export default class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      intensity:[],
      chartValue: [],
       value:[],
       currentPage:1,
       dataPerPage:10,
       search:''
    }
  }

componentDidMount(){
  fetch("./data.json")
  .then(response => {return response.json();})
  .then(data=>{
    
    this.setState({value:data.slice(0, 300), intensity:data.map(item=>item.intensity).slice(0,30),  chartValue:data.slice(0, 300)})
    console.log(this.state.value)
    console.log(this.state.chartValue)
  })
  .catch(err => console.log(err))
    
  }

handleClick = (event) =>{
  this.setState({currentPage:event.target.id})
   event.target.className = "active"
}

handleSelect = (event) =>{
  console.log(event.target.value)
    this.setState({dataPerPage:event.target.value})
}



  render(){
    const {currentPage, dataPerPage, value, chartValue, intensity} = this.state
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = value.slice(indexOfFirstData, indexOfLastData)

    const renderData = currentData.map((data,index)=>{
      return <tr key={index}>
      <td>{data.title}</td>
    <td>{data.topic}</td>
    <td>{data.end_year}</td>
    <td>{data.intensity}</td>
    <td>{data.sector}</td>
    <td>{data.region}</td>
    <td>{data.pestle}</td>
   </tr>
    })
    const pageNumber = [];
    for(let i=0; i< Math.ceil(value.length/ dataPerPage); i++){
      pageNumber.push(i)
    }

    const renderPageNumber = pageNumber.map(number =>{
      return<li key={number} id={number} onClick={this.handleClick}>{number}</li>
    })

    const sorted = intensity.sort((a,b) => a-b)
    
    return(
      <div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-light">


<ul className="navbar-nav">
 <div className="navbar-brand">
    <h4>Radar</h4>
 </div>
</ul>

</nav>

        <div className="row">
          <div className="col-md-12">
          <Charts stateValue={this.state.chartValue} />
          </div>
          <div className="row">
          <div className="col-md-12"><h3>Top Ten Topics</h3></div>
          </div>

          <div className="row">
             

            {this.state.chartValue.slice(0,12).map(item =>{
              return(<div className="col-md-2">
                      <div className="card text-center">
                      <h4 className="card-title ">{item.sector}</h4>
                        <p className="card-body">{item.region}</p>
                        <p className="card-footer">{item.title}</p>

                      </div>
              </div>)
            })}
        
        </div>
          
        </div>
        <div className="row">
          <div className="col-md-4">
            <select onChange={this.handleSelect}>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div className="col-md-8"> </div>
        </div>
        <div className="row">
          <div className="col-md-12">
           <table className="table table-bordered">
           <tr>
             <th>Title </th>
             <th>Topic </th>
             <th>Year </th>
             <th>Intensity </th>
             <th>Sector </th>
             <th>Region </th>
             <th>Pestle </th>
           </tr>
             {renderData}
           </table>
            <ul className="pagination" id="page_numbers">
              {renderPageNumber}
            </ul>
          </div>
        </div>
      </div>
      
    )
  }
  
}