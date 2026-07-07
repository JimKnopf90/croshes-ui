import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';
import 'react-day-picker/style.css';
import './tailwind.css';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: { disable: true },
  },
  decorators: [
    withThemeByClassName({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
    }),
    (Story) => (
      <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 p-8 text-gray-900 dark:text-white">
        <Story />
      </div>
    ),
  ],
};

export default preview;
