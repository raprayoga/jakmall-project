import React from 'react'
import Tab from '../../modules/Tab'
import Title from '../../elements/Title'
import DeliveryForm from '../../modules/Delivery/DeliveryForm/DeliveryForm'
import Checkbox, { StyledCheckboxWraper } from '../../elements/Checkbox'
import Link from 'next/link'
import DeliverSummary from '../../modules/Delivery/DeliverSummary/DeliverSummary'
import {
  StyledMain,
  StyledContainer,
  StyledTitleContaner,
} from './delivery-styling'

export default function Delivery() {
  return (
    <div style={{ maxWidth: '1100px', margin: 'auto', padding: '20px' }}>
      <Tab style={{ margin: 'auto', position: 'relative', zIndex: '99' }} />
      <StyledMain>
        <Link
          style={{ marginLeft: '28px', color: '#2d2a40cc', fontSize: '14px' }}
          href={'/delivery'}
        >
          Back to cart
        </Link>
        <StyledContainer>
          <div>
            <StyledTitleContaner>
              <Title>Delivery details</Title>
              <StyledCheckboxWraper
                style={{ color: '#2d2a40cc', fontSize: '14px' }}
              >
                <p>Send as dropshipper</p>
                <Checkbox variant="valid" />
              </StyledCheckboxWraper>
            </StyledTitleContaner>
            <DeliveryForm />
          </div>
          <div>
            <DeliverSummary />
          </div>
        </StyledContainer>
      </StyledMain>
    </div>
  )
}
