import React from 'react'
import Input from '@/components/elements/Input'
import Textarea from '@/components/elements/Textarea'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { StyledContainer, StyledForm } from './deliveryform-styling'

type Inputs = {
  email: string
  phone: string
  dropshippername?: string
  dropshipperphone?: string
  deliveryaddress: string
}

export default function DeliveryForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <StyledForm
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        rowGap: '10px',
      }}
    >
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
              variant={errors.email ? 'invalid' : 'valid'}
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
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              variant={errors.dropshippername ? 'invalid' : 'valid'}
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
              variant={errors.dropshipperphone ? 'invalid' : 'valid'}
              placeholder="Phone Number"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="phone"
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
              variant={errors.phone ? 'invalid' : 'valid'}
              placeholder="Dropshipper phone number"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="dropshipperphone"
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
              variant={errors.deliveryaddress ? 'invalid' : 'valid'}
              placeholder="Dropshipper Address"
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="deliveryaddress"
        />
      </StyledContainer>
    </StyledForm>
  )
}
