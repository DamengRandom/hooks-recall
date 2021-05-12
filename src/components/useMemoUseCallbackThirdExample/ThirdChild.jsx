import React from 'react'

export default function ThirdChild({ fetcher }) {
  React.useEffect(() => {
    console.log('fecther called?');
    fetcher('users'); // only render once because we use useCallback in parent component !!!
    // fetcher('todos');
  }, [fetcher]);

  return (
    <div>
      Third Child
    </div>
  )
}
