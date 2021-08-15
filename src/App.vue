<template>
  <left-menu />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useThemes from '@/hooks/themes/useThemes'
import LeftMenu from './components/LeftMenu.vue'

export default defineComponent({
  name: 'App',
  components: {
    LeftMenu,
  },
  setup() {
    useThemes()
  },
})
</script>
