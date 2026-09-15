import React, { ReactNode } from 'react';

const globalLayout = ({children}: {children: ReactNode}) => {
    return (
        <div>
         GeneralDashboardLayout  {children}
        </div>
    );
};

export default globalLayout;