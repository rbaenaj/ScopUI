<script setup>
    import { ref, watchEffect } from 'vue';
    import NodeX from './ScopNodeX.vue'

    const API_URL = 'https://localhost:5001/Proyectos';
    API_URL = 'https://scop.santalucia.cc:5001/Proyectos';
    API_URL = 'https://79.116.10.59:5001/Proyectos';
    
    const proyectos = ref(null);

    watchEffect(async () => {
        proyectos.value = await (await fetch(API_URL)).json()
    })
</script>
<template>
    <NodeX v-for="intervention in proyectos" :intervention="intervention" :key="intervention.id" />
</template>