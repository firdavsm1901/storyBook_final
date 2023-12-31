<template>
    <div :class="wrapClasses">
        <template v-if="type !== 'textarea'">
            <div :class="[prefixCls + '-group-prepend']" v-if="prepend" v-show="slotReady"><slot name="prepend"></slot></div>
            <i class="ivu-icon" :class="['ivu-icon-ios-close-circle', prefixCls + '-icon', prefixCls + '-icon-clear' , prefixCls + '-icon-normal']" v-if="clearable && currentValue && !itemDisabled" @click="handleClear" :style="clearableStyles"></i>
            <i class="ivu-icon" :class="['ivu-icon-' + icon, prefixCls + '-icon', prefixCls + '-icon-normal']" v-else-if="icon" @click="handleIconClick"></i>
            <i class="ivu-icon ivu-icon-ios-search" :class="[prefixCls + '-icon', prefixCls + '-icon-normal', prefixCls + '-search-icon']" v-else-if="search && enterButton === false" @click="handleSearch"></i>
            <span class="ivu-input-suffix" v-else-if="showSuffix"><slot name="suffix"><i class="ivu-icon" :class="['ivu-icon-' + suffix]" v-if="suffix"></i></slot></span>
            <span class="ivu-input-word-count" v-else-if="showWordLimit">{{ textLength }}/{{ upperLimit }}</span>
            <span class="ivu-input-suffix" v-else-if="password" @click="handleToggleShowPassword">
                <i class="ivu-icon ivu-icon-ios-eye-outline" v-if="showPassword"></i>
                <i class="ivu-icon ivu-icon-ios-eye-off-outline" v-else></i>
            </span>
            <transition name="fade">
                <i class="ivu-icon ivu-icon-ios-loading ivu-load-loop" :class="[prefixCls + '-icon', prefixCls + '-icon-validate']" v-if="!icon"></i>
            </transition>
            <input
                :id="elementId"
                :autocomplete="autocomplete"
                :spellcheck="spellcheck"
                ref="input"
                :type="currentType"
                :class="inputClasses"
                :placeholder="placeholder"
                :disabled="itemDisabled"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                :number="number"
                :autofocus="autofocus"
                @keyup.enter="handleEnter"
                @keyup="handleKeyup"
                @keypress="handleKeypress"
                @keydown="handleKeydown"
                @focus="handleFocus"
                @blur="handleBlur"
                @compositionstart="handleComposition"
                @compositionupdate="handleComposition"
                @compositionend="handleComposition"
                @input="handleInput"
                @change="handleChange">
            <div :class="[prefixCls + '-group-append']" v-if="append" v-show="slotReady"><slot name="append"></slot></div>
            <div :class="[prefixCls + '-group-append', prefixCls + '-search']" v-else-if="search && enterButton" @click="handleSearch">
                <i class="ivu-icon ivu-icon-ios-search" v-if="enterButton === true"></i>
                <template v-else>{{ enterButton }}</template>
            </div>
            <span class="ivu-input-prefix" v-else-if="showPrefix"><slot name="prefix"><i class="ivu-icon" :class="['ivu-icon-' + prefix]" v-if="prefix"></i></slot></span>
        </template>
        <template v-else>
            <textarea
                :id="elementId"
                :wrap="wrap"
                :autocomplete="autocomplete"
                :spellcheck="spellcheck"
                ref="textarea"
                :class="textareaClasses"
                :style="textareaStyles"
                :placeholder="placeholder"
                :disabled="itemDisabled"
                :rows="rows"
                :maxlength="maxlength"
                :readonly="readonly"
                :name="name"
                :value="currentValue"
                :autofocus="autofocus"
                @keyup.enter="handleEnter"
                @keyup="handleKeyup"
                @keypress="handleKeypress"
                @keydown="handleKeydown"
                @focus="handleFocus"
                @blur="handleBlur"
                @compositionstart="handleComposition"
                @compositionupdate="handleComposition"
                @compositionend="handleComposition"
                @input="handleInput">
            </textarea>
            <span class="ivu-input-word-count" v-if="showWordLimit">{{ textLength }}/{{ upperLimit }}</span>
        </template>
    </div>
</template>
<script>
    import { getCurrentInstance, nextTick } from 'vue';
    import { oneOf, findComponentUpward } from '../../utils/assist';
    import calcTextareaHeight from '../../utils/calcTextAreaHeight';
    import mixinsForm from '../../utils/form';

    const prefixCls = 'ivu-input';

    export default {
        name: 'Input',
        mixins: [ mixinsForm ],
        emits: ['on-enter', 'on-search', 'on-keydown', 'on-keypress', 'on-keyup', 'on-click', 'on-focus', 'on-blur', 'on-change', 'on-input-change', 'on-clear', 'update:modelValue'],
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['text', 'textarea', 'password', 'url', 'email', 'date', 'number', 'tel']);
                },
                default: 'text'
            },
            modelValue: {
                type: [String, Number],
                default: ''
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                },
                default () {
                    const global = getCurrentInstance().appContext.config.globalProperties;
                    return !global.$VIEWUI || global.$VIEWUI.size === '' ? 'default' : global.$VIEWUI.size;
                }
            },
            placeholder: {
                type: String,
                default: ''
            },
            maxlength: {
                type: [String, Number]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            icon: String,
            autosize: {
                type: [Boolean, Object],
                default: false
            },
            rows: {
                type: Number,
                default: 2
            },
            readonly: {
                type: Boolean,
                default: false
            },
            name: {
                type: String
            },
            number: {
                type: Boolean,
                default: false
            },
            autofocus: {
                type: Boolean,
                default: false
            },
            spellcheck: {
                type: Boolean,
                default: false
            },
            autocomplete: {
                type: String,
                default: 'off'
            },
            clearable: {
                type: Boolean,
                default: false
            },
            elementId: {
                type: String
            },
            wrap: {
                validator (value) {
                    return oneOf(value, ['hard', 'soft']);
                },
                default: 'soft'
            },
            prefix: {
                type: String,
                default: ''
            },
            suffix: {
                type: String,
                default: ''
            },
            search: {
                type: Boolean,
                default: false
            },
            enterButton: {
                type: [Boolean, String],
                default: false
            },
            showWordLimit: {
                type: Boolean,
                default: false
            },
            password: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                currentValue: this.modelValue,
                prefixCls: prefixCls,
                slotReady: false,
                textareaStyles: {},
                isOnComposition: false,
                showPassword: false,
                clearableIconOffset: 0
            };
        },
        computed: {
            currentType () {
                let type = this.type;
                if (type === 'password' && this.password && this.showPassword) type = 'text';
                return type;
            },
            prepend () {
                let state = false;
                if (this.type !== 'textarea') state = this.$slots.prepend !== undefined;
                return state;
            },
            append () {
                let state = false;
                if (this.type !== 'textarea') state = this.$slots.append !== undefined;
                return state;
            },
            showPrefix () {
                let state = false;
                if (this.type !== 'textarea') state = this.prefix !== '' || this.$slots.prefix !== undefined;
                return state;
            },
            showSuffix () {
                let state = false;
                if (this.type !== 'textarea') state = this.suffix !== '' || this.$slots.suffix !== undefined;
                return state;
            },
            wrapClasses () {
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-wrapper-${this.size}`]: !!this.size,
                        [`${prefixCls}-type-${this.type}`]: this.type,
                        [`${prefixCls}-group`]: this.prepend || this.append || (this.search && this.enterButton),
                        [`${prefixCls}-group-${this.size}`]: (this.prepend || this.append || (this.search && this.enterButton)) && !!this.size,
                        [`${prefixCls}-group-with-prepend`]: this.prepend,
                        [`${prefixCls}-group-with-append`]: this.append || (this.search && this.enterButton),
                        [`${prefixCls}-hide-icon`]: this.append,  // #554
                        [`${prefixCls}-with-search`]: (this.search && this.enterButton),
                        [`${prefixCls}-wrapper-disabled`]: this.itemDisabled // #685
                    }
                ];
            },
            inputClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-${this.size}`]: !!this.size,
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-no-border`]: !this.border,
                        [`${prefixCls}-with-prefix`]: this.showPrefix,
                        [`${prefixCls}-with-suffix`]: this.showSuffix || (this.search && this.enterButton === false)
                    }
                ];
            },
            textareaClasses () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-disabled`]: this.itemDisabled,
                        [`${prefixCls}-no-border`]: !this.border
                    }
                ];
            },
            upperLimit () {
                return this.maxlength;
            },
            textLength () {
                if (typeof this.modelValue === 'number') {
                    return String(this.modelValue).length;
                }

                return (this.modelValue || '').length;
            },
            clearableStyles () {
                const style = {};
                let offset = this.clearableIconOffset;
                if (offset) style.transform = `translateX(-${offset}px)`;
                return style;
            }
        },
        methods: {
            handleEnter (event) {
                this.$emit('on-enter', event);
                if (this.search) this.$emit('on-search', this.currentValue);
            },
            handleKeydown (event) {
                this.$emit('on-keydown', event);
            },
            handleKeypress(event) {
                this.$emit('on-keypress', event);
            },
            handleKeyup (event) {
                this.$emit('on-keyup', event);
            },
            handleIconClick (event) {
                this.$emit('on-click', event);
            },
            handleFocus (event) {
                this.$emit('on-focus', event);
            },
            handleBlur (event) {
                this.$emit('on-blur', event);
                if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                    this.handleFormItemChange('blur', this.currentValue);
                }
            },
            handleComposition(event) {
                if (event.type === 'compositionstart') {
                    this.isOnComposition = true;
                }
                if (event.type === 'compositionend') {
                    this.isOnComposition = false;
                    this.handleInput(event);
                }
            },
            handleInput (event) {
                if (this.isOnComposition) return;

                let value = event.target.value;
                if (this.number && value !== '') value = Number.isNaN(Number(value)) ? value : Number(value);
                this.$emit('update:modelValue', value);
                this.setCurrentValue(value);
                this.$emit('on-change', event);
            },
            handleChange (event) {
                this.$emit('on-input-change', event);
            },
            setCurrentValue (value) {
                if (value === this.currentValue) return;
                nextTick(() => {
                    this.resizeTextarea();
                });
                this.currentValue = value;
                if (!findComponentUpward(this, ['DatePicker', 'TimePicker', 'Cascader', 'Search'])) {
                    this.handleFormItemChange('change', value);
                }
            },
            resizeTextarea () {
                const autosize = this.autosize;
                if (!autosize || this.type !== 'textarea') {
                    return false;
                }

                const minRows = autosize.minRows;
                const maxRows = autosize.maxRows;

                this.textareaStyles = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
            },
            focus (option) {
                const $el = this.type === 'textarea' ? this.$refs.textarea : this.$refs.input;
                $el.focus(option);
                const { cursor } = option || {};
                if (cursor) {
                    const len = $el.value.length;

                    switch (cursor) {
                        case 'start':
                            $el.setSelectionRange(0, 0);
                            break;
                        case 'end':
                            $el.setSelectionRange(len, len);
                            break;
                        default:
                            $el.setSelectionRange(0, len);
                    }
                }
            },
            blur () {
                if (this.type === 'textarea') {
                    this.$refs.textarea.blur();
                } else {
                    this.$refs.input.blur();
                }
            },
            handleClear () {
                const e = { target: { value: '' } };
                this.$emit('update:modelValue', '');
                this.setCurrentValue('');
                this.$emit('on-change', e);
                this.$emit('on-clear');
            },
            handleSearch () {
                if (this.itemDisabled) return false;
                this.$refs.input.focus();
                this.$emit('on-search', this.currentValue);
            },
            handleToggleShowPassword () {
                if (this.itemDisabled) return false;
                this.showPassword = !this.showPassword;
                this.focus();
                const len = this.currentValue.length;
                setTimeout(() => {
                    this.$refs.input.setSelectionRange(len, len);
                }, 0);
            },
            handleCalcIconOffset () {
                const $el = this.$el.querySelectorAll('.ivu-input-group-append')[0];
                if ($el) {
                    this.clearableIconOffset = $el.offsetWidth;
                } else {
                    this.clearableIconOffset = 0;
                }
            }
        },
        watch: {
            modelValue (val) {
                this.setCurrentValue(val);
            },
            type () {
                nextTick(this.handleCalcIconOffset);
            }
        },
        mounted () {
            this.slotReady = true;
            this.resizeTextarea();
            this.handleCalcIconOffset();
        },
        updated () {
            nextTick(this.handleCalcIconOffset);
        }
    };
</script>