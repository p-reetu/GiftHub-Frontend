import Main from "../components/Main";
import Nav from "../components/Nav";

export default function HomePage(props) {
    return(
        <div>
            <Nav/>
            <Main gifts={props.gifts} />
        </div>
    )
}