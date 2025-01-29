import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataByEmail = (email) => {
    const [myTutorials, setMyTutorials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!email) return;

        const fetchTutorials = async () => {
            try {
                const response = await axios.get(`https://server-side-sable-sigma.vercel.app/my-tutorials/${email}`, {
                    withCredentials: true
                });
                setMyTutorials(response.data);
            } catch (err) {
                setError(err);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTutorials();
    }, [email]);

    return { myTutorials, loading, error };
};

export default useDataByEmail;


;




