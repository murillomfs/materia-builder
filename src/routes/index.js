import React, { useContext } from 'react';
import Lottie from 'lottie-react-web';
import animation from '../assets/20641-loading.json';

import AuthContext from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
    const { signed, loading } = useContext(AuthContext);

    if(loading) {
        return (
            <Lottie
                width={200}
                speed={1.3}
                options={{
                animationData: animation
                }}
            />
        );
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
};

export default Routes;