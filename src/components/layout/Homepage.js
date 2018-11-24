import React from 'react';
import Switcher from '../switcher/Switcher'
import EventList from '../../containers/EventList';


export default function Homepage(props) {
  return (
    <div>
      <div style={{fontSize: '30px', fontWeight: 'bold', background: 'black', color: 'white', padding: '10px 0 0 30px'}}>
          Discover
      </div>
      <Switcher />
      <EventList />
    </div>
  )
}
