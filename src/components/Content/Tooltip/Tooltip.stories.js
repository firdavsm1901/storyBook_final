import Tooltip from './Tooltip.vue';

export default {
  title: 'Form/Content/Tooltip',
  component: Tooltip,
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Tooltip },
  template: `
    <div style="margin: 100px;">
      <tooltip v-bind="$props">
        <a>Hover me for tooltip</a>
        <template #content>
          Tooltip content goes here
        </template>
      </tooltip>
    </div>
  `,
});

export const BasicTooltip = Template.bind({});
BasicTooltip.args = {
  placement: 'bottom',
  content: 'Tooltip content',
  delay: 100,
  disabled: false,
  controlled: false,
  always: false,
  transfer: true,
  theme: 'dark',
  maxWidth: 200,
  transferClassName: 'custom-transfer-class',
};
