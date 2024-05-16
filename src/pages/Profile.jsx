import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUser, updateUserName } from "../features/user/userActions";
import { addSkills, removeAllSkills } from "../features/skills/skillsActions";
import { useSelector } from "react-redux";
import { clearLocalStorage } from "../app/store";

export default function Profile() {
  // STORE : récupère des données du user

  const user = useSelector((state) => state.user);
  const skills = useSelector((state) => state.skills.skills).join(",");
  const dispatch = useDispatch(); // pour exécuter les actions et modifier le store

  // afichage du message enregistrement ok
  const [showAlert, setShowAlert] = useState(false);

  // Soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    // récupérer les données du formulaire
    let formData = new FormData(event.target);
    let thisData = {};
    for (const [key, value] of formData.entries()) {
      thisData[key] = value;
    }

    // store.dispatch(action)
    dispatch(updateUserName(thisData.firstName, thisData.lastName));
    if (thisData.skills === "") {
      dispatch(removeAllSkills());
    } else {
      dispatch(addSkills(thisData.skills));
    }

    // afficher le message d'enregistrement ok
    setShowAlert(true);
  };

  // suprimer le profil
  const handleDelete = (event) => {
    dispatch(deleteUser());
    dispatch(removeAllSkills());
    clearLocalStorage();
    event.target.parentNode.reset();
  };

  return (
    <section>
      <h1>Profile</h1>

      <Form className="form-profile" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Prénom</Form.Label>
          <FormControl
            type="text"
            name="firstName"
            defaultValue={user.firstName ? user.firstName : ""}
            required
            onChange={() => setShowAlert(false)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <FormControl
            type="text"
            name="lastName"
            defaultValue={user.lastName ? user.lastName : ""}
            required
            onChange={() => setShowAlert(false)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Compétences</Form.Label>
          <FormControl
            type="search"
            name="skills"
            defaultValue={skills}
            onChange={() => setShowAlert(false)}
          />
        </Form.Group>
        <Button type="submit">Enregistrer</Button>
        {showAlert && <small className="text-success">OK enregistré</small>}
        <Button className="float-end" variant="danger" onClick={handleDelete}>
          Supprimer mon Profil
        </Button>
      </Form>
    </section>
  );
}
