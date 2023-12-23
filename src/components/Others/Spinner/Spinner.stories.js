import Spinner from './Spinner.vue';

export default {
	title: 'Form/Others/Spinner',
	component: Spinner,
};

export const Default = {
	render: (args) => ({
		components: {Spinner},
		setup() {
			return {args};
		},
		template: '<Spinner v-bind="args" />',
	}),
};