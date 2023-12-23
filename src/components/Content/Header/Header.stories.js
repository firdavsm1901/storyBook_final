import Header from './Header.vue';

export default {
  title: 'Form/Content/Header',
  component: Header,
  argTypes: {
    height: { control: 'text' },

  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Header },
  template: `
    <Header v-bind="$props">
      Header content goes here
    </Header>
  `,
});


export const Default = Template.bind({});
Default.args = {
  height: '80px',

};
