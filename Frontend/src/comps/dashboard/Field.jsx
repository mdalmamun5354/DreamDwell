import React from 'react'
import Hotels from './fields/Hotels';
import AddHotel from './fields/AddHotel';

export default function Field({selected, setSelected}) {
  
  return (
    <>
      {selected === 'hotels' ? <Hotels setSelected={setSelected} /> : null}
      {selected === 'addNewHotel' ? <AddHotel setSelected={setSelected}/> : null}
    </>
  )
}
