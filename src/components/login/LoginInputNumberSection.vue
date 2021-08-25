<template>
  <van-popup
    v-model:show="showInputNumberSection"
    position="right"
    :style="{ width: '100%', height: '100%' }"
  >
    <div class="login-section-number">
      <AppBar
        title="手机号登录"
        leftIconType="cross"
        @leftIconClick="emit('update:show')"
      />
      <div class="login-section-number-content">
        <div class="title">
          <div>登录体验更多精彩</div>
          <div>未注册手机号登录后将自动创建账号</div>
        </div>
        <div class="phone-number">
          <div @click="showIndexNumberPerfix = true">+{{ numberPerfix }}</div>
          <input type="number" v-model="phoneNumber" placeholder="输入手机号" />
          <van-icon name="clear" @click="phoneNumber = ''" />
        </div>
        <div :class="['next-btn', { dismiss: !phoneNumber }]">下一步</div>
      </div>
    </div>
    <van-popup
      v-model:show="showIndexNumberPerfix"
      round
      position="bottom"
      :style="{ width: '100%', height: '100%' }"
    >
      <div class="login-section-number-index">
        <AppBar
          title="选择国家和地区"
          leftIconType="cross"
          @leftIconClick="showIndexNumberPerfix = false"
        />
        <van-index-bar :index-list="indexList" @click="getCurrentNumberPerfix">
          <template v-for="(item, index) in countryNumberPerfix" :key="index">
            <van-index-anchor :index="index" />
            <van-cell
              v-for="number in item"
              :key="number"
              :title="number[0]"
              :value="`+${number[1]}`"
              :data-perfix="number[1]"
              class="perfix-index-cell"
            />
          </template>
        </van-index-bar>
      </div>
    </van-popup>
  </van-popup>
</template>

<script lang="ts">
import { Popup, Icon, IndexBar, IndexAnchor, Cell } from 'vant'
import AppBar from '@/components/shared/AppBar.vue'
import { toRefs } from 'vue'
import useLoginInputNumber from '@/hooks/login/useLoginInputNumber'

export default {
  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell,
    AppBar,
  },
  props: {
    showInputNumberSection: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const {
      state,
      getCountryNumberPerfixAndIndexListData,
      getCurrentNumberPerfix,
    } = useLoginInputNumber()
    getCountryNumberPerfixAndIndexListData()
    return {
      emit,
      ...toRefs(state),
      getCurrentNumberPerfix,
    }
  },
}
</script>

<style lang="stylus" scoped>
.login-section-number
  padding 0 16px
  height 100%
  bg-color(var(--body-bgcolor))
  .login-section-number-content
    margin-top 15px
    & > .title
      mixin-font(var(--common-font-color), $font-size-md, $font-weight-sm)
      & > div:nth-child(2)
        margin-top 5px
        mixin-font(var(--cell-group-title-color), $font-size-xs)
    & > .phone-number
      // display flex
      // align-items center
      mixin-font(var(--common-font-color))
      margin-top 20px
      border-bottom 1px solid #262626
      padding-bottom 10px
      & > div
        display inline-block
        &:after
          display inline-block
          content ''
          width 0
          height 0
          border 5px solid var(--common-font-color)
          border-bottom-color transparent
          border-left-color transparent
          border-right-color transparent
          transform translate(5px, 4px)
      & > input
        bg-color(transparent)
        border none
        margin-left 15px
      & > i
        float right
        color var(--cell-group-title-color)
        transform translateY(20%)
    & > .next-btn
      height 50px
      line-height 50px
      text-align center
      mixin-font(var(--common-font-color))
      background-image linear-gradient(to right, #5a2723 , #5b1310)
      bd-radius(25px)
      margin-top 30px
    & > .dismiss
      color var(--dismiss-font-color)
.login-section-number-index
  padding 0 16px
  bg-color(var(--body-bgcolor))
  color var(--common-font-color)
  .app-bar
    position fixed
    top 0
    width calc(100% - 32px)
    height 50px
    bg-color(var(--body-bgcolor))
    z-index 2
  &:deep()
    .van-index-bar
      padding-top 50px
    .van-index-anchor
      color var(--common-font-color)
    .van-index-anchor--sticky
      bg-color(var(--body-bgcolor))
      top 50px
    .van-cell
      color var(--common-font-color)
      bg-color(var(--body-bgcolor))
</style>
