import React from "react";

function ClickButton() {
  const [likes, setLikes] = React.useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default ClickButton;
