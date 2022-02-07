import React, { Fragment } from 'react';

const TitleWithBorderBandComponent = ({title}) => {
    return (
        <Fragment>
            <h3 className="text-4xl mb-6">{title}</h3>
            <div className="flex items-center mb-10">
                <div className="w-32 h-1 bs-dark-green-bg"></div>
                <div className="w-full h-0.5 bg-gray-200"></div>
            </div>
        </Fragment>
    );
};

export default TitleWithBorderBandComponent;