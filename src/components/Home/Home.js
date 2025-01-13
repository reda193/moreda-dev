import { FaLaptopCode, FaNodeJs, FaReact, FaPhp, FaGraduationCap, FaBasketballBall, FaBook, FaFilm, FaGamepad, FaEnvelope } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress } from "react-icons/si";

const Home = () => {
    return (
        <div className="space-y-4">
            <p className="text-2xl font-bold underline underline-offset-4">
                Welcome!
            </p>
            <p className="text-lg">
                I’m a passionate <span className="font-bold"><FaLaptopCode className="inline-block text-blue-500" /> Fullstack Developer</span> with hands-on experience in building dynamic web applications. Currently, I’m diving deeper into <span className="font-semibold"><SiNextdotjs className="inline-block text-black mx-1" /> Next.js</span> to explore server-side rendering and optimizing web performance, as well as expanding my backend knowledge by learning <span className="font-semibold"><FaPhp className="inline-block text-blue-700 mx-1" /> PHP</span>.
            </p>
            <p className="text-lg">
                I’m a third-year <span className="font-bold"><FaGraduationCap className="inline-block text-purple-500" /> Software Development</span> student at Mohawk College, with plans to graduate in <span className="font-semibold">December 2025</span>. I’m committed to continuously improving my skills and staying updated with the latest technologies in the field.
            </p>
            <p className="text-lg">
                Beyond programming, I enjoy playing <span className="font-semibold"><FaBasketballBall className="inline-block text-orange-500" /> basketball</span>, reading (mostly <span className="font-semibold"><FaBook className="inline-block text-red-500" /> manga</span>), exploring <span className="font-semibold"><FaFilm className="inline-block text-yellow-500" /> films</span>, and <span className="font-semibold"><FaGamepad className="inline-block text-green-500" /> gaming</span>. These hobbies inspire creativity and help me maintain a balanced lifestyle.
            </p>
            <p className="text-lg">
                Feel free to connect with me at <span className="font-bold"><FaEnvelope className="inline-block text-gray-500" /> mohamed.reda33@outlook.com</span>. I’m always open to collaboration opportunities, exciting projects, or simply exchanging ideas!
            </p>
        </div>
    );
};

export default Home;
