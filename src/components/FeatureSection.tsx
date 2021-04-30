import React from 'react';

export const FeatureSection = ({ children }: { children: JSX.Element[] }) => {
    return (
        <div className="mt-8 md:mt-0 md:grid md:grid-cols-2 md:grid-rows-5 md:gap-x-8 md:mx-2">
            {children.map((child: JSX.Element, index: number) => {
                return React.cloneElement(child, { index, key: index });
            })}
        </div>
    );
};
