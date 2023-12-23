import Image from './Image.vue'; 

export default {
  title: 'Form/Others/Image', 
  component: Image,
  argTypes: {
    src: { control: 'text' },
  },
};


const Template = (args) => ({
  components: { Image },
  setup() {
    return { args };
  },
  template: `
    <Image v-bind="args">
      <!-- Content for UiImage slot -->
      <!-- You can put an image, text, or any other content here -->
    </Image>
  `,
});


export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/400', 
};


