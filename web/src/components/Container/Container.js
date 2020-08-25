import React from 'react';

import './style.css';

const Container = (props) => {
    return(
        <main className="container">
            <div style={{maxWidth:props.width}}className="container__wrapper">
                    { props.children }
            </div>    
        </main>
    )
}

export default Container;