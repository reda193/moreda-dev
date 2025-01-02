import { useState } from "react";

const Job = () => {
    const [expanded, setExpanded] = useState(true);
    const jobDetails = {
        title: "Product Verification Specialist Intern",
        company: "Evertz Microsystems",
        location: "Burlington, Ontario",
        period: "May 2024 - Dec 2024",
        responsibilities: [
            "Tested over 10 RF products, including software and hardware, for major broadcasting and telecommunication companies releasing firmware and revisions to customers",
            "Designed and validated functionality in new products to ensure alignment with Product Requirement Documents",
            "Gained hands-on experience with Signal Generators, Network Analyzers, Oscilloscopes, and DC Loads for RF Routers",
            "Developed Python unit tests and scripts to verify product performance, documenting test cases and bugs in Microsoft Excel",
            "Automated web application test cases using Selenium, analyzed results, and meticulously tracked issues",
            "Utilized Jira to manage and prioritize software bugs, collaborating with cross-functional teams for efficient resolution",
            "Created a GUI using Qt Designer and Python to streamline test execution and generate faster test summaries",
            "Updated and authored test procedures to simplify the setup of testing environments for team members"
        ]
    };
    
    const toggleJob = (index) => {
        setExpanded(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
       <div className="space-y-8">
           <section className="space-y-4">
               <div 
                   className="flex items-center cursor-pointer"
                   onClick={() => setExpanded(!expanded)}
               >
                   <h1 className="text-2xl font-bold">{jobDetails.title}</h1>
                   <span className="ml-4 text-xl">{expanded ? '-' : '+'}</span>
               </div>
               
               <p className="text-gray-300 italic">
                   {jobDetails.company} | {jobDetails.location} | {jobDetails.period}
               </p>
               
               {expanded && (
                   <ul className="list-disc ml-6 space-y-2">
                       {jobDetails.responsibilities.map((responsibility, index) => (
                           <li key={index} className="text-lg">{responsibility}</li>
                       ))}
                   </ul>
               )}
           </section>
       </div>
   );
};

export default Job;