<template>
  <van-search v-bind="$attrs" />
</template>

<script>
import { Search } from 'vant'

export default {
  components: {
    [Search.name]: Search,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="stylus" scoped>
.van-search
  flex 1 0 auto
  bg-color(unset)
  padding 0 15px
  &:deep() .van-search__content
    display flex
    align-items center
    height 40px
    bg-color(#333037)
    bd-radius(25px)
</style>
