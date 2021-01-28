import React from 'react';

const FirstChild = () => {
  console.log('will get rendered?');
  return (
    <div>
      Child
    </div>
  );
}

export default React.memo(FirstChild);
