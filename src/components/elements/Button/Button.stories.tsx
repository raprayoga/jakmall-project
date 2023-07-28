import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    children: 'Button',
    isDisabled: true
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  render: (args) => {
    return <Button style={{ width: '300px' }} {...args} onClick={action('onCLick!')}>Button</Button>
  }
}
