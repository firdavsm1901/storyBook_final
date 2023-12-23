import Pagination from './Pagination.vue'; 

export default {
  title: 'Form/Navigation/Pagination', 
  component: Pagination,
  argTypes: {
    modelValue: {
      control: 'number',
    },
    totalPage: {
      control: 'number',
    },
    hasPrev: {
      control: 'boolean',
    },
    hasNext: {
      control: 'boolean',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Pagination },
  props: Object.keys(argTypes),
  template: `
    <Pagination
      v-bind="$props"
      @change:next="onChangeNext"
      @change:prev="onChangePrev"
      @change:goto="onChangeGoto"
      @update:modelValue="onUpdateModelValue"
    />
  `,
  methods: {
    onChangeNext(value) {
      console.log('Next clicked:', value);
    },
    onChangePrev(value) {
      console.log('Previous clicked:', value);
    },
    onChangeGoto(value) {
      console.log('Goto page:', value);
    },
    onUpdateModelValue(value) {
      console.log('Model value updated:', value);
    },
  },
});

export const DefaultPagination = Template.bind({});
DefaultPagination.args = {
};
