import { Button } from '@material-ui/core';
import React, { useContext } from 'react';

import { AuthContext } from '../contexts/auth';
function Home(props) {

    const { logout, authenticated } = useContext(AuthContext);

    const handleLogout = () => {
        logout();

    }

    return (
        <div>
            <h1> Home</h1>
            <p>{String(authenticated)}</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
}

export default Home;