import { Input } from "../ui";

export const InputSearch = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Input
        type="text"
        placeholder="Name"
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-1/4"
      />
    </>
  );
};
