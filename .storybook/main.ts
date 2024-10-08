import type { StorybookConfig } from "@storybook/nextjs";

const path = require('path')

const config: StorybookConfig = {
  stories: [
    // "../stories/**/*.mdx",
    "../app/ui//**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y', //アクセシビリティの担保
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config: any) => {
    // Add path aliases
    config.resolve.alias['@'] = path.resolve(__dirname, '../app/')
    return config
  },
};
export default config;
