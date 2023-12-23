import { defineComponent } from 'vue';
import Select from './Select.vue'; 
import { Props } from '../Select/props'; 

export default {
  title: 'Form/Forms/Select',
  component: Select,
};

const Template = (args) => ({
  components: { Select },
  setup() {
    return { args };
  },
  template: `
    <Select
      v-bind="args"
      @input="handleInput"
      @clear="handleClear"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      @update:modelValue="handleUpdateModelValue"
    />
  `,
  methods: {
    handleInput(value) {
      console.log('Input Event:', value);

    },
    handleClear() {
      console.log('Clear Event');
    },
    handleChange(value) {
      console.log('Change Event:', value);
    },
    handleFocus(event) {
      console.log('Focus Event:', event);
    },
    handleBlur(event) {
      console.log('Blur Event:', event);
    },
    handleUpdateModelValue(value) {
      console.log('Update Model Value:', value);
    },
  },
});
export const Default = Template.bind({});
Default.args = {
  size: 'default',
  error: false,
  positive: false,
  disabled: false,
  loading: false,
  modelValue: '',
  options: ['Option 1', 'Option 2', 'Option 3'],
  searchable: true,
  autoFocus: false,
};


