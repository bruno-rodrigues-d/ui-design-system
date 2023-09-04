import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@bruno-rd-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi itaque, ipsam iste temporibus, similique quis quos tempore eos iure nulla adipisci? Modi at, quis vel sunt laborum earum officiis.'
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}
