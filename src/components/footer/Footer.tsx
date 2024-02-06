import { Container } from "react-bootstrap";
import FooterStyle from "./FooterStyle";
import { DataProps } from "src/data/DataProps";


const Footer = (data: DataProps) => {
  return (
    <Container fluid style={{ backgroundColor: '#262b35' }}>
      <FooterStyle {...data}/>
    </Container>
  )
};

export default Footer;
