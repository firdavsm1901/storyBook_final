import List from './List.vue';
import ListItem from './ListItem.vue';

export default {
	title: 'Form/Content/List',
	component: List,
};

export const Default = {
	render: (args) => ({
		components: {List, ListItem},
		setup() {
			return {args};
		},
		template: `
			<List>
				<ListItem>
					<template #value>
						1
					</template>
					Number of active discussions in this journal.
				</ListItem>
				<ListItem>
					<template #value>
						2
					</template>
					Days until next issue is published.
				</ListItem>
				
			</List>

		`,
	}),
	args: {},
};