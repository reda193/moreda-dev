import { useState } from "react";

const Job = () => {
    // Initialize expanded state as an object with all jobs collapsed
    const [expandedJobs, setExpandedJobs] = useState({});

    const jobDetails = [{
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
    },
    {
        title: "Backend Developer",
        company: "LulAI",
        location: "Toronto, Ontario",
        period: "Jan 2025 - April 2025",
        responsibilities: [
            "Increased platform scalability through development of multi-tier admin system with Next.js and PostgreSQl, implementing role-based access control and real-time KPI tracking for enhanced performance monitoring",
            "Engineered RESTful API architecture and NextAuth.JS authentication system, enabling streamlined client customization and ensuring secure platform functionality",
            "Orchestrated containerized development environment usingDocker and deployed scalabe microservice sarchitecture on Vercel, ensuring consistent development workflow and reliable production development"
        ]
    }, 
    {
        title: "Research Assistant",
        company: "Mohawk College - CAF Museums",
        location: "Hamilton, Ontario",
        period: "Jan 2025 - April 2025",
        responsibilities: [
            "Engineered recgonition system using DeepFace and OpenCV to preseve and catalog 100+ years of military archives",
            "Implemented dual-resolution system to manage high-resoriginals and web versions, enhcnaing archive accesibility"
        ]
    }];

    const toggleJob = (index) => {
        setExpandedJobs(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="space-y-8">
            {jobDetails.map((job, index) => (
                <section key={index} className="space-y-4">
                    <div
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-800 p-4 rounded-lg transition-colors duration-200"
                        onClick={() => toggleJob(index)}
                    >
                        <h1 className="text-2xl font-bold">{job.title}</h1>
                        <span className="ml-4 text-xl">
                            {expandedJobs[index] ? '−' : '+'}
                        </span>
                      </div>

                    <p className="text-gray-300 italic px-4">
                        {job.company} | {job.location} | {job.period}
                    </p>

                    {expandedJobs[index] && (
                        <ul className="list-disc ml-10 space-y-2 px-4">
                            {job.responsibilities.map((responsibility, respIndex) => (
                                <li key={respIndex} className="text-lg text-gray-200">
                                    {responsibility}
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            ))}
        </div>
    );
};

export default Job;