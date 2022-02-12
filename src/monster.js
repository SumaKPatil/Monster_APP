import React from 'react'

function monster(props) {

    const {listM}=props;

  return (
   {listM.map(m=><div>monster</div>)} 
  )
}

export default monster