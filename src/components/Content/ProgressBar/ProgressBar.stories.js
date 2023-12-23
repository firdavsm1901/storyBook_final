import {ref} from 'vue';
import ProgressBar from './ProgressBar.vue';
export default {
	title: 'Form/Content/ProgressBar',
	component: ProgressBar,
};

export const Default = {
	render: (args) => ({
		components: {ProgressBar},
		setup() {
			return {args};
		},
		template: `
			<progress-bar v-bind="args"/>
		`,
	}),
	args: {
		value: 10,
	},
};

