import React from 'react'
import Line from './Line'

const Grid = () => {

  const lines=["", "", "", "", "", ""];
  const formattedLines = [];
  lines.forEach((line, index) => {
    formattedLines.push(<Line key={index}>{line}</Line>)
  })

  return (
    <div>
       {formattedLines}    
    </div>
  )
}

export default Grid

/* 
const arr=['One','Two','Three','Four'];
export default function App() {
const for_loop = []
for (let i=0;i<arr.length;i++) {
  for_loop.push(<li key={i.toString()}>{arr[i]}</li>);
};
return(
  <div>
    <center><h1>Hello Ninja!</h1></center>
    {for_loop}
  </div>
)} */