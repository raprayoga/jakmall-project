import React from 'react'
import Tab from '@/components/modules/Tab'
import {
  Container,
  StyledContainer,
  StyledLinkBack,
  StyledMain,
} from '@/components/templates/main-styling'
import PaymentForm, {
  PaymentFormProps,
} from '@/components/modules/Payment/PaymentForm/PaymentForm'
import PaymentSummary, {
  PaymentSummaryProps,
} from '@/components/modules/Payment/PaymentSummary/PaymentSummary'

interface PaymentProps extends PaymentFormProps, PaymentSummaryProps {}

export default function Payment({
  control,
  errors,
  handleSubmit,
  onSubmit,
  total,
  shipmentSelected,
  handleSelectShipment,
  paymentSelected,
  handleSelectPayment,
  itemAsDropshipper,
  shipmentServices,
  paymentServices,
  costOfGood,
}: PaymentProps) {
  return (
    <Container>
      <Tab step={2} />
      <StyledMain>
        <StyledLinkBack href={'/delivery'}>Back to delivery</StyledLinkBack>
        <StyledContainer>
          <div>
            <PaymentForm
              control={control}
              errors={errors}
              shipmentSelected={shipmentSelected}
              handleSelectShipment={handleSelectShipment}
              paymentSelected={paymentSelected}
              handleSelectPayment={handleSelectPayment}
              shipmentServices={shipmentServices}
              paymentServices={paymentServices}
            />
          </div>
          <div>
            <PaymentSummary
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              total={total}
              itemAsDropshipper={itemAsDropshipper}
              shipmentSelected={shipmentSelected}
              paymentSelected={paymentSelected}
              costOfGood={costOfGood}
            />
          </div>
        </StyledContainer>
      </StyledMain>
    </Container>
  )
}
