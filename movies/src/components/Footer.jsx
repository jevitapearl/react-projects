import { FaRegCopyright } from "react-icons/fa";

function Footer(){
  const date = new Date()

  const year = date.getFullYear()

  return(
    <div className="footer">
      <span><FaRegCopyright/> {year}</span>
      <span>Creation by J.Pearl</span>
      <span><a href="https://jevitapearl.github.io/">Visit my portfolio here</a></span>
    </div>
  );
}

export default Footer;