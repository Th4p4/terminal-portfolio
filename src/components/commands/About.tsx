import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Sandip Thapa</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a NodeJs/Blockchain developer</HighlightAlt> based in,
        Nepal.
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications on server side and decentralized systems.
      </p>
    </AboutWrapper>
  );
};

export default About;
