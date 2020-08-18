import React from 'react';

import './style.css';

const Container = (props) => {
    return(
        <main className="container">
            <div className="container__wrapper">
                    { props.children }
            </div>    
        </main>
    )
}

export default Container;