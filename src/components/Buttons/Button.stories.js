import BButton from '../Buttons/Button.vue'; 
import { withKnobs, text, boolean, select, object } from '@storybook/addon-knobs';

export default {
  title: 'Form/Buttons/Button',
  component: BButton,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { BButton },
  props: {
    label: {
      default: text('Label', 'Click me'), 
    },
    autofocus: {
      default: boolean('Autofocus', false),
    },
    btnStyle: {
      default: object('Button Style', {}),
    },
    disabled: {
      default: boolean('Disabled', false),
    },
    theme: {
      default: select('Theme', ['normal', 'dark', 'light'], 'normal'),
    },
    name: {
      default: text('Name', ''),
    },
    shape: {
      default: select('Shape', ['normal', 'rounded', 'circle'], 'normal'),
    },
    size: {
      default: select('Size', ['sm', 'md', 'lg'], 'md'),
    },
    type: {
      default: text('Type', 'submit'),
    },
  },
  template: `
    <Button
      :autofocus="autofocus"
      :btnStyle="btnStyle"
      :disabled="disabled"
      :theme="theme"
      :name="name"
      :shape="shape"
      :size="size"
      :type="type"
      @click="handleClick"
    >
      {{ label }}
    </Button>
  `,
  methods: {
    handleClick(event) {
      console.log('Button clicked!', event);
    },
  },
});
