import React from 'react';

const SecondChild = ({arrayReference}) => {
  console.log('will get rendered?');

  return (
    <div>
      <ul>
        {arrayReference.map(el => <li key={el}>{el}</li>)}
      </ul>
    </div>
  );
}

export default React.memo(SecondChild);
