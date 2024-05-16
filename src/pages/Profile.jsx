import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateUserName } from "../actions/userActions";
import { addSkills } from "../actions/skillsActions";
import { useSelector } from "react-redux";

export default function Profile() {
  const getData = ()=> {
    const user = useSelector(state => state.user)
    const skills = useSelector(state => state.skills.skills)
    return {firstName: user.firstName, lastName: user.lastName, skills: skills.join(',')}
  }
  const [data, setData] = useState(getData());
  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let thisData = {};
    for (const [key, value] of formData.entries()) {
      thisData[key] = value;
    }
  
    dispatch(updateUserName(thisData.firstName, thisData.lastName));
    dispatch(addSkills(thisData.skills));
    setData(thisData);
  };


  return (
    <div>
      <h1>Profile</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Prénom</Form.Label>
          <FormControl
            type="text"
            name="firstName"
            defaultValue={data ? data.firstName : ""}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <FormControl
            type="text"
            name="lastName"
            defaultValue={data ? data.lastName : ""}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Compétences</Form.Label>
          <FormControl
            type="text"
            name="skills"
            defaultValue={data ? data.skills : ""}
          />
        </Form.Group>
        <Button type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
}
