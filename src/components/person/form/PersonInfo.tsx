import React from "react";
import {PersonInfoProps as PersonDataProps} from "../props/PersonInfoProps";

type PersonInfoProps = {
  value: PersonDataProps;
  handleChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
  handleSubmit: (e:React.MouseEvent<HTMLInputElement, MouseEvent>)=> void;
}

const PersonInfo: React.FC<PersonInfoProps> = ({value,handleChange,handleSubmit}) => {
  return (
    <>
      <tr>
        <td><input type="number" name="id" value={value.id !== 0? value.id:""} onChange={(e)=>handleChange(e)}/></td>
        <td><input type="text" name="name" value={value.name} onChange={(e)=>handleChange(e)}/></td>
        <td><input type="text" name="department" value={value.department} onChange={(e)=>handleChange(e)}/></td>
        <td><input type="text" name="grade" value={value.grade} onChange={(e)=>handleChange(e)}/></td>      
      </tr>
      <tr>
        <td><input type="submit" value="登録" onClick={(e)=>handleSubmit(e)}/></td>
      </tr>
    </>
  );
};

export default PersonInfo;
