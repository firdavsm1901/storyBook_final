<template>
    <div class="collapse-item" :class="{'collapse-item-active': this.isActive}">
      <div class="collapse-item-header" @click="toggle">
        <icon class="collapse-icon" size="18" type="&#xe6a7;"></icon>
        <slot></slot>
      </div>
      <collapse-transition>
        <div class="collapse-content" v-show="isActive">
          <div class="collapse-content-box">
            <slot name="content"></slot>
          </div>
        </div>
      </collapse-transition>
    </div>
  </template>
  
  <script>
  import CollapseTransition from "./CollapseTransition";
  
  export default {
    name: "collapse-item",
    props: {
      name: String
    },
    components: {
      CollapseTransition
    },
    data() {
      return {
        index: 0,
        isActive: false
      };
    },
    methods: {
      toggle() {
        this.$parent.toggle({
          name: this.name || this.index,
          isActive: this.isActive
        });
      }
    }
  };
  </script>