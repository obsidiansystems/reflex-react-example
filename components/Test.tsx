'use client';

import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SimplePropsTypescript, SimplePropsHaskell, SimplePropsReflex } from './SimpleProps';
import { SimpleStateTypescript, SimpleStateHaskell, SimpleStateReflex } from './SimpleState';

export default function Test() {
  const [v, setV] = useState(0);
  return (
    <Tabs>
      <TabList>
        <Tab>Simple Props</Tab>
        <Tab>Simple State</Tab>
      </TabList>

      <TabPanel>
        v: <input type="number" value={v.toString()} onChange={e => setV(Number(e.target.value))} />
        <h2>Typescript</h2>
        <div><SimplePropsTypescript v={v} /></div>
        <h2>Haskell</h2>
        <div><SimplePropsHaskell v={v} /></div>
        <h2>Reflex</h2>
        <div><SimplePropsReflex v={v} /></div>
      </TabPanel>

      <TabPanel>
        <h2>Typescript</h2>
        <div><SimpleStateTypescript v={v} /></div>
        <h2>Haskell</h2>
        <div><SimpleStateHaskell v={v} /></div>
        <h2>Reflex</h2>
        <div><SimpleStateReflex v={v} /></div>
      </TabPanel>
    </Tabs>
  )
}
