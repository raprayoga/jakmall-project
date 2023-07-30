import React from 'react'
import Input from '@/components/elements/Input'
import Textarea from '@/components/elements/Textarea'
import {
  StyledContainer,
  StyledForm,
  StyledLeftForm,
  StyledRightForm,
} from './deliveryform-styling'
import { Controller, Control, FieldErrors } from 'react-hook-form'
import { Inputs } from '@/pages/delivery'

export interface DeliveryFormProps {
  isSendAsDropshipper: boolean
  control: Control<Inputs, any>
  errors: FieldErrors<Inputs>
  dirtyFields: Partial<
    Readonly<{
      email?: boolean
      phone?: boolean
      dropshippername?: boolean
      dropshipperphone?: boolean
      deliveryaddress?: boolean
    }>
  >
}

function getVariant(dirty: boolean, error: boolean) {
  if (error) {
    return 'invalid'
  }
  return !dirty ? 'default' : 'valid'
}

export default function DeliveryForm({
  control,
  errors,
  dirtyFields,
  isSendAsDropshipper,
}: DeliveryFormProps) {
  return (
    <StyledForm
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        columnGap: '5px',
      }}
    >
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
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant={getVariant(!!dirtyFields.email, !!errors.email)}
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
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant={getVariant(!!dirtyFields.phone, !!errors.phone)}
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
            render={({ field: { onChange, onBlur, value } }) => (
              <Textarea
                variant={getVariant(
                  !!dirtyFields.deliveryaddress,
                  !!errors.deliveryaddress
                )}
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
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  variant={getVariant(
                    !!dirtyFields.dropshippername,
                    !!errors.dropshippername
                  )}
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
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  variant={getVariant(
                    !!dirtyFields.dropshipperphone,
                    !!errors.dropshipperphone
                  )}
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
