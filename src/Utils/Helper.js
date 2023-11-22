export function filterData(searchText, restaurants) {
  const filterDataVal = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterDataVal;
}
