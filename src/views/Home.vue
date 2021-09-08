<template>
  <section class="home-wrapper">
    <header class="header">
      <wap-nav />
      <search-input disabled placeholder="搜索音乐、视频、博客、歌词" />
      <svg-icon name="microphone" stroke="white" fill="white" />
    </header>
    <div class="banners">
      <van-skeleton title title-width="100%" round :row="0" :loading="!banners">
        <van-swipe class="my-swipe" indicator-color="white">
          <van-swipe-item v-for="item in banners" :key="item.targetId">
            <van-image width="100%" radius="8px" :src="item.imageUrl"
              ><span :class="`title-${item.titleColor}`">{{
                item.typeTitle
              }}</span></van-image
            >
          </van-swipe-item>
        </van-swipe>
      </van-skeleton>
    </div>
  </section>
</template>

<script lang="ts">
import { Icon, Swipe, SwipeItem, Image, Skeleton } from 'vant'
import WapNav from '@/components/shared/Wap.vue'
import { defineComponent, toRefs } from 'vue'
import SvgIcon from '@/components/shared/SvgIcon.vue'
import SearchInput from '@/components/shared/SearchInput.vue'
import useHome from '@/hooks/home/useHome'

export default defineComponent({
  name: 'Home',
  components: {
    [Icon.name]: Icon,
    [Image.name]: Image,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Skeleton.name]: Skeleton,
    SearchInput,
    WapNav,
    SvgIcon,
  },
  setup() {
    const { homeState } = useHome()
    return {
      ...toRefs(homeState),
    }
  },
})
</script>

<style lang="stylus" scoped>
.home-wrapper
  padding 15px
  height calc(100vh - 30px)
  bg-color(var(--body-bgcolor))
  .header
    display flex
    align-items center
    justify-content space-between
  .banners
    margin-top 10px
    &:deep() .van-skeleton__title
      height 138px
      border-radius $border-radius-xs
    &:deep() .van-swipe-item
      position relative
      overflow hidden
      .van-image > span
        position absolute
        right 0
        bottom 0px
        padding 5px
        border-top-left-radius $border-radius-xs
        mixin-font($w, $font-size-sm)
        text-align center
      .van-image > .title-red
        bg-color(#fc5243)
      .van-image > .title-blue
        bg-color(#4de8f9)
    &:deep() .van-swipe__indicator
      width 15px
      height 4px
      bd-radius(2px)
</style>
