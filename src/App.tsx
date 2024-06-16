import React from 'react';
import { NewDemo } from '@caokejian/nuwa-components/package/new-demo'
import { NewDemoTwo } from '@caokejian/nuwa-components/package/new-demo-two'
const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, React with TypeScript!</h1>
      <NewDemo />
      <NewDemoTwo />
    </div>
  );
};

export default App;
