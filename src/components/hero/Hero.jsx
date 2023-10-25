import "./hero.scss";
import Image from "/hero.png"

textVariants = {
    initial:{
        
    }
}

function Hero() {
    return (
        <div className="hero">

            <div className="wrapper">
                <div className="textContainer">
                    <h2>DIMANTHA</h2>
                    <h1>Software Engineer</h1>

                    <div className="buttons">
                        <button>See the Latest Works</button>
                        <button>Contact Me</button>
                    </div>

                    <img src="/scroll.png" alt="" />
                </div>
            </div>

            <div className="slidingTextContainer">
                Writer Content Creator Influencer
            </div>

            <div className="imageContainer">
                <img src={Image} alt="" />
            </div>
        </div>
    );
}

export default Hero