import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UploadFile from './UploadFile';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <UploadFile/>
        )
    }
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App;
