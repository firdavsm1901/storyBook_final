<template>
    <footer class="footer"
        :style="{height:height}">
        <slot></slot>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: {
        height: String
    }
};
</script>