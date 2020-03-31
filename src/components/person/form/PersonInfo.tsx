import React from "react";
import { InputRefs } from "../PersonTable";

type PersonInfoProps = {
  inputRefs: InputRefs;
  handleSubmit: (e:React.MouseEvent<HTMLInputElement, MouseEvent>)=> void;
}

const PersonInfo: React.FC<PersonInfoProps> = ({inputRefs,handleSubmit}) => {
  return (
    <>
      <tr>
        <td><input type="number" ref={inputRefs.id}/></td>
        <td><input type="text" ref={inputRefs.name}/></td>
        <td><input type="text" ref={inputRefs.department}/></td>
        <td><input type="text" ref={inputRefs.grade}/></td>      
      </tr>
      <tr>
        <td><input type="submit" value="登録" onClick={(e)=>handleSubmit(e)}/></td>
      </tr>
    </>
  );
};

export default PersonInfo;
