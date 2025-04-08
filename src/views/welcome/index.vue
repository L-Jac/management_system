<script setup lang="ts">
import { defineOptions } from "vue";

defineOptions({
  name: "Welcome"
});
</script>

<template>
  <div class="container">
    <h1 class="greeting">你好，admin</h1>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.greeting {
  font-size: 4rem;
  color: #333;
}
</style>
