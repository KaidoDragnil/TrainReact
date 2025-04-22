import { useState } from 'react';
import ClickCounter from '../ClickCounter/ClickCounter';

const Game1 = () => {
  const [clicks, setClicks] = useState(0);
  const [clicks2, setClicks2] = useState(0);
  const [clicks3, setClicks3] = useState(0);
  const [clicks4, setClicks4] = useState(0);
  const [clicks5, setClicks5] = useState(0);

  const handleClick = () => {
    clicks5 <= 2 ? setClicks5(clicks5 + 1) : setClicks5(0);
    clicks <= 2 ? setClicks(clicks + 1) : setClicks(0);
    clicks2 <= 2 ? setClicks2(clicks2 + 1) : setClicks2(0);
  };
  const handleClick2 = () => {
    clicks <= 2 ? setClicks(clicks + 1) : setClicks(0);
    clicks2 <= 2 ? setClicks2(clicks2 + 1) : setClicks2(0);
    clicks3 <= 2 ? setClicks3(clicks3 + 1) : setClicks3(0);
  };
  const handleClick3 = () => {
    clicks2 <= 2 ? setClicks2(clicks2 + 1) : setClicks2(0);
    clicks3 <= 2 ? setClicks3(clicks3 + 1) : setClicks3(0);
    clicks4 <= 2 ? setClicks4(clicks4 + 1) : setClicks4(0);
  };
  const handleClick4 = () => {
    clicks3 <= 2 ? setClicks3(clicks3 + 1) : setClicks3(0);
    clicks4 <= 2 ? setClicks4(clicks4 + 1) : setClicks4(0);
    clicks5 <= 2 ? setClicks5(clicks5 + 1) : setClicks5(0);
  };
  const handleClick5 = () => {
    clicks4 <= 2 ? setClicks4(clicks4 + 1) : setClicks4(0);
    clicks5 <= 2 ? setClicks5(clicks5 + 1) : setClicks5(0);
    clicks <= 2 ? setClicks(clicks + 1) : setClicks(0);
  };

  return (
    <div style={{ margin: '20px 30px' }}>
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks2} onUpdate={handleClick2} />
      <ClickCounter value={clicks3} onUpdate={handleClick3} />
      <ClickCounter value={clicks4} onUpdate={handleClick4} />
      <ClickCounter value={clicks5} onUpdate={handleClick5} />
    </div>
  );
};

export default Game1;
