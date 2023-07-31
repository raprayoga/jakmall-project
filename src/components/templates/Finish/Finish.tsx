import React from 'react'
import Tab from '@/components/modules/Tab'
import {
  Container,
  StyledContainer,
  StyledMain,
} from '@/components/templates/main-styling'
import FinishSummary, {
  FinishSummaryProps,
} from '@/components/modules/Finish/FinishSummary/FinishSummary'
import FinishThankYou, {
  FinishThankYouProps,
} from '@/components/modules/Finish/FinishThankYou/FinishThankYou'

interface PaymentProps extends FinishSummaryProps, FinishThankYouProps {}

export default function Finish({
  total,
  shipmentSelected,
  paymentSelected,
  itemAsDropshipper,
  costOfGood,
  orderId,
  handleToHome,
}: PaymentProps) {
  return (
    <Container>
      <Tab step={3} />
      <StyledMain>
        <StyledContainer>
          <div>
            <FinishThankYou
              orderId={orderId}
              shipmentSelected={shipmentSelected}
              handleToHome={handleToHome}
            />
          </div>
          <div>
            <FinishSummary
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
