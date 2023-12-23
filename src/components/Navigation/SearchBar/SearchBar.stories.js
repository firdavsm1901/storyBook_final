import SearchBar from './SearchBar.vue';

export default {
  title: 'Form/Navigation/SearchBar', 
  component: SearchBar,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    alwaysShowCancel: {
      control: 'boolean',
    },
    inputType: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email'],
      },
    },
    returnKeyType: {
      control: {
        type: 'select',
        options: ['default', 'go', 'next', 'search', 'send'], 
      },
    },
    mod: {
      control: {
        type: 'select',
        options: ['default', 'hasDep'], 
      },
    },
    autofocus: {
      control: 'boolean',
    },
    theme: {
      control: {
        type: 'select',
        options: ['gray', 'yellow'], 
      },
    },
    barStyle: {
      control: 'object',
    },
    defaultValue: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    cancelLabel: {
      control: 'text',
    },
    depName: {
      control: 'text',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SearchBar },
  props: Object.keys(argTypes),
  template: `
    <SearchBar
      :disabled="disabled"
      :alwaysShowCancel="alwaysShowCancel"
      :inputType="inputType"
      :returnKeyType="returnKeyType"
      :mod="mod"
      :autofocus="autofocus"
      :theme="theme"
      :barStyle="barStyle"
      :defaultValue="defaultValue"
      :placeholder="placeholder"
      :cancelLabel="cancelLabel"
      :depName="depName"
      @wxcSearchbarInputOnBlur="onBlur"
      @wxcSearchbarInputOnFocus="onFocus"
      @wxcSearchbarCloseClicked="onCloseClicked"
      @wxcSearchbarInputOnInput="onInput"
      @wxcSearchbarInputReturned="onSubmit"
      @wxcSearchbarCancelClicked="onCancelClicked"
      @wxcSearchbarDepChooseClicked="onDepClicked"
      @wxcSearchbarInputDisabledClicked="onInputDisabledClicked"
    />
  `,
  methods: {
    onBlur(e) {
      console.log('Blur event:', e);
    },
    onFocus(e) {
      console.log('Focus event:', e);
    },
    onCloseClicked(e) {
      console.log('Close clicked:', e);
    },
    onInput(e) {
      console.log('Input event:', e);
    },
    onSubmit(e) {
      console.log('Submit event:', e);
    },
    onCancelClicked(e) {
      console.log('Cancel clicked:', e);
    },
    onDepClicked(e) {
      console.log('Dep choose clicked:', e);
    },
    onInputDisabledClicked(e) {
      console.log('Input disabled clicked:', e);
    },
  },
});

export const DefaultSearchBar = Template.bind({});
DefaultSearchBar.args = {
};
