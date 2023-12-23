import { h } from 'vue';
import Breadcrumbs from './BreadCumb.vue'; 
import Icon from '../../Content/Icon.vue'; 

export default {
  title: 'Form/Navigation/Breadcrumbs', 
  component: Breadcrumbs,
};

const Template = (args) => ({
  components: { Breadcrumbs, Icon },
  setup() {
    return { args };
  },
  template: `
    <Breadcrumbs>
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
    </Breadcrumbs>
  `,
});

export const Default = Template.bind({});
Default.args = {
};
