import React from 'react'

export default function Masonry(props) {
  const columnWrapper = {};
  const result = [];
  // create columns
  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  let currentCol = 0;
  for(let i = 0; i<props.children.length;i++){
    columnWrapper[`column${currentCol}`].push(props.children[i]); 
    
    if(currentCol < props.columns - 1){
      currentCol++;
    }
    else {
      currentCol = 0;
    }
  }
  
  // wrap children in each column with a div
  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div key={i} className={`col column-${i+1}`} style={{width:100 / props.columns + '%'}}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }
  // console.log(result);
  return (
    <div style={{ display: 'flex' }}>
      {result}
    </div>
  );
}