import React, { useState, useMemo } from 'react';

// Parent Component
  const Parent= () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const squaredValue = useMemo(() => {
    console.log('Calculating squared value');
    return count * count;
  }, [count]); 

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Squared Value: {squaredValue}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something"
      />
      <p>typoe..{input}</p>
    </div>
  );
};

export default Parent;