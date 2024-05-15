import { useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let thisData = {};
    for (const [key, value] of formData.entries()) {
        thisData[key] = value;
    }
    setData(thisData);
  };

  return (
    <div>
      <h1>Profile</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Prénom</Form.Label>
          <FormControl type="text" name="firstName" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nom</Form.Label>
          <FormControl type="text" name="lastName" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Compétences</Form.Label>
          <FormControl type="text" name="skills" />
        </Form.Group>
        <Button type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
}
