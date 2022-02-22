import React from 'react';

const Hello = () => {
    // below return returns jsx. jsx uses React.createElement() internally

    // return (
    //     <div className = 'dummyClass' >
    //         <h1>Hello Raghunath!</h1>
    //     </div>
    // );

    // non jsx example below
    return React.createElement(
        'div',
        //null,
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Raghunath!')
    );
}
export default Hello;