import Modal from './Modal.vue';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: { control: 'text' },
    isOpen: { control: 'boolean' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Modal },
  template: `
    <Modal :title="title" :is-open="isOpen" @close="onClose">
      <p>Modal Content Goes Here</p>
    </Modal>
  `,
  methods: {
    onClose() {
      console.log('Modal closed');
    },
  },
});

export const Default = Template.bind({});
Default.args = {
  title: 'Modal Title',
  isOpen: true,
};
