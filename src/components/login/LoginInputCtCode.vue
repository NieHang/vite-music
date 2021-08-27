<template>
  <van-popup
    v-model:show="showInputCtCodeSection"
    position="right"
    :style="{ width: '100%', height: '100%' }"
  >
    <div class="login-section-ctcode">
      <AppBar
        title="手机号登录"
        leftIconType="cross"
        @leftIconClick="emit('update:show')"
      />
      <div class="login-section-ctcode-content">
        <div class="title">
          <div>请输入验证码</div>
          <div class="subtitle">
            <div class="subtitle-left">
              <span>已发送至+852 1</span>
              <svg-icon name="number-pen" />
            </div>
            <div class="subtitle-right">49s</div>
          </div>
        </div>
        <div class="ctcode">
          <van-password-input
            :value="ctcode"
            :mask="false"
            :gutter="10"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
            class="ctcode-input"
          />
          <!-- 数字键盘 -->
          <van-number-keyboard
            v-model="ctcode"
            :show="showKeyboard"
            :maxlength="6"
            @blur="showKeyboard = false"
          />
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script>
import AppBar from '@/components/shared/AppBar.vue'
import { PasswordInput, NumberKeyboard } from 'vant'
import { ref } from '@vue/reactivity'
import { nextTick, watch } from '@vue/runtime-core'

export default {
  name: 'LoginInputCtCode',
  props: {
    showInputCtCodeSection: Boolean,
  },
  components: {
    [PasswordInput.name]: PasswordInput,
    [NumberKeyboard.name]: NumberKeyboard,
    AppBar,
  },
  setup(props, { emit }) {
    const ctcode = ref('')
    const showKeyboard = ref(true)
    watch(ctcode, async (val) => {
      await nextTick()

      const nodes = document.getElementsByClassName('van-password-input__item')
      nodes[val.length - 1 < 0 ? 0 : val.length - 1].classList.add(
        'input-active'
      )
      if (val === '') nodes[0].classList.remove('input-active')
    })

    return { emit, ctcode, showKeyboard }
  },
}
</script>

<style lang="stylus" scoped>
.login-section-ctcode
  padding 0 16px
  height 100%
  bg-color(var(--body-bgcolor))
  .login-section-ctcode-content
    & > .title
      mixin-font(var(--common-font-color), $font-size-md, $font-weight-sm)
      .subtitle
        display flex
        align-items center
        justify-content space-between
        margin-top 10px
        mixin-font(var(--cell-group-title-color), $font-size-xs)
        &-left
          & > span
            margin-right 5px
          & > .svg-icon
            stroke #4f4f4f
        &-right
          mixin-font(#7b7b7b, $font-size-xs, $font-weight-sm)
    & > .phone-number
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
        caret-color #436bf2
      & > i
        float right
        color var(--cell-group-title-color)
        transform translateY(20%)
    & > .ctcode
      margin-top 20px
      .ctcode-input
        &:deep() .van-password-input__security
          li
            bg-color(unset)
            border-bottom 1px solid #282828
            color #fff
          .input-active
            border-bottom 1px solid #fff
</style>
