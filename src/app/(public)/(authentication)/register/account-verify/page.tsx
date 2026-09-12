"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react';

const verifyAccountPage = () => {
    const searchEmail = useSearchParams().get("email")
    return (
        <div>
            {`user email: ${searchEmail}`}
        </div>
    );
};

export default verifyAccountPage;