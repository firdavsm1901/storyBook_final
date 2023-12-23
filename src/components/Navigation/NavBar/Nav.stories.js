import Navbar from './Nav.vue';

export default {
  title: 'Form/Navigation/Navbar',
  component: Navbar,
  argTypes: {
    items: { control: 'array' },
  },
};

const Template = (args) => ({
  components: { Navbar },
  setup() {
    return { args };
  },
  template: `<Navbar :items="args.items" />`,
});

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: 'Home', link: '#' },
    { text: 'About', link: '#' },
    { text: 'Services', link: '#' },
    { text: 'Contact', link: '#' },
  ],
};
