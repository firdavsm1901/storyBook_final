<template>
    <header class="header"
        :style="{height:height}">
        <slot></slot>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        height: String
    }
};
</script>