import DyInputNumber from './inputNumber.vue';

export default {
  title: 'Form/Forms/InputNumber',
  component: DyInputNumber,
  argTypes: {
    min: { control: 'number', defaultValue: -Infinity },
    max: { control: 'number', defaultValue: Infinity },
    step: { control: 'number', defaultValue: 1 },
    value: { control: 'number', defaultValue: 1 },
    autofocus: { control: 'boolean' }
  }
};

const Template = (args, { argTypes }) => ({
  components: { DyInputNumber },
  props: Object.keys(argTypes),
  template: `
    <dy-input-number
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      :autofocus="autofocus"
      @input="handleInput"
      @change="handleChange"
    ></dy-input-number>
  `,
  methods: {
    handleInput(value) {
      console.log('Input event - Value:', value);
    },
    handleChange(value) {
      console.log('Change event - Value:', value);
    }
  }
});

export const BasicInputNumber = Template.bind({});
BasicInputNumber.args = {
  min: -10,
  max: 10,
  step: 1,
  value: 5,
  autofocus: false
};
