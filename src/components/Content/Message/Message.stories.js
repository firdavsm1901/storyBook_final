import MessageBox from './Message.vue';

export default {
  title: 'Form/Content/MessageBox',
  component: MessageBox,
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MessageBox },
  template: `<MessageBox :title="title" :message="message" @close="onClose" />`,
  methods: {
    onClose() {
      console.log('MessageBox closed');
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  title: 'Information',
  message: 'This is an informational message.',
};
