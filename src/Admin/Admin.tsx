import React, { lazy } from "react";


const CreatePost = lazy(() => import('./CreatePost'));
const Home = lazy(() => import('../Home'));

const Admin: React.FC = () => {
    return (
        <>
            <CreatePost />
            <Home />
        </>
    )
};

export default Admin;
