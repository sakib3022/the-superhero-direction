import React from 'react';
import Singledeveloper from './Singledeveloper/Singledeveloper';

const Developers = (props) => {
    const {developers,handleHire} = props;
    return (
        <div className="developersContainer row row-cols-3 g-2">
            {developers.map((developer) => <Singledeveloper developer={developer} handleHire={handleHire}></Singledeveloper>)}
        </div>
    );
};

export default Developers;