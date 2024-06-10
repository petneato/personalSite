import React from 'react';
import { Link } from "react-router-dom";


//Provides a clean way to encapsulate a router dom link to a different page
const LinkComponent = ({ path, text }) => {
  return (
    <Link to={path}>
      <button className='bg-dv-pink hover:bg-slate-300 rounded-sm p-2'>
        {text}
      </button>
    </Link>
  );
}

export default LinkComponent;