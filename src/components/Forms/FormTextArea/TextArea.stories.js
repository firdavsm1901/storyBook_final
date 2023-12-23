import Textarea from './Textarea.vue';


export default {
  title: 'Form/Forms/Textarea',
  component: Textarea,
  parameters: {
  },
  argTypes: {
    'v-model': {
      control: {
        type: null
      }
    },
    maxLength: {
      control: {
        type: 'number'
      }
    }
  }
};

const textareaVModel = '';

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {  Textarea },
  setup: () => ({ args }),
  data: () => ({ textareaVModel }),
  template: `<div style="width: 400px;">
              <Textarea v-bind="args" v-model="textareaVModel"/>
            </div>`
});

export const Primary = Template.bind({});
Primary.args = {
  id: 'description',
  label: 'Description',
  placeholder: 'Add a description'
};
