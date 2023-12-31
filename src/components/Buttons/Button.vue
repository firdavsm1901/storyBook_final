

<template>

    <div :class="className" class="button">
        <button
            :autofocus="autofocus"
            :disabled="disabled"
            :name="name"
            :style="btnStyle"
            :type="type"
            @click="handleClick">
            <slot></slot>
        </button>
    </div>

</template>

<script type="text/babel">


    export default {
        name: 'Button',

        props: {
            autofocus: {
                type: Boolean,
                default: false
            },

            btnStyle: {
                type: Object,
                default: () => {}
            },

            disabled: {
                type: Boolean,
                default: false
            },

            theme: {
                type: String,
                default: 'normal'
            },

            name: {
                type: String,
                default: null
            },

            shape: {
                type: String,
                default: 'normal'
            },

            size: {
                type: String,
                default: 'md'
            },

            type: {
                type: String,
                default: 'submit'
            }
        },

        computed: {
            className() {
                const vm = this;
                const {theme, shape, size} = vm;

                return [
                    `theme-${theme}`,
                    `shape-${shape}`,
                    `size-${size}`
                ];
            }
        },

        methods: {
            handleClick(event) {
                const vm = this;
                vm.$emit('click', event);
            }
        }
    };

</script>

<style lang="scss" >
@import "../../assets/styles/vars.scss";

.button {
    display: inline-block;

    button {
        height: unset;
        min-height: 30px;
        padding: 5px 18px;
        font-size: 14px;
        font-weight: 400;
        text-align: center;
        cursor: pointer;
        color: $gray-darker;
        background-color: $white;
        border: 1px solid $gray;
        border-radius: 3px;
        outline: none;
        box-shadow: none;
        transition: .4s;

        &:hover {
            color: $primary;
            background-color: rgba($gray-light, .7);
        }

        &:active {
            color: $primary;
            border-color: $primary;
            background-color: $white;
        }

        &:disabled {
            color: $gray;
            cursor: not-allowed;
            background-color: $gray-lighter;
            border: 1px dashed $gray;

            &:hover {
                color: $gray;
                background-color: $gray-lighter;
                border-color: $gray;
            }
        }
    }

    &.theme-primary {
        button {
            color: $white;
            background-color: $primary-dark;
            border-color: $primary-dark;

            &:hover {
                color: $white;
                background-color: $primary;
            }

            &:active {
                background-color: rgba($primary-dark, .7);
                border-color: rgba($primary-dark, .7);
            }
        }
    }

    &.theme-danger {
        button {
            color: $red;
            background-color: $gray-lighter;
            border-color: $gray-light;

            &:hover {
                color: $white;
                background-color: $red;
                border-color: $red;
            }

            &:active {
                color: $white;
                background-color: $red-dark;
                border-color: $red;
            }
        }
    }

    &.shape-simple {
        button {
            color: $primary;
            background-color: transparent;
            border: none;

            &:hover {
                background-color: $gray-light;
            }

            &:active {
                background-color: $gray;
            }

            &:disabled {
                color: $gray;
                border: none;

                &:hover {
                    background-color: transparent;
                }
            }
        }
    }

    &.shape-link {
        display: inline;

        button {
            height: unset;
            font-size: inherit;
            font-weight: inherit;
            color: $primary-dark;
            background-color: transparent;
            border-color: transparent;
            border-radius: 0;
            padding: 0;

            &:active {
                opacity: .7;
                background-color: transparent;
                border-bottom-color: transparent;
            }

            &:hover {
                color: $primary;
                background-color: transparent;
            }

            &:disabled {
                color: $gray;

                &:hover {
                    border-color: transparent;
                }
            }
        }
    }

    &.shape-round {
        button {
            border-radius: 20px;
        }
    }

    &.shape-icon {
        vertical-align: middle;

        button {
            height: 30px;
            width: 30px;
            padding: 0;
            background-color: transparent;
            border: 1px solid;
            border-color: transparent;
            border-radius: 50%;
            color: $gray-darker;

            i {
                position: relative;
                line-height: 1;
                font-size: 16px;
                font-weight: 100;
            }

            &:hover {
                color: $primary;
                background-color: $primary-lighter;
            }

            &:active {
                color: rgba($primary, .7);
                background-color: rgba($primary-lighter, .7);
                border-color: $primary-light;
            }

            &:disabled {
                color: $gray;

                &:hover {
                    background-color: transparent;
                }
            }
        }
    }

    &.shape-block {
        display: block;

        button {
            width: 100%;
        }
    }

    &.size-lg {
        button {
            font-size: 15px;
            font-weight: 500;
            padding: 0 20px;
            min-height: 35px;
        }

        &.shape-icon {
            button {
                position: relative;
                height: 35px;
                width: 35px;
                padding: 0;

                i {
                    position: relative;
                    top: 2px;
                    font-size: 28px;
                    font-weight: 100;
                }
            }
        }
    }

    &.size-sm {
        button {
            font-size: 10px;
            font-weight: 350;
            padding: 0 10px;
            min-height: 24px;
        }

        &.danger {
            font-weight: 350;
        }

        &.shape-icon {
            button {
                height: 24px;
                width: 24px;
                padding: 0;

                i {
                    font-size: 16px;
                    font-weight: 100;
                }
            }
        }
    }

    i {
        font-size: 14px;
        font-weight: bold;
    }
}
</style>