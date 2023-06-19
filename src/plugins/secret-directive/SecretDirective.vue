<template></template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useSecretDirective } from './useSecretDirective';

const _secretDirective = useSecretDirective()
onMounted(() => {
    // console.log("mounted", _secretDirective)
    document.addEventListener('keyup', (ev: KeyboardEvent) => {
        _secretDirective.addKeysEntered(ev.key)
    })


})
</script>