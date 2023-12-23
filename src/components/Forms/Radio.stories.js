import Radio from '../Forms/Radio.vue';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Form/Forms/Radio',
  component: Radio,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Radio },
  props: {
    label: {
      default: text('Label', 'Radio Label'),
    },
    checked: {
      default: boolean('Checked', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
  },
  template: `
    <Radio
      :label="label"
      :modelValue="checked"
      :disabled="disabled"
      @update:modelValue="handleChange"
    />
  `,
  methods: {
    handleChange(newValue) {
      console.log('Radio changed:', newValue);
    },
  },
});
