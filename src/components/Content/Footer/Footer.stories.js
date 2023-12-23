
import Footer from './Footer.vue';

export default {
  title: 'Form/Content/Footer',
  component: Footer,
  argTypes: {
    height: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Footer },
  template: `
    <Footer v-bind="$props">
      Footer content goes here
    </Footer>
  `,
});


export const Default = Template.bind({});
Default.args = {
  height: '60px', 

};
