import { defineComponent } from 'vue';
import Icon from '../Content/Icon.vue'; 


export default {
  title: 'Form/Content/Icon', 
  component: Icon,
};

const Template = (args) => ({
  components: { Icon },
  setup() {
    return { args };
  },
  template: `
    <Icon
      v-bind="args"
    />
  `,
});


export const Default = Template.bind({});
Default.args = {
  name: 'your-icon-name', 
  title: 'Your Icon Title', 
  size: 24, 
  color: 'black', 
};


