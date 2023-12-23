<template>
    <div class="grid" :class="classes" ref="grid"><slot></slot></div>
</template>
<script>
    import elementResizeDetectorMaker from 'element-resize-detector';
    import throttle from 'lodash.throttle';

    export default {
        name: 'Grid',
        provide () {
            return {
                GridInstance: this
            };
        },
        props: {
            col: {
                type: Number,
                default: 3
            },
            square: {
                type: Boolean,
                default: false
            },
            padding: {
                type: String,
                default: '24px'
            },
            center: {
                type: Boolean,
                default: false
            },
            border: {
                type: Boolean,
                default: true
            },
            hover: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                resizeCount: 0,
                handleResize: () => {},
            };
        },
        computed: {
            classes () {
                return {
                    'grid-center': this.center,
                    'grid-border': this.border,
                    'grid-hover': this.hover
                };
            }
        },
        methods: {
            onResize () {
                this.resizeCount++;
            }
        },
        mounted () {
            this.handleResize = throttle(this.onResize, 150, {leading: false});
            this.observer = elementResizeDetectorMaker();
            this.observer.listenTo(this.$refs.grid, this.handleResize);
        },
        beforeUnmount () {
            this.observer.removeListener(this.$refs.grid, this.handleResize);
        }
    };
</script>