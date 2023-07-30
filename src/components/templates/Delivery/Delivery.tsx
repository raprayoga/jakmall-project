import React from 'react'
import Tab from '@/components/modules/Tab'
import Title from '@/components/elements/Title'
import DeliveryForm, {
  DeliveryFormProps,
} from '@/components/modules/Delivery/DeliveryForm/DeliveryForm'
import DeliverSummary, {
  DeliverSummaryProps,
} from '@/components/modules/Delivery/DeliverSummary/DeliverSummary'
import Checkbox, { StyledCheckboxWraper } from '@/components/elements/Checkbox'
import {
  StyledMain,
  StyledContainer,
  StyledTitleContainer,
  StyledLinkBack,
  Container,
} from '@/components/templates/main-styling'

interface DeliveryProps extends DeliveryFormProps, DeliverSummaryProps {
  handleCheckAsDropshipper: (e: any) => void
}

export default function Delivery({
  control,
  handleSubmit,
  onSubmit,
  isSendAsDropshipper,
  handleCheckAsDropshipper,
  total,
  dropshipperFee,
}: DeliveryProps) {
  return (
    <Container>
      <Tab step={1} />
      <StyledMain>
        <StyledLinkBack href={'/delivery'}>Back to cart</StyledLinkBack>
        <StyledContainer>
          <div>
            <StyledTitleContainer>
              <Title>Delivery details</Title>``
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
            </StyledTitleContainer>
            <DeliveryForm
              control={control}
              isSendAsDropshipper={isSendAsDropshipper}
            />
          </div>
          <div>
            <DeliverSummary
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              isSendAsDropshipper={isSendAsDropshipper}
              total={total}
              dropshipperFee={dropshipperFee}
            />
          </div>
        </StyledContainer>
      </StyledMain>
    </Container>
  )
}
