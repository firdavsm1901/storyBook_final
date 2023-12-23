import TSwitch from './SwitchGroup.vue';

export default {
  title: 'Form/Forms/TSwitch', 
  component: TSwitch,
};
const Template = (args) => ({
  components: { TSwitch },
  setup() {
    return { args };
  },
  template: `
    <TSwitch v-bind="args" />
  `,
});
export const Default = Template.bind({});
Default.args = {
  checked: false,
  size: 'normal',
  disabled: false,
  loading: false,
  checkedColor: '#1890ff',
  uncheckedColor: '#bfbfbf',
  checkedValue: true,
  uncheckedValue: false,
};