import Dropdown from '../Buttons/Dropdown.vue';

export default {
  title: 'Form/Buttons/Dropdown',
  component: Dropdown,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Dropdown },
  template: `
    <Dropdown v-bind="$props">
      <template #list>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </template>
      <span>Toggle Dropdown</span>
    </Dropdown>
  `,
});

export const Basic = Template.bind({});
Basic.args = {
  trigger: 'hover',
  placement: 'bottom',
};
