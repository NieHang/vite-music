<template>
  <van-icon name="wap-nav" badge="99+" @click="controlLeftMenu" />
</template>

<script lang="ts">
import { Icon } from 'vant'
import { useStore } from 'vuex'
import { ACTION } from '@/types'
import { computed, Ref, ref } from 'vue'

export default {
  name: 'WapNav',
  components: {
    [Icon.name]: Icon,
  },
  setup() {
    const store = useStore()

    const leftMenuStatus = computed(() => store.state.global.showLeftMenu)

    const controlLeftMenu = () =>
      store.dispatch(ACTION.GLOBAL_SHOW_LEFT_MENU, !leftMenuStatus.value)

    return { controlLeftMenu }
  },
}
</script>

<style lang="stylus" scoped>
.van-icon
  font-size 25px
  color $w
  &:deep() .van-badge
    top 6px
    right 5px
    border 2px solid var(--body-bgcolor)
</style>
