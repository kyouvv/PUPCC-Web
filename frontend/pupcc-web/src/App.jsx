import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './output.css';
import Landing from './components/landing.jsx';
import LoadingScreen from './components/loading.jsx';

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData().then(apiData => {
            setData(apiData);
            setLoading(false);
        }).catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://pupcc-web.onrender.com/api/getorgs');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            throw new Error('Error fetching data:', error);
        }
    };

    return (
        <AnimatePresence> {/* Use exitBeforeEnter option here */}
            {loading ? (
                <LoadingScreen key="loading" />
            ) : (
                <Landing key="landing" data={data}></Landing>
            )}
        </AnimatePresence>
    );
}

export default App;
