
import styled , { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Hero from "./components/section/Hero";
import Skills  from "./components/section/Skills";
import Contact from "./components/section/Contact";


const Body =styled.div`
background-color:${({ theme }) => theme.bg};
color:white;
width:100%;
height:100vh;

overflow-x:hidden;
position:relative;
`;

function App() {
  return <ThemeProvider theme={darkTheme} >
    <Body>
      <Hero />
      <Skills />
     <Contact />
    </Body>
    </ThemeProvider>
}

export default App;
