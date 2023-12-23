<template>
  <div class="message-box">
    <div class="message-header">
      <h3>{{ title }}</h3>
      <button @click="closeMessageBox">&times;</button>
    </div>
    <div class="message-body">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  props: {
    title: {
      type: String,
      default: 'Message',
    },
    message: {
      type: String,
      default: 'This is a default message.',
    },
  },
  methods: {
    closeMessageBox() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.message-box {
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  padding: 15px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 8px;
  margin-bottom: 8px;
}

.message-header h3 {
  margin: 0;
  font-size: 1.2em;
}

.message-body {
  color: #333;
}
</style>
