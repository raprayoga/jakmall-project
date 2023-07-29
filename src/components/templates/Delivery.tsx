import React from 'react'
import Tab from '../modules/Tab'
import DeliveryForm from '../modules/DeliveryForm/DeliveryForm'

export default function Delivery() {
  return (
    <div style={{ maxWidth: '1100px', margin: 'auto', padding: '20px' }}>
      <Tab style={{ margin: 'auto', position: 'relative', zIndex: '99' }} />
      <main
        style={{
          backgroundColor: '#FFF',
          padding: '40px',
          position: 'relative',
          top: '-35px',
        }}
      >
        <DeliveryForm />
      </main>
    </div>
  )
}
