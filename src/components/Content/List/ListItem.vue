<template>
	<li class="listItem" :class="classes">
		<span v-if="hasValueSlot" class="listItem__value">
			<slot name="value"></slot>
		</span>
		<span class="listItem__label">
			<slot></slot>
		</span>
	</li>
</template>

<script>
export default {
	name: 'ListItem',
	computed: {
		classes() {
			let classes = [];
			if (this.hasValueSlot) {
				classes.push('listItem--hasLabel');
			}
			return classes;
		},
		hasValueSlot() {
			return this.$slots.value;
		},
	},
};
</script>

<style lang="less">
@import '../../../assets/styles/variables.less';

.listItem {
	position: relative;
	padding: 1em;
	border-bottom: @grid-border;
	font-size: @font-sml;
	line-height: 1.5em;

	&:last-child {
		border-bottom: none;
	}
}

.listItem--hasLabel {
	padding-inline-start: 6.5em;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 5.5em;
		width: 0;
		height: 100%;
		border-right: @grid-border;
	}
}

.listItem__value {
	position: absolute;
	top: 50%;
	left: 1em;
	transform: translateY(-50%);
	width: 4.5em;

	.fa {
		color: @text-light;
		min-width: 1.25em;
	}
}

[dir='rtl'] {
	.listItem--hasLabel {
		&:before {
			left: auto;
			right: 5.5em;
		}
	}
	.listItem__value {
		left: auto;
		right: 1em;
	}
}
</style>