import BCard from '../../Containers/Card/Card.vue'; 
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Form/Containers/BCard',
  component: BCard,
  decorators: [withKnobs],
};

export const Default = () => ({
  components: { BCard },
  props: {
    clickable: {
      default: boolean('Clickable', false),
    },
    cardTitle: {
      default: text('Card Title', 'Your Card Title'),
    },
    cardContent: {
      default: text('Card Content', 'Your card content...'),
    },
  },
  template: `
    <BCard :clickable="clickable" @click="handleClick">
      <div style="padding: 20px;">
        <h2>{{ cardTitle }}</h2>
        <p>{{ cardContent }}</p>
      </div>
    </BCard>
  `,
  methods: {
    handleClick(event) {
      console.log('Card clicked!', event);
    },
  },
});
