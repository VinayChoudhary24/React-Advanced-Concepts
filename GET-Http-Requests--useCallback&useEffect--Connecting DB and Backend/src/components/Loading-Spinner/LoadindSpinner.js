import React from 'react';
import './LoadingSpinner.css';

function LoadindSpinner() {
  console.log("LS...");
  return (
    // <div>Loadind Spinner....</div>
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default LoadindSpinner;