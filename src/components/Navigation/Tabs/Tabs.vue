	<template>
	<div class="Tabs" :class="{'Tabs--side': isSideTabs}">
		<div class="Tabs__buttons" role="tablist" :aria-label="label">
			<button
				v-for="tab in tabs"
				:id="tab.id + '-button'"
				:key="tab.id"
				:ref="'button' + tab.id"
				:aria-selected="currentTab === tab.id"
				:aria-controls="tab.id"
				class="Tabs__button"
				role="tab"
				:tabindex="currentTab === tab.id ? '' : -1"
				@click="setCurrentTab(tab.id)"
				@keydown.end.prevent="setLastTab"
				@keydown.home.prevent="setFirstTab"
				@keydown.left.exact.prevent="setPreviousTab"
				@keydown.right.exact.prevent="setNextTab"
			>
				<template v-if="tab.icon">
					<icon :icon="tab.icon"></icon>
					<span class="-screenReader">{{ tab.label }}</span>
				</template>
				<template v-else>
					{{ tab.label }}
				</template>
				<template v-if="tab.badge">
					<badge>{{ tab.badge }}</badge>
				</template>
			</button>
		</div>
		<slot />
	</div>
</template>

<script>
import debounce from 'lodash/debounce';

export default {
	props: {
		defaultTab: {
			type: String,
			default() {
				return '';
			},
		},
		isSideTabs: {
			type: Boolean,
			default() {
				return false;
			},
		},
		label: {
			type: String,
			default() {
				return '';
			},
		},
		trackHistory: {
			type: Boolean,
			default() {
				return false;
			},
		},
	},
	data() {
		return {
			currentTab: '',
			tabs: [],
		};
	},
	methods: {
		/**
		 * Set the current tab
		 *
		 * @param {String} tabId
		 */
		setCurrentTab(tabId) {
			this.currentTab = tabId;
			this.$nextTick(() => {
				$(this.$refs['button' + tabId]).focus();
				this.updateUrl();
			});
		},

		/**
		 * Set the current tab to the first tab in the list
		 *
		 * Keyboard: [Home]
		 */
		setFirstTab() {
			this.setCurrentTab(this.tabs[0].id);
		},
		setLastTab() {
			this.setCurrentTab(this.tabs[this.tabs.length - 1].id);
		},

		setNextTab() {
			const i = this.tabs.findIndex((tab) => tab.id === this.currentTab);
			const tab = this.tabs[i + 1] || this.tabs[0];
			this.setCurrentTab(tab.id);
		},
		setPreviousTab() {
			const i = this.tabs.findIndex((tab) => tab.id === this.currentTab);
			const tab = this.tabs[i - 1] || this.tabs[this.tabs.length - 1];
			this.setCurrentTab(tab.id);
		},

		updateUrl: debounce(function () {
			if (this.trackHistory) {
				const hash =
					this.$parent.$options.name === 'Tab'
						? '#' + this.$parent.id + '/' + this.currentTab
						: '#' + this.currentTab;
				if (hash !== window.location.hash) {
					const activeTab = this.tabs.find((tab) => tab.id === this.currentTab);
					window.history.pushState({}, activeTab.label, hash);
				}
			}
		}, 100),
	},
	watch: {
		currentTab(newVal, oldVal) {
			this.tabs.forEach((tab) => tab.isActive(tab.id === newVal));
		},
	},
	provide() {
		return {
			registerTab: (tab) => {
				this.tabs.push(tab);

				return () => {
					const index = this.tabs.findIndex((_tab) => _tab.id === tab.id);
					if (index > -1) {
						this.tabs.splice(index, 1);
					}
				};
			},
		};
	},

	mounted() {
		this.currentTab = this.defaultTab || this.tabs[0].id;

		pkp.eventBus.$on('open-tab', (tabId) => {
			this.tabs.forEach((tab) => {
				if (tab.id === tabId) {
					this.setCurrentTab(tabId);
				}
			});
		});
	},
	unmounted() {
		pkp.eventBus.$off('open-tab');
	},
};
</script>

<style lang="less">
@import '../../../assets/styles/variables.less';

.Tabs {
	margin: 0;
	list-style: none;
	font-size: @font-sml;
}

.Tabs__button {
	position: relative;
	display: inline-block;
	padding: 0.8rem 1em;
	line-height: 1.4rem;
	border: @bg-border-light;
	border-top-left-radius: @radius;
	border-top-right-radius: @radius;
	background: @lift;
	text-decoration: none;
	font-weight: @bold;
	color: @primary;

	&:before {
		content: '';
		position: absolute;
		top: -1px;
		left: 50%;
		transform: translateX(-50%);
		width: 25%;
		height: 2px;
		background: transparent;
		transition: all 0.2s;
	}

	&:focus {
		outline: 0;

		&:after {
			content: '';
			position: absolute;
			bottom: 0.375rem;
			width: 0.25rem;
			height: 0.25rem;
			left: 50%;
			transform: translateX(-50%);
			background-color: @text-light-rgba;
			border-radius: 0.125rem;
		}
	}

	+ .Tabs__button {
		margin-left: 0.25rem;
	}

	.pkpBadge {
		margin-left: 0.25em;
		margin-bottom: -3px; 
		padding-left: 0.5em;
		padding-right: 0.5em;
		min-width: 2.25em;
		border-color: @bg-border-color;
		background: @lift;
	}
}

.Tabs__button:focus:before,
.Tabs__button:hover:before,
.Tabs__button[aria-selected='true']:before {
	background: @primary-lift;
	width: 100%;
}

.Tabs__button[aria-selected='true'] {
	color: @text-light;
}

.pkpTab {
	position: relative;
	padding: 1rem;
	background: @lift;

	&:focus {
		z-index: 2;
	}
}

.Tabs .Tabs {
	margin-left: -1rem;
	margin-right: -1rem;
}

@media (min-width: 767px) {
	.Tabs__buttons {
		position: relative;
		top: 1px;
		z-index: 2;
	}

	.Tabs__button {
		border-color: transparent;
		background: transparent;
	}

	.Tabs__button[aria-selected='true'] {
		border: @bg-border-light;
		border-bottom-color: transparent;
		background: @lift;
	}

	.pkpTab {
		padding: 2rem;
		border: @bg-border-light;
		border-radius: @radius;
	}

	.Tabs .Tabs {
		margin-left: -2rem;
		margin-right: -2rem;
		margin-bottom: -2rem;

		.Tabs__buttons {
			padding-left: 1rem;
			padding-right: 1rem;
		}

		.pkpTab {
			border: none;
			border-top: @bg-border-light;
		}
	}
	.Tabs--side {
		display: grid;
		grid-template-columns: 192px auto;

		.Tabs__buttons {
			padding-left: 0;
			padding-right: 0;
			margin-bottom: 2rem;
			border-inline-end: @bg-border-light;
		}

		.Tabs__button {
			display: block;
			width: 100%;
			padding-right: 1rem;
			border-left: none;
			border-right: none;
			border-color: transparent;
			top: auto;
			right: -1px; // overlap right border
			text-align: inherit;

			&:before {
				content: '';
				position: absolute;
				top: 50%;
				left: -2px;
				transform: translateY(-50%);
				height: 25%;
				width: 2px;
				background: transparent;
				transition: all 0.2s;
			}

			&:focus {
				outline: 0;

				&:after {
					top: 50%;
					bottom: auto;
					left: 0.375rem;
					transform: translateY(-50%);
				}
			}

			+ .Tabs__button {
				margin-inline-end: 0;
			}
		}

		.Tabs__button:focus:before,
		.Tabs__button:hover:before,
		.Tabs__button[aria-selected='true']:before {
			background: @primary-lift;
			height: 100%;
			width: 2px;
		}

		.Tabs__button[aria-selected='true'] {
			border-color: @bg-border-color-light;
			border-left: none;
			border-right: none;
		}
	}

	.Tabs .Tabs--side .Tabs__buttons {
		padding-inline-end: 0;
	}

	.Tabs .Tabs--side .pkpTab {
		padding-top: 0;
		border-top: none;

		> .pkpForm {
			margin: 0;
			margin-inline-start: calc(-2rem - 1px);
			border: @bg-border-light;
		}
		&:nth-child(2) {
			.pkpForm > .pkpFormPages {
				margin-top: -1px;
			}
		}
	}

	.pkpTab > .pkpForm {
		margin: -2rem;
	}
}

[dir='rtl'] {
	@media (min-width: 767px) {
		.Tabs--side {
			.Tabs__button {
				left: -1px; 
				right: auto;

				&:before {
					left: auto;
					right: -2px;
				}

				&:focus {
					&:after {
						left: auto;
						right: 0.375rem;
					}
				}
			}
		}
	}
}
</style>