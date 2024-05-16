import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DisplaySkill from "./DisplaySkill";

export default function UserSkills() {
  const { skills, skillsCount } = useSelector((state) => state.skills);

  return (
    <>
      <h2>Vos compétences</h2>
      {skillsCount > 0 && (
        <ListGroup>
          {skills.map((skill, i) => (
            <DisplaySkill skill={skill} key={i} />
          ))}
        </ListGroup>
      )}
      <Link to="/profile">Modifier les Compétences</Link>
    </>
  );
}
