import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Bachelors in Computer Engineering",
    desc: "IOE-Purwanchal Campus, Dharan | 2018 - 2022",
  },
  {
    title: "Higher Secondary Education",
    desc: "Sainik Awasiya Mahavidyalaya, Dharan | 2016 - 2018",
  },
  // {
  //   title: "IELTS 6.5",
  //   desc: "British Council Myanmar | 2017",
  // },
];

export default Education;
