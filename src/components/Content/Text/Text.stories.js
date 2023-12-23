
import Text from './Text.vue';

export default {
  title: 'Form/Content/Text',
  component: Text,
  argTypes: {
    fontSize: { control: 'text' },
    color: { control: 'color' },

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Text },
  template: `
    <Text v-bind="$props">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </Text>
  `,
});

export const Default = Template.bind({});
Default.args = {

  fontSize: '16px',
  color: 'black',

};
