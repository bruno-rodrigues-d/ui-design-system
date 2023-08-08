/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    previewTabs: {
      'storybook/docs/panel': { hidden: true }
    }
  },
};

export default preview;

export const parameters = {
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true
    }
  }
};