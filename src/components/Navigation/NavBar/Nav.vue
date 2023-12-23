<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li v-for="(item, index) in items" :key="index" class="navbar-item">
        <a :href="item.link" class="navbar-link">{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>

.navbar {
  background-color: white;
  padding: 10px;
}

.navbar-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navbar-item {
  margin-right: 15px;
}

.navbar-link {
  color: black;
  text-decoration: none;
  padding: 8px;
}

.navbar-link:hover {
  background-color: #9b9494;
}
</style>
