import FileUpload from './FileInput.vue';

export default {
  title: 'Form/Forms/FileInput',
  component: FileUpload,
  parameters: {
  },
  argTypes: {
    small: {
      control: {
        type: 'boolean'
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FileUpload },
  setup: () => ({ args }),
  template: '<FileUpload v-bind="args"></FileUpload>'
});

export const Primary = Template.bind({});
Primary.args = {
  id: 'file-upload',
  accept: '.pdf'
};
