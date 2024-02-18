import logo from "../assets/logo.png";
import classes from "./Header.module.css";
//this is how we use css modules to style by adding .module and importing an object we can name as above and then putting it inside dynamic braces with .(nameof class,id etc)
//
//problem is vanilla css is not scoped so any change in element in header.css will affect all such other elements from index.css so we use inline styles
// style={{ color: "red", textAlign: "left" }} this is how you apply inline styles in jsx by using dynamic curly braces and then passing an object {} of key,value props such as above


//NOW WE WILL USE STYLED COMPONENTS FOR NESTED RULES AND PSEUDO SELECTORS
import { styled } from "styled-components";
//also we style the children elements inside an element with & see below and for hovering,focusing we use ' &:hover ' with no whitspaces see Buttons
const StyledHeader = styled.header`
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #a39191;
    margin: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;

    & h1 {
      font-size: 2.25rem;
    }
  }
`;
export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p style={{ color: "red", textAlign: "left" }}>
        A community of artists and art-lovers.
      </p>
    </StyledHeader>
  );
}
