<template>
    <div
        :class="[prefixCls]"
        v-click-outside="onClickoutside"
        @mouseenter="handleMouseenter"
        @mouseleave="handleMouseleave">
        <div :class="relClasses" ref="reference" @click="handleClick" @contextmenu.prevent="handleRightClick"><slot></slot></div>
        <Drop
            ref="drop"
            :visible="currentVisible"
            :classes="dropdownCls"
            :placement="placement"
            :eventsEnabled="eventsEnabled"
            :boundariesElement="boundariesElement"
            :transfer="transfer"
            transition-name="transition-drop"
            @mouseenter="handleMouseenter"
            @mouseleave="handleMouseleave"
        ><slot name="list"></slot></Drop>
    </div>
</template>
<script>
    import { nextTick, getCurrentInstance } from 'vue';
    import Drop from '../Buttons/drop.vue';
    import clickOutside from '../../utils/clickoutside';
    import { oneOf, findComponentUpward } from '../../utils/assist';

    const prefixCls = 'ivu-dropdown';

    export default {
        name: 'Dropdown',
        directives: { clickOutside },
        components: { Drop },
        emits: ['on-visible-change', 'on-clickoutside', 'on-click' , 'on-hover-click', 'on-haschild-click'],
        props: {
            trigger: {
                validator (value) {
                    return oneOf(value, ['click', 'hover', 'custom', 'contextMenu']);
                },
                default: 'click'
            },
            placement: {
                validator (value) {
                    return oneOf(value, ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end']);
                },
                default: 'bottom'
            },
            visible: {
                type: Boolean,
                default: false
            },
            transfer: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.transfer === '' ? false : global.$VIEWUI.transfer;
                }
            },
            transferClassName: {
                type: String
            },
            stopPropagation: {
                type: Boolean,
                default: false
            },
            capture: {
                type: Boolean,
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI ? true : global.$VIEWUI.capture;
                }
            },
            eventsEnabled: {
                type: Boolean,
                default: false
            },
            boundariesElement: {
                default: 'window'
            }
        },
        computed: {
            transition () {
                return ['bottom-start', 'bottom', 'bottom-end'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade';
            },
            dropdownCls () {
                return {
                    [prefixCls + '-transfer']: this.transfer,
                    [this.transferClassName]: this.transferClassName
                };
            },
            relClasses () {
                return [
                    `${prefixCls}-rel`,
                    {
                        [`${prefixCls}-rel-user-select-none`]: this.trigger === 'contextMenu'
                    }
                ];
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                currentVisible: this.visible,
                timeout: null
            };
        },
        watch: {
            visible (val) {
                this.currentVisible = val;
            },
            currentVisible (val) {
                if (val) {
                    this.$refs.drop.update();
                } else {
                    this.$refs.drop.destroy();
                }
                this.$emit('on-visible-change', val);
            }
        },
        methods: {
            handleClick () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'click') {
                    return false;
                }
                const $parent = this.hasParent();
                if (!$parent) this.currentVisible = !this.currentVisible;
            },
            handleRightClick () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'contextMenu') {
                    return false;
                }
                this.currentVisible = !this.currentVisible;
            },
            handleMouseenter () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'hover') {
                    return false;
                }
                if (this.timeout) clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.currentVisible = true;
                }, 250);
            },
            handleMouseleave () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'hover') {
                    return false;
                }
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = setTimeout(() => {
                        this.currentVisible = false;
                    }, 150);
                }
            },
            onClickoutside (e) {
                this.handleClose();
                this.handleRightClose();
                if (this.currentVisible) this.$emit('on-clickoutside', e);
            },
            handleClose () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'click') {
                    return false;
                }
                this.currentVisible = false;
            },
            handleRightClose () {
                if (this.trigger === 'custom') return false;
                if (this.trigger !== 'contextMenu') {
                    return false;
                }
                this.currentVisible = false;
            },
            hasParent () {
                const $parent = findComponentUpward(this, 'Dropdown');
                if ($parent) {
                    return $parent;
                } else {
                    return false;
                }
            },
            handleHaschildClick () {
                nextTick(() => {
                    if (this.trigger === 'custom') return false;
                    this.currentVisible = true;
                });
                const $parent = this.hasParent();
                if ($parent) $parent.handleHaschildClick();
            },
            handleItemClick (key) {
                if (this.stopPropagation) return;
                const $parent = this.hasParent();
                if ($parent) $parent.handleItemClick(key);
                else this.$emit('on-click', key);
            },
            handleHoverClick () {
                const $parent = this.hasParent();
                if ($parent) {
                    nextTick(() => {
                        if (this.trigger === 'custom') return false;
                        this.currentVisible = false;
                    });
                    $parent.handleHoverClick();
                } else {
                    nextTick(() => {
                        if (this.trigger === 'custom') return false;
                        this.currentVisible = false;
                    });
                }
            }
        }
    };
</script>

<style scoped>
.ivu-dropdown {
  position: relative;
  display: inline-block;
}

.ivu-dropdown .relClasses {
  cursor: pointer;
  padding: 8px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.ivu-dropdown .ivu-select-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  min-width: 120px;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
}

.ivu-dropdown .ivu-select-dropdown ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.ivu-dropdown .ivu-select-dropdown li {
  padding: 8px;
  cursor: pointer;
}

.ivu-dropdown .ivu-select-dropdown.show {
  display: block;
}
</style>
