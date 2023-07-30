import React from 'react'
import Tab from '../../modules/Tab'
import Title from '../../elements/Title'
import DeliveryForm, {
  DeliveryFormProps,
} from '../../modules/Delivery/DeliveryForm/DeliveryForm'
import DeliverSummary, {
  DeliverSummaryProps,
} from '../../modules/Delivery/DeliverSummary/DeliverSummary'
import Checkbox, { StyledCheckboxWraper } from '../../elements/Checkbox'
import Link from 'next/link'
import {
  StyledMain,
  StyledContainer,
  StyledTitleContaner,
} from './delivery-styling'

interface DeliveryProps extends DeliveryFormProps, DeliverSummaryProps {
  handleCheckAsDropshipper: (e: any) => void
}

export default function Delivery({
  control,
  errors,
  handleSubmit,
  onSubmit,
  isSendAsDropshipper,
  handleCheckAsDropshipper,
  dirtyFields,
  total,
}: DeliveryProps) {
  return (
    <div style={{ maxWidth: '1100px', margin: 'auto', padding: '20px' }}>
      <Tab step={1} />
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
                <Checkbox
                  variant="valid"
                  checked={isSendAsDropshipper}
                  onChange={handleCheckAsDropshipper}
                />
              </StyledCheckboxWraper>
            </StyledTitleContaner>
            <DeliveryForm
              control={control}
              errors={errors}
              dirtyFields={dirtyFields}
              isSendAsDropshipper={isSendAsDropshipper}
            />
          </div>
          <div>
            <DeliverSummary
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              isSendAsDropshipper={isSendAsDropshipper}
              total={total}
            />
          </div>
        </StyledContainer>
      </StyledMain>
    </div>
  )
}
