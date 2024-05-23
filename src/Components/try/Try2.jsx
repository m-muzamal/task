import React, { useState } from "react";

const Try2 = () => {
  const [dialog, setDialog] = useState(false);
  return (
    <div className="try">
      <button onClick={() => setDialog(!dialog)}>Open Dialog</button>

      <div popover>
        <p>Greetings, one and all!</p>
      </div>
    </div>
  );
};

export default Try2;
