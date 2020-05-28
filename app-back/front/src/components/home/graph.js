import React, { Component } from "react";
import * as d3 from "d3";

class Graph extends Component {
    myRef=React.createRef();
  componentDidMount() {

    var data=[{"pregunta":"1","cantidad":90},
    {"pregunta":"2","cantidad":80}
    ,{"pregunta":"3","cantidad":70}
    ,{"pregunta":"4","cantidad":50}
    ,{"pregunta":"5","cantidad":40}
    ,{"pregunta":"6","cantidad":35}
    ,{"pregunta":"7","cantidad":20}
    ,{"pregunta":"8","cantidad":10}
    ,{"pregunta":"9","cantidad":5}
    ,{"pregunta":"10","cantidad":2}
]

  
        this.drawChart(data);
    
  }

  drawChart(data) {
    const canvas = d3.select(this.myRef.current);
    console.log("aqui"+data)
    const width =700
    const height=500
    const margin ={top:30,left:70,bottom: 40, right:10}
    const iwidth =width-margin.left -margin.right
    const iheight =height -margin.top-margin.bottom
    const svg = canvas.append("svg")
    svg.attr("width",width)
    svg.attr("height",height)
    
    let g =svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`)
   
    const y =d3.scaleLinear()
        .domain([0, Math.max.apply(Math, data.map(function(o) { return o.cantidad; }))])
        .range([iheight,0])
    
    const x=d3.scaleBand()
        .domain(data.map(d=>d.pregunta))
        .range([0,iwidth])
        .padding(0.1)
    
    const bars =g.selectAll("rect").data(data)
    
    bars.enter().append("rect")
        .attr("class","bar")
        .style("fill","orange")
        .attr("x",d=>x(d.pregunta))
        .attr("y",d=>y(d.cantidad))
        .attr("height", d=>iheight-y(d.cantidad))
        .attr("width", x.bandwidth())
    
    g.append("g")
        .classed("x--axis",true)
        .call(d3.axisBottom(x))
        .attr("transform",`translate(0,${iheight})`)
    
    g.append("g")
        .classed("y--axis",true)
        .call(d3.axisLeft(y))

  
  }

  render() {
    return <div ref={this.myRef}>
      
    </div>;
  }
}

export default Graph;