import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@bruno-rd-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/bruno-rodrigues-d.png',
    alt: 'Bruno Rodrigues'
  },
  argTypes: {
    src: { 
      control: {
        type: 'text',
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}
