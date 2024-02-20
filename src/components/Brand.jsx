import "./Brand.css";
import Logo from "../assets/imgs/coffebreak-logo.png";

const Home = () => {
    return (
        <div className="main">
            <header className="home-header">
                <img src={Logo} />
            </header>
        </div>
    )
};

export default Home;