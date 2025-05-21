import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1> Hello this is sailesh unique !</h1>;

//  React Functional Component 

const HeadingComponent = () => <h2> This is a react functional component ! </h2>

const HeadingComponent2 = () => {
    return (
        <div>
            <h1>This is a react functional component with a return statement</h1>
            {heading}
            {HeadingComponent()}
            <p>This is a paragraph</p>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);


// root.render(<HeadingComponent />);
root.render(<HeadingComponent2 />);