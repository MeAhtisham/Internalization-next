import React from 'react';
import AccordianHoc from '../../../layouts/AccordianHoc';

function Accordian(props) {
  const {isAccordianOpen, updateAccordianOpen, heading} = props;
  return (
    <div className="card mb-3">
      <h5 className="card-header text-white bg-main-primary btn text-left" onClick={()=>{
        updateAccordianOpen(!isAccordianOpen)
      }}>{heading}</h5>
      <div className={`${isAccordianOpen ? 'card-body' : 'd-none'}`}>
        {props.children}
      </div>
    </div>
  )
}

export default AccordianHoc(Accordian);
