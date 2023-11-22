import { useState } from "react";
import { 
  createUser,
  fetchDepartments,
  fetchPositions,
  fetchRanks
} from "../api/usersApi";
import { useMutation,useQuery } from "react-query";
import DepartmentSelect from "./DepartmentSelect";
import PositionSelect from "./PositionSelect";
import RankSelect from "./RankSelect";

function CreateUserComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    department: '',
    position: '',
    rank: ''
  });
  const mutation = useMutation(createUser);

  const {data: departments} = useQuery("departments", fetchDepartments);
  const {data: positions} = useQuery("positions", fetchPositions);
  const {data: ranks} = useQuery("ranks", fetchRanks);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check the structure of formData before sending to verify it matches the expected format
      console.log(formData);
      await mutation.mutateAsync(formData);
    } catch (error) {
      console.error(error);
      // Handle error appropriately, like displaying an error message to the user
    }
  };

  const handleDepartmentChange = (value) => {
    setFormData({
      ...formData,
      department: { id: value },
    });
  };
  
  const handlePositionChange = (value) => {
    setFormData({
      ...formData,
      position: { id: value },
    });
  };
  
  const handleRankChange = (value) => {
    setFormData({
      ...formData,
      rank: { id: value },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Name"
        value={formData.firstName}
        onChange={(e) => setFormData({...formData, firstName: e.target.value})}  
      />
      <input 
        type="text"
        placeholder="Surname"
        value={formData.lastName}
        onChange={(e) => setFormData({...formData, lastName: e.target.value})}  
      />
      <DepartmentSelect
        departments={departments || []}
        onSelectDepartment={handleDepartmentChange}
      />
      <PositionSelect
        positions={positions || []}
        onSelectPosition={handlePositionChange}
      />
      <RankSelect
        ranks={ranks || []}
        onSelectRank={handleRankChange}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default CreateUserComponent;