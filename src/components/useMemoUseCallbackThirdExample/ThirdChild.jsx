import React from 'react'

export default function ThirdChild({ fetcher }) {
  React.useEffect(() => {
    console.log('fecther called?');
    fetcher('todos');
  }, [fetcher]);

  return (
    <div>
      Third Child
    </div>
  )
}
