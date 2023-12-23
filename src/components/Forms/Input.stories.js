import Input from '../Forms/Input.vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Form/Forms/Input',
  component: Input,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Input },
  props: {
    placeholder: {
      default: text('Placeholder', 'Enter text...'),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    icon: {
      default: text('Icon', 'your-icon-name'), 
    },
  },
  template: `
    <Input
      :placeholder="placeholder"
      :disabled="disabled"
      :icon="icon"
      @on-change="handleChange"
    />
  `,
  methods: {
    handleChange(newValue) {
      console.log('Input changed:', newValue);
    },
  },
});
