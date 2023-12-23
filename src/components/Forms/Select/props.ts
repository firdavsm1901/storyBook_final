import { type ExtractPropTypes } from 'vue';
export const type = ['select', 'search'];
export const size = ['mini', 'compact', 'default', 'large'];
const labelKey = {
  type: String,
  default: 'id',
};
const valueKey = {
  type: String,
  default: 'label',
};

export const Props = {
  type: {
    type: String,
    validator(value: string) {
      return type.includes(value);
    },
    default: 'select',
  },
  value: {
    type: String,
  },
  size: {
    type: String,
    validator(value: string) {
      return size.includes(value);
    },
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: String,
  },
  placeholder: {
    type: String,
    default: 'Controlled Input',
  },
  error: {
    type: Boolean,
    default: false,
  },
  positive: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Array<string>,
    default: [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  autoFocus: {
    type: Boolean,
    default: false,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  labelKey,
  valueKey,
};
export const Emits = ['update:modelValue', 'focus', 'blur', 'change', 'input', 'clear'];

export type SelectProps = ExtractPropTypes<typeof Props>;
