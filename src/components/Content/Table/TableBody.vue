<template>
    <tbody class="custom-table-body"><slot /></tbody>
  </template>
  
  <script>
  export default {
    name: 'TableBody'
  };
  </script>
  
  <style scoped>

  .custom-table-body td {
    border: 1px solid #000; 

  }
  </style>
  