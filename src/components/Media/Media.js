import { useEffect, useState } from "react";
import axios from "../../api/axios";
const Media = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/simkl/recently-watched');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const getPosterURL = (posterId) => {
        return `https://simkl.in/posters/${posterId}_m.jpg`;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6">
                Recently Watched:
            </h2>
            
            {data && (
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                    <img 
                        src={getPosterURL(data.poster)}
                        alt={data.title}
                        className="w-full h-auto object-cover"
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-bold mb-2">{data.title}</h3>
                        {data.year && (
                            <p className="text-gray-400">Year: {data.year}</p>
                        )}
                        {data.type && (
                            <p className="text-gray-400 capitalize">Type: {data.type}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Media;