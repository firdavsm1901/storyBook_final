import DyCollapse from './Collapse.vue';
import DyCollapseItem from './CollapseItem.vue';

export default {
  title: 'Form/Containers/Collapse',
  component: {DyCollapse, DyCollapseItem},
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
    components: { DyCollapse, DyCollapseItem },
    props: Object.keys(argTypes),
    template: `
      <collapse :accordion="accordion" :value="value">
        <collapse-item name="1">
          <template v-slot:default>
            <h3>Item 1</h3>
          </template>
          <template v-slot:content>
            <p>Content for Item 1</p>
          </template>
        </collapse-item>
        <collapse-item name="2">
          <template v-slot:default>
            <h3>Item 2</h3>
          </template>
          <template v-slot:content>
            <p>Content for Item 2</p>
          </template>
        </collapse-item>
      </collapse>
    `,
  });
  

export const BasicCollapse = Template.bind({});
BasicCollapse.args = {
  accordion: false, 
  value: ['1'], 
};
