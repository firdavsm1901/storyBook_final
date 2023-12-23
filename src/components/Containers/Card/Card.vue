
<template>

    <div
        :class="className"
        class="b-card"
        @click="handleClick"
        @mouseover="handleMouseOver"
        @mouseout="handleMouseOut"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">

        <slot></slot>

    </div>

</template>

<script type="text/babel">

    export default {
        name: 'BCard',

        props: {
            clickable: {
                type: Boolean,
                default: false
            },

            name: {
                type: String,
                default: null
            },

            size: {
                type: String,
                // validator: isValidSize,
                default: 'md'
            },
            cardColor: {
      type: String,
      default: '#ffffff'
    },
    textColor: {
      type: String,
      default: '#000000'
    }
        },

        computed: {
            className() {
                const vm = this;
                const {clickable, size} = vm;

                return [
                    `size-${size}`,
                    {clickable}
                ];
            }
        },

        methods: {
            handleClick(event) {
                const vm = this;
                const {clickable} = vm;

                if (clickable) {
                    vm.$emit('click', event);
                }
            },

            handleMouseOver(event) {
                const vm = this;
                const {clickable} = vm;

                if (clickable) {
                    vm.$emit('mouseover', event);
                }
            },

            handleMouseOut(event) {
                const vm = this;
                const {clickable} = vm;

                if (clickable) {
                    vm.$emit('mouseout', event);
                }
            },

            handleMouseEnter(event) {
                const vm = this;
                const {clickable} = vm;

                if (clickable) {
                    vm.$emit('mouseenter', event);
                }
            },

            handleMouseLeave(event) {
                const vm = this;
                const {clickable} = vm;

                if (clickable) {
                    vm.$emit('mouseleave', event);
                }
            }
        }
    };

</script>

<style lang="scss">
@import "../../../assets/styles/vars.scss";

.b-card {
    display: inline-block;
    position: relative;
    padding: 10px 20px;
    margin: 10px 0;
    width: 100%;
    background-color: $white;
    box-sizing: border-box;
    border-radius: 2px;
    box-shadow: $standard-box-shadow;
    transition: box-shadow .3s;

    .b-card-footer {
        margin: 5px 0 0;
        display: flex;
        flex-direction: row-reverse;
        padding: 5px 0;
    }

    .b-card-body {
        font-size: 16px;
        line-height: 20px;
    }

    .b-card-header {
        margin: 0 0 5px;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;

        .b-card-header-title {
            display: inline-block;
            background-color: $white;
        }
    }

    .b-card-media {
        position: relative;

        img {
            width: 100%;
            max-width: 100%;
            vertical-align: bottom;
        }

        .b-card-media-title {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 10px;
            background-color: $gray-transparent;

            color: $white;
        }
    }

    .b-card-title {
        margin: 0 0 10px;
        font-size: $heading3;
        font-weight: 400;
        text-align: left;
    }

    .b-card-subtitle {
        font-size: $heading6;
        font-weight: 300;
        opacity: .8;
        text-align: left;
    }

    img {
        width: 100%;
        max-width: 100%;
    }

    &.size-sm {
        max-width: 320px;
    }

    &.size-md {
        max-width: 480px;
    }

    &.size-lg {
        max-width: 100%;
    }

    &.clickable {
        cursor: pointer;

        &:hover {
            box-shadow: $enhanced-box-shadow-hover;
        }

        &:active {
            box-shadow: $enhanced-box-shadow-active;
        }
    }
}
</style>