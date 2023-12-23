import Tabs from './Tabs.vue';
import Tab from './Tab.vue';

export default {
	title: 'Form/Navigation/Tabs',
	component: Tabs,
};

export const Default = {
	render: (args) => ({
		components: {Tabs, Tab},
		setup() {
			return {args};
		},
		template: `
			<Tabs
				v-bind="args"
			>
				<Tab id="first" label="First tab">First tab content</Tab>
				<Tab id="second" label="Second tab">Second tab content</Tab>
				<Tab id="third" label="Third tab">Third tab content</Tab>
			</Tabs>
		`,
	}),
	args: {
		label: 'Default demo of tabs component',
	},
};
