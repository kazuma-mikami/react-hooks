import React, { useState, useRef } from "react";
import { PersonInfoProps } from "./props/PersonInfoProps";
import PersonList from "./PersonList";
import PersonInfo from "./form/PersonInfo";

const PersonTable: React.FC = () => {
  let initialPersons: PersonInfoProps[] = [];
  const [persons, setPersons] = useState(initialPersons);
  let initialInfo: PersonInfoProps = {
    id: 0,
    name: "",
    department: "",
    grade: ""
  };
  const [info, setInfo] = useState(initialInfo);
  const [showInputForm,setShowInputForm] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let _info = { ...info };

    switch (event.target.name) {
      case "id":
        _info.id = Number(event.target.value);
        break;
      case "name":
        _info.name = event.target.value;
        break;
      case "department":
        _info.department = event.target.value;
        break;
      case "grade":
        _info.grade = event.target.value;
        break;
    }
    setInfo(_info);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    let _persons = [ ...persons ];
    _persons.push(info);
    setPersons(_persons);
    setInfo(initialInfo);
    setShowInputForm(false);
  };

  const handleShowInputForm = () => {
    setShowInputForm(!showInputForm);
  };

  return (
    <table>
      <tbody>
        <PersonList persons={persons} />
        {showInputForm?
        <PersonInfo value={info} handleChange={handleChange} handleSubmit={handleSubmit} /> :
        <tr><td><input type="submit" value="+" onClick={()=>handleShowInputForm()}/></td></tr>
        }
      </tbody>
    </table>
  );
};

export default PersonTable;
