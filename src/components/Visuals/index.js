import Visual1 from "../images/Visual1.jpg";
import Visual2 from "../images/Visual2.jpg";
import Visual3 from "../images/Visual3.jpg";
import Visual4 from "../images/Visual4.jpg";
import Visual5 from "../images/Visual5.jpg";
import Visual6 from "../images/Visual6.jpg";
import Visual7 from "../images/Visual7.jpg";
import Visual8 from "../images/Visual8.jpg";
import Visual9 from "../images/Visual9.jpg";
import Visual10 from "../images/Visual10.jpg";
import "./index.css";

const Visuals = () => {
  return (
    <div className="main-container">
      <h1 className="header">Sample Static BI Visuals</h1>
      <div className="visual-container">
        <img className="img" src={Visual1} />
        <img className="img" src={Visual2} />
        <img className="img" src={Visual3} />
        <img className="img" src={Visual4} />
        <img className="img" src={Visual5} />
        <img className="img" src={Visual8} />
        <img className="img" src={Visual9} />
        <img className="img" src={Visual10} />
        <img className="img" src={Visual6} />
        <img className="img" src={Visual7} />
      </div>
    </div>
  );
};

export default Visuals;
