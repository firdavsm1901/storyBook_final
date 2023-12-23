import Checkbox from '../Forms/Checkbox.vue';
import { withKnobs, boolean, text, color } from '@storybook/addon-knobs';

export default {
  title: 'Form/Forms/Checkbox',
  component: Checkbox,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { Checkbox },
  props: {
    label: {
      default: text('Label', 'Checkbox Label'),
    },
    checked: {
      default: boolean('Checked', false),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    customColor: {
      default: color('Color', '#3D3D3D'),
    },
  },
  template: `
    <Checkbox
      :label="label"
      :checked="checked"
      :disabled="disabled"
      :customColor="customColor"
      @onChange="handleChange"
    />
  `,
  methods: {
    handleChange(checked) {
      console.log('Checkbox changed:', checked);
    },
  },
});
