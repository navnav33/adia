import './Form.css';
import {useState} from 'react';

// Prevents button from submitting the form data and refreshing the page ins react JS
const handleSubmit = (event) => {
    event.preventDefault();
}

// Renders a button which changes color from default black to red once clicked
function Button() {
    const [color, setColor] = useState("black");
    return (
        <>
            <button onClick={() => setColor("red")} className={`btn-`+color} >Change Color</button>
        </>
    );
}

// Renders two user fields and a paragraph which displays user input
function UserFields() {
    const [inputValue, setValue] = useState("");
    const [inputValue2, setValue2] = useState("");
    return (
        <>
            <input type="text" className="user" placeholder="Enter your username" onChange={(event) => setValue(event.target.value)}/><br />
            <input type="text" className="user" placeholder="Enter your company name" onChange={(event) => setValue2(event.target.value)}/>
            <p className="results">{inputValue+' '+inputValue2}</p>
        </>
    );
}

function Form() {

    return (
    <div className="Form" onSubmit={handleSubmit}>
        <header className="App-header">
            <form className="adia-form">
                <UserFields />
                <Button />
            </form>
        </header>
    </div>
  );
}
export default Form;
