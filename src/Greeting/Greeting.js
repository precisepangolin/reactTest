//const Greeting = () => <h1>Hello World!</h1>

function Greeting(props) {
    return (
        <div>
            <h1 style={{"color": "burlywood"}}>Hello {props.name}!</h1>
        </div>
    );
}

export default Greeting;