<script setup>
    import { ref, watchEffect } from 'vue';
    import NodeItem from './NodeItem.vue'

    const API_URL = 'https://localhost:5001/Proyectos';
    const proyectos = ref(null);

    watchEffect(async () => {
        proyectos.value = await (await fetch(API_URL)).json()
    })
</script>
<template>
    <NodeItem v-for="intervention in proyectos" :intervention="intervention" :key="intervention.id" />
</template>