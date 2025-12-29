import React from "react";

// Component that will return an unordered list
function Navmenu(props) {
  const list = props.menuitems;

  const updatedList = list.map((listItems) => {
    return <li key={listItems.toString()}>{listItems}</li>;
  });

  return (
    <div>
      <ul>{updatedList}</ul>
    </div>
  );
}

export default Navmenu;
