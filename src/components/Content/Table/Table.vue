<template>
    <table :class="['lob-table', spaceClassName]">
      <slot />
    </table>
  </template>
  
  <script>
  export default {
    name: 'LobTable',
    props: {
      space: {
        type: String,
        default: 'md',
        validator: function (value) {
          return ['sm', 'md', 'lg'].includes(value);
        }
      }
    },
    computed: {
      spaceClassName() {
        return `space-${this.space}`;
      }
    },
    methods: {}
  };
  </script>
  
  <style scoped lang="scss">
  .lob-table {

    width: 100%;
    border-collapse: collapse;
    border: 1px solid black;

  }
  
  .space-sm {
    ::v-deep(th),
    ::v-deep(td) {
      @apply py-1;
      @apply px-2;
    }
  }
  
  .space-md {
    ::v-deep(th),
    ::v-deep(td) {
      @apply p-2;
    }
  }
  
  .space-lg {
    ::v-deep(th),
    ::v-deep(td) {
      @apply p-4;
    }
  }
  </style>
  