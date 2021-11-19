const FloorFinder = (building, roomNumber) => {
  let floor = "";
  if (building == "bec") floor = "bec";
  else building == "pft";
  if (roomNumber < 2000) floor = "pft1";
  else if (roomNumber < 3000) floor = "pft2";
  else if (building == "loc") {
    if (roomNumber < 100) floor = "locb";
    else if (roomNumber < 200) floor = "loc1";
    else floor = "loc2";
  }
  return floor;
};

export default FloorFinder;
