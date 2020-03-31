import React from "react";
import { PersonInfoProps, Persons} from "./props/PersonInfoProps";

const PersonList: React.FC<Persons> = ({persons}) => {
  return (
      <>
        <tr>
          <th>社員番号</th>
          <th>名前</th>
          <th>部署</th>
          <th>等級</th>
        </tr>
        {persons.map(p => 
          <PersonRow {...p} key={p.id} />
        )}
      </>
  );
};

const PersonRow: React.FC<PersonInfoProps> = ({
  id,
  name,
  department,
  grade
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{department}</td>
      <td>{grade}</td>
    </tr>
  );
};

export default PersonList;
