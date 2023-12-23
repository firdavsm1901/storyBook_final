import Accordion from './Accordion.vue';

export default {
  title: 'Form/Containers/Accordion',
  component: Accordion,
  argTypes: {
    title: {
      control: {
        type: 'text'
      },
      description: 'Content to display inside of the accordion',
      table: {
        defaultValue: 'I am the accordion title',
        type: {
          summary: 'html or component'
        }
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Accordion },
  setup: () => ({ args }),
  template: '<accordion v-slot>{{ args.content }}</accordion>'
});

export const Primary = Template.bind({});
Primary.args = {
  content: 'I am an accordion.'
};