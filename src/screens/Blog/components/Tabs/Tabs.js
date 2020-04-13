import React, { useMemo, useState } from 'react';

import { Wrapper, Tab } from './styled';

const Tabs = () => {
  const [selected, setSelected] = useState('Market trends');

  const tabs = useMemo(
    () => [
      'All',
      'Market trends',
      'Home inmprovement',
      'First person',
      'Unique homes',
      'Tips & advise',
    ],
    [],
  );

  return (
    <Wrapper>
      {tabs.map((tab, index) => (
        <Tab key={index} selected={tab === selected} onClick={() => setSelected(tab)}>
          {tab}
        </Tab>
      ))}
    </Wrapper>
  );
};

export { Tabs };
