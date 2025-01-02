import { React, useState } from 'react';

const Skills = () => {
    const skills = {
        languages: ['Java', 'JavaScript', 'Python', 'C#', 'HTML', 'CSS'],
        frameworks: ['React.js', 'Node.js', 'Nginx', 'Tailwind CSS', 'Pandas', 'NumPy', 'Matplotlib', 'PyQT', 'TensorFlow'],
        databases: ['MongoDB', 'MySQL', 'Redis'],
        tools: ['Qt Designer/Creator', 'Selenium', 'DigitalOcean', 'AWS', 'Git', 'Jira', 'VS Code', 'Shell Scripting'],
    };
 
    const [selectedCategory, setSelectedCategory] = useState('languages'); 
 
    return (
        <div className="space-y-8">            
            <div className="flex justify-center gap-4">
                {Object.keys(skills).map((category) => (
                    <button
                        key={category}
                        className={`px-6 py-3 rounded-lg transition duration-300 ease-in-out
                            ${selectedCategory === category 
                                ? 'bg-gray-800 text-white' 
                                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
             <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-center capitalize">{selectedCategory}</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {skills[selectedCategory].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 px-4 py-2 rounded-full text-gray-200 hover:bg-gray-700 transition-colors"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
 };

export default Skills;