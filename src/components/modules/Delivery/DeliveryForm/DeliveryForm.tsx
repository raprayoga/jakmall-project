import React from 'react'
import Input from '@/components/elements/Input'
import Textarea from '@/components/elements/Textarea'
import {
  StyledContainer,
  StyledForm,
  StyledLeftForm,
  StyledRightForm,
} from './deliveryform-styling'
import { Controller, Control } from 'react-hook-form'
import { Inputs } from '@/pages/delivery'

export interface DeliveryFormProps {
  isSendAsDropshipper: boolean
  control: Control<Inputs, any>
}

function getVariant(dirty: boolean, error: boolean) {
  if (error) {
    return 'invalid'
  }
  return !dirty ? 'default' : 'valid'
}

export default function DeliveryForm({
  control,
  isSendAsDropshipper,
}: DeliveryFormProps) {
  return (
    <StyledForm>
      <StyledLeftForm>
        <StyledContainer>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isDirty, error },
            }) => (
              <Input
                variant={getVariant(isDirty, !!error)}
                placeholder="Email"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="email"
          />
        </StyledContainer>

        <StyledContainer>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value:
                  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                message: 'Phone Number value does not match format',
              },
              minLength: 6,
              maxLength: 20,
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isDirty, error },
            }) => (
              <Input
                variant={getVariant(isDirty, !!error)}
                placeholder="Phone Number"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="phone"
          />
        </StyledContainer>

        <StyledContainer style={{ height: '120px' }}>
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 120,
            }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isDirty, error },
            }) => (
              <Textarea
                variant={getVariant(isDirty, !!error)}
                placeholder="Dropshipper Address"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
            )}
            name="deliveryaddress"
          />
        </StyledContainer>
      </StyledLeftForm>

      {isSendAsDropshipper && (
        <StyledRightForm>
          <StyledContainer>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { isDirty, error },
              }) => (
                <Input
                  variant={getVariant(isDirty, !!error)}
                  placeholder="Dropshipper name"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="dropshippername"
            />
          </StyledContainer>

          <StyledContainer>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: {
                  value:
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
                  message: 'Phone Number value does not match format',
                },
                minLength: 6,
                maxLength: 20,
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { isDirty, error },
              }) => (
                <Input
                  variant={getVariant(isDirty, !!error)}
                  placeholder="Dropshipper phone number"
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="dropshipperphone"
            />
          </StyledContainer>
        </StyledRightForm>
      )}
    </StyledForm>
  )
}
