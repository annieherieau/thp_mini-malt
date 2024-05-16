import { useSelector } from "react-redux";
import UnknownUser from "../features/user/UnknownUser";
import UserSkills from "../features/skills/UserSkills";

export default function Home() {
  const fullName = useSelector((state) => state.user.fullName);

  return (
    <section>
      <h1>Bienvenue {fullName}</h1>
      {fullName ? <UserSkills /> : <UnknownUser />}
    </section>
  );
}
