<template>
  <div class="app-bar">
    <div class="app-bar-wrapper">
      <div v-if="showLeftIcon" class="app-bar-wrapper-left">
        <slot name="left"
          ><van-icon :name="leftIconType" @click="emit('leftIconClick')"
        /></slot>
      </div>
      <div class="app-bar-wrapper-center">
        <slot name="center">{{ title }}</slot>
      </div>
      <div v-if="showRightIcon" class="app-bar-wrapper-right">
        <slot name="right"
          ><van-icon name="cross" @click="emit('rightIconClick')"
        /></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Icon } from 'vant'
export default {
  components: {
    [Icon.name]: Icon,
  },
  props: {
    title: String,
    showLeftIcon: {
      type: Boolean,
      default: true,
    },
    leftIconType: {
      validator(value: string) {
        return ['arrow-left', 'cross'].includes(value)
      },
      default: 'arrow-left',
    },
    showRightIcon: Boolean,
  },
  setup(props, { emit }) {
    return { props, emit }
  },
}
</script>

<style lang="stylus" scoped>
.app-bar
  position relative
  height 50px
  &-wrapper
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 100%
    text-align center
    &-left
      float left
      & i
        color var(--common-font-color)
    &-center
      display inline-block
      text-align center
      mixin-font(var(--common-font-color), $font-size-lg)
    &-right
      float right
      color var(--common-font-color)
</style>
