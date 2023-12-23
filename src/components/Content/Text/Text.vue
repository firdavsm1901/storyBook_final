
<template>
    <p :style="textStyle">
      <slot></slot>
    </p>
  </template>
  
  <script>
  export default {
    name: 'Text',
    props: {
      fontSize: {
        type: String,
        default: '16px',
      },
      color: {
        type: String,
        default: 'black', 
      },
    },
    computed: {
      textStyle() {
        return {
          fontSize: this.fontSize,
          color: this.color,

        };
      },
    },
  };
  </script>
  