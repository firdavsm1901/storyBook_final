<template>
	<div
		:id="id"
		class="Tab"
		:class="classes"
		role="tabpanel"
		:aria-labelledby="id + '-button'"
		:hidden="!isActive"
	>
		<slot />
	</div>
</template>

<script>
import {computed} from 'vue';
export default {
	inject: ['registerTab'],
	props: {
		icon: {
			type: String,
			default() {
				return '';
			},
		},
		id: {
			type: String,
			required: true,
		},
		label: {
			type: String,
			default() {
				return '';
			},
		},
		badge: {
			type: [String, Number],
			default() {
				return '';
			},
		},
		isDisabled: {
			type: Boolean,
			default() {
				return false;
			},
		},
	},
	data() {
		return {
			isActive: false,
		};
	},
	computed: {
		/**
		 * Classes to apply to root element
		 *
		 * @return {Array}
		 */
		classes() {
			let classes = [];
			if (this.isActive) {
				classes.push('Tab--isActive');
			}
			if (this.isDisabled) {
				classes.push('Tab--isDisabled');
			}
			return classes;
		},
	},
	created() {
		this.unregister = this.registerTab({
			id: this.id,
			icon: computed(() => this.icon),
			label: computed(() => this.label),
			badge: computed(() => this.badge),
			isActive: (active) => (this.isActive = active),
		});
	},
	beforeUnmount() {
		if (this.unregister) {
			this.unregister();
		}
	},
};
</script>