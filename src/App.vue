<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useThemes from '@/hooks/themes/useThemes'

export default defineComponent({
  name: 'App',
  setup() {
    useThemes()
  },
})
</script>
