<template>
  <left-menu />
  <login-section />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useThemes from '@/hooks/themes/useThemes'
import LeftMenu from './components/LeftMenu.vue'
import LoginSection from '@/components/login/LoginSection.vue'

export default defineComponent({
  name: 'App',
  components: {
    LeftMenu,
    LoginSection,
  },
  setup() {
    useThemes()
  },
})
</script>
