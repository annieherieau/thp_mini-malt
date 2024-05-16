import { useSelector } from "react-redux";

export default function UserSkills() {
  const { skills, skillsCount } = useSelector((state) => state.skills);

  return (
    <>
      <h2>Vos compétences</h2>
      {skillsCount > 0 && <div>
        {skills.map((skill, i) => <div key={i}>{skill}</div>)}
        </div>}
    </>
  );
}
