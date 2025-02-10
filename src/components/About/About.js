const About = () => {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-2xl font-bold underline underline-offset-4">
                    About
                </h1>
                <p className="text-lg">
                    My parents bought me my first computer at the age of 7 and ever since then I've been in love with anything to do with them. 
                    <br/>
                    <br/>
                    I'm currently building my own server at home as well as a fully custom loop water-cooled PC.
                </p>
            </section>

            <section className="space-y-4">
                <h1 className="text-2xl font-bold underline underline-offset-4">
                    Current Project: LeetDuels
                </h1>
                <p className="text-lg">
                    Developing a web application that helps users create budget-friendly meal plans. The platform:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                    <li>Building a real-time competitive game which allows two people to compete against eachother to see who can solve questions quicker, and more efficient</li>
                    <li>Implementing ELO system to track user's rating, with aaccurate results to implement a ranking system</li>
                    <li>Current in progress in very early development</li>
                </ul>
                <p className="italic">
                    Target release: June 2025
                </p>
            </section>
        </div>
    );
 };
 
 export default About;