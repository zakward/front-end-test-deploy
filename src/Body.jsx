import React from 'react';

function Body() {
    return ( 
        <>
            <main>
                <p>Welcome to my React App!</p>
                <p>This is for deployment testing only!</p>

                <ul>
                    <li>Render</li>
                    <li>New Static Site</li>
                    <li>Connect to Repo</li>
                    <li>Build Command: $npm run build</li>
                    <li>Publish Directory: dist</li>
                </ul>
                <ul>
                    <li>Netlify</li>
                    <li>Connect to Repo</li>
                </ul>
            </main>
        </>
     );
}

export default Body;