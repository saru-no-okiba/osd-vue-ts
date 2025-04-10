<template>
  <osdVw />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import osdVw from './components/osdVw.vue';

export default defineComponent({
  name: 'App',
  components: {
    osdVw
  }
});
</script>