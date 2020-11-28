import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';

//완전 공통인 부분은 여기에 넣습니다.

const NodeBird = ({ Component }) => {
    return(
       <>
       <head>
           <title>SNS</title>
       </head>
        <Component />
        </>
    
    );
};

NodeBird.propTypes = { 
    Component: PropTypes.elementType.isRequired, 
};


export default NodeBird;