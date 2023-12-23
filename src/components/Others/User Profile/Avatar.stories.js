

import Avatar from './Avatar.vue';

export default {
  title: 'Form/Others/Avatar', 
  component: Avatar,
  argTypes: {
    name: { control: 'text' }, 
    src: { control: 'text' },
    size: { control: 'text' },
  },
};

const Template = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar v-bind="args" />',
});


export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  src: 'path_to_your_image.jpg',
  size: '50px',
};
