
import { useSelector } from "react-redux";

export default function NavUserInfos() {
  const userName = useSelector((state) => state.user.fullName);
  const skillsCount = useSelector((state) => state.skills.skillsCount);
  const skillsText = `${skillsCount ? skillsCount : "Aucune"} compétence ${
    skillsCount > 1 ? "s" : ""
  }`;

  return (
    <div className="nav-user-infos">
      <strong>{userName}</strong>
      <br />
      <small>{skillsText}</small>
    </div>
  );
}
