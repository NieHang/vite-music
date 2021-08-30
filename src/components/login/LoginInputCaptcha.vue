<template>
  <van-popup
    v-model:show="showInputCtCodeSection"
    position="right"
    :style="{ width: '100%', height: '100%' }"
    @open="startCountTime"
    @close="clearCountTime"
  >
    <div class="login-section-captcha">
      <AppBar
        title="手机号登录"
        leftIconType="cross"
        @leftIconClick="emit('update:show')"
      />
      <div class="login-section-captcha-content">
        <div class="title">
          <div>请输入验证码</div>
          <div class="subtitle">
            <div class="subtitle-left">
              <span>已发送至+{{ ctcode }} {{ phone }}</span>
              <svg-icon name="number-pen" />
            </div>
            <div class="subtitle-right">
              <span v-show="restOfTimeForGetCaptcha"
                >{{ restOfTimeForGetCaptcha }}s</span
              >
              <span
                v-show="!restOfTimeForGetCaptcha"
                @click="getCaptchaAgain(phone, ctcode)"
                >重新发送</span
              >
            </div>
          </div>
        </div>
        <div class="captcha">
          <van-password-input
            :value="captcha"
            :mask="false"
            :gutter="10"
            :focused="showKeyboard"
            :length="4"
            @focus="showKeyboard = true"
            class="captcha-input"
          />
          <!-- 数字键盘 -->
          <van-number-keyboard
            v-model="captcha"
            :show="showKeyboard"
            :maxlength="4"
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
import { toRefs } from '@vue/reactivity'
import useLoginInputCaptcha from '@/hooks/login/useLoginInputCaptcha'

export default {
  name: 'LoginInputCaptcha',
  props: {
    showInputCtCodeSection: Boolean,
    ctcode: {
      type: String,
      default: '86',
    },
    phone: {
      type: String,
      required: true,
    },
  },
  components: {
    [PasswordInput.name]: PasswordInput,
    [NumberKeyboard.name]: NumberKeyboard,
    AppBar,
  },
  setup(props, { emit }) {
    const { state, startCountTime, getCaptchaAgain, clearCountTime } =
      useLoginInputCaptcha()

    return {
      emit,
      ...toRefs(state),
      startCountTime,
      getCaptchaAgain,
      clearCountTime,
    }
  },
}
</script>

<style lang="stylus" scoped>
.login-section-captcha
  padding 0 16px
  height 100%
  bg-color(var(--body-bgcolor))
  .login-section-captcha-content
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
          span:nth-child(2)
            mixin-font(#436bf2, $font-size-xs, $font-weight-sm)
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
    & > .captcha
      margin-top 20px
      .captcha-input
        &:deep() .van-password-input__security
          li
            position relative
            bg-color(unset)
            border-bottom 1px solid #282828
            color #fff
            &:after
              content: ''
              position absolute
              left 0
              bottom 0
              width 0
              height 1px
              bg-color(#fff)
              transition all ease .5s
          .input-active
            &:after
              width 100%
        &:deep() .van-number-keyboard
          bg-color(#313131)
</style>
