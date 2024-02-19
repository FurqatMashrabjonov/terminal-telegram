import {EduIntro, EduList} from "../styles/Education.styled";
import {Wrapper} from "../styles/Output.styled";

const Education: React.FC = () => {
    return (
        <Wrapper data-testid="education">
            <EduIntro>Here is my education background!</EduIntro>
            {eduBg.map(({title, desc}) => (
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
        title: "Telecommunication Technologies & Software Engineering",
        desc: "Tashkent University of Information Technologies | 2019 - 2023",
    },
    {
        title: "Software Engineer",
        desc: "NAPA EDU HUB (Bobir Akilkhanov) | 2019 - 2020",
    },
];

export default Education;
