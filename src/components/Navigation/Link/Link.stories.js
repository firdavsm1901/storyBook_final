import { defineComponent } from 'vue';
import Link from './Link.vue'; 
import { linkProps } from '../Link/props'; 

export default {
  title: 'Form/Content/Link',
  component: Link,
};


const Template = (args) => ({
  components: { Link },
  setup() {
    return { args };
  },
  template: `
    <Link :href="args.href" :underLine="args.underLine" :animateUnderline="args.animateUnderline">
      Default Link
    </Link>
  `,
});

export const Default = Template.bind({});
Default.args = {
  href: 'https://example.com',
  underLine: false,
  animateUnderline: false,
};
