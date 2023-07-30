import React from 'react'
import Title from '@/components/elements/Title'
import { Inputs } from '@/pages/payment'
import { Control, Controller, FieldErrors } from 'react-hook-form'
import { PaymentService, ShipmentService } from '@/interfaces/payment'
import { StyledTitleContainer } from '@/components/templates/main-styling'
import {
  RadioButton,
  StyledErrorMessage,
  StyledRadio,
  StyledRadioCard,
  StyledRadioWraper,
} from './paymentform-styling'

interface ShipmentServicesProps {
  shipmentSelected: ShipmentService
  handleSelectShipment: (e: ShipmentService) => void
  shipmentServices: ShipmentService[]
  control: Control<Inputs, any>
}

interface PaymentServicesProps {
  paymentSelected: PaymentService
  handleSelectPayment: (e: PaymentService) => void
  paymentServices: PaymentService[]
  control: Control<Inputs, any>
}

export interface PaymentFormProps
  extends ShipmentServicesProps,
    PaymentServicesProps {
  errors: FieldErrors<Inputs>
}

const ShipmentServices = ({
  shipmentSelected,
  handleSelectShipment,
  shipmentServices,
  control,
}: ShipmentServicesProps) => {
  return (
    <StyledRadioWraper>
      {shipmentServices.map((shipment) => (
        <Controller
          key={shipment.service}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, ...props } }) => (
            <RadioButton>
              <StyledRadio
                {...props}
                onChange={onChange}
                value={shipment.service}
              />
              <StyledRadioCard
                variant={
                  shipmentSelected.service === shipment.service
                    ? 'valid'
                    : 'default'
                }
                onClick={() => handleSelectShipment(shipment)}
              >
                <p>{shipment.service}</p>
                <p>{new Intl.NumberFormat('en-US').format(shipment.price)}</p>
              </StyledRadioCard>
            </RadioButton>
          )}
          name="shipment"
        />
      ))}
    </StyledRadioWraper>
  )
}

const PaymentServices = ({
  paymentSelected,
  handleSelectPayment,
  paymentServices,
  control,
}: PaymentServicesProps) => {
  return (
    <StyledRadioWraper>
      {paymentServices.map((payment) => (
        <Controller
          key={payment.service}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, ...props } }) => (
            <RadioButton>
              <StyledRadio
                {...props}
                onChange={onChange}
                value={payment.service}
              />
              <StyledRadioCard
                variant={
                  paymentSelected.service === payment.service
                    ? 'valid'
                    : 'default'
                }
                onClick={() => handleSelectPayment(payment)}
              >
                <p>{payment.balance !== null ? payment.service : ''}</p>
                <p>
                  {payment.balance !== null
                    ? new Intl.NumberFormat('en-US').format(payment.balance)
                    : payment.service}
                </p>
              </StyledRadioCard>
            </RadioButton>
          )}
          name="payment"
        />
      ))}
    </StyledRadioWraper>
  )
}

export default function PaymentForm({
  shipmentSelected,
  handleSelectShipment,
  shipmentServices,
  paymentServices,
  handleSelectPayment,
  paymentSelected,
  control,
  errors,
}: PaymentFormProps) {
  return (
    <>
      <div>
        <StyledTitleContainer>
          <Title>Shipment</Title>
        </StyledTitleContainer>
        <ShipmentServices
          shipmentSelected={shipmentSelected}
          handleSelectShipment={handleSelectShipment}
          shipmentServices={shipmentServices}
          control={control}
        />
        {errors.shipment && (
          <StyledErrorMessage>Shipment field is required</StyledErrorMessage>
        )}
      </div>

      <div>
        <StyledTitleContainer>
          <Title>Payment</Title>
        </StyledTitleContainer>
        <PaymentServices
          paymentSelected={paymentSelected}
          handleSelectPayment={handleSelectPayment}
          paymentServices={paymentServices}
          control={control}
        />
        {errors.payment && (
          <StyledErrorMessage>Payment field is required</StyledErrorMessage>
        )}
      </div>
    </>
  )
}
