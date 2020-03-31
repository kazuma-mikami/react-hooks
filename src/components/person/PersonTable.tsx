import React, { useState, useRef, useReducer } from "react";
import { PersonInfoProps } from "./props/PersonInfoProps";
import PersonList from "./PersonList";
import PersonInfo from "./form/PersonInfo";

export type InputRefs = {
  id: React.RefObject<HTMLInputElement>
  name: React.RefObject<HTMLInputElement>
  department: React.RefObject<HTMLInputElement>
  grade: React.RefObject<HTMLInputElement>
}

const PersonTable: React.FC = () => {
  const [showInputForm,setShowInputForm] = useState(false);
  const inputRefs: InputRefs = {
    id: useRef<HTMLInputElement>(null),
    name: useRef<HTMLInputElement>(null),
    department: useRef<HTMLInputElement>(null),
    grade: useRef<HTMLInputElement>(null),
  }
  const [persons, dispatch] = useReducer((state:PersonInfoProps[],action:any) =>{
    return [
      ...state,
      {
        id: action.id,
        name: action.name,
        department: action.department,
        grade: action.grade,
      }
    ];
  },[]);

  const handleSubmit = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    event.preventDefault();
    
    if(inputRefs && 
      inputRefs.id.current && 
      inputRefs.name.current &&
      inputRefs.department.current &&
      inputRefs.grade.current
      ){
        dispatch({
          id: inputRefs.id.current.value,
          name: inputRefs.name.current.value,
          department: inputRefs.department.current.value,
          grade: inputRefs.grade.current.value,
        });
    }
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
        <PersonInfo inputRefs={inputRefs} handleSubmit={handleSubmit} /> :
        <tr><td><input type="submit" value="+" onClick={()=>handleShowInputForm()}/></td></tr>
        }
      </tbody>
    </table>
  );
};

export default PersonTable;
