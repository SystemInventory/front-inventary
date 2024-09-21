
export const getFilter = (items,searchTerm) => {
 const itemFilter = items.filter((item) =>
    item.name?.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  return{
    itemFilter
  }
};
