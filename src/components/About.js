import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{
    return (
        <div>
            <h1>About Us</h1>
            <p>Namaste React is a React application designed to showcase a restaurant menu.</p>
            {/* <User name = {"AkshaySaini(function)"}/> */}
            <UserClass name = {"AkshaySaini(Classss)"} location = {"DehraDun(class)"}/>
        </div>
    )
};

export default About;