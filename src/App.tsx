import React, { useEffect } from 'react';
import { Demo } from '@caokejian/nuwa-components/package'
import { DemoTwo } from '@caokejian/nuwa-components/package'
import { useButtonStore } from './store';
import { initMethods } from './tools';


const App: React.FC = () => {
  initMethods() // 初始化公共方法
  const { label, getLabel } = useButtonStore()

  return (
    <div>
      <Demo label=''/>
      <DemoTwo label='xxx' />
    </div>
  );
};

export default App;
