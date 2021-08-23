<template>
  <van-cell
    v-bind="$attrs"
    :class="[
      { 'hide-line-through': noLineThrough },
      { 'scale-title': isCellGroupTitle },
    ]"
  >
    <!-- <template v-if="!$attrs.title" #title>
      <slot name="title" />
    </template> -->
    <template v-if="!noRightContent" #right-icon>
      <slot name="right" />
      <i
        v-if="!noRightIcon"
        :class="[
          'van-badge__wrapper van-icon van-cell__right-icon',
          `van-icon-${icon}`,
        ]"
      ></i>
    </template>
  </van-cell>
</template>

<script lang="ts">
import { Cell } from 'vant'

export default {
  components: {
    [Cell.name]: Cell,
  },
  props: {
    icon: {
      type: String,
      default: 'arrow',
    },
    noLineThrough: {
      type: Boolean,
      default: false,
    },
    noRightContent: {
      type: Boolean,
      default: false,
    },
    noRightIcon: {
      type: Boolean,
      default: false,
    },
    isCellGroupTitle: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return {
      props,
    }
  },
}
</script>

<style lang="stylus" scoped>
.van-cell
  mixin-font(var(--cell-font-color), 14px, $font-weight-lg)
  bg-color(transparent)
  &:deep() .van-cell__value
    mixin-font(var(--cell-group-title-color))
  &:deep() .van-badge
    border none
    mixin-font(var(--badge-font-color), 12px, $font-weight-lg)
    bg-color(var(--badge-bgcolor))
  &:deep() .van-switch
    bg-color(var(--switch-bgcolor))
  &:after
    margin-right: -($font-size-lg)
    border-bottom: 1px solid var(--cell-line-through-color)
.hide-line-through
  &:after
    display none
.scale-title
  line-height 12px
  &:deep() .van-cell__title
    & > span
      mixin-font(var(--cell-group-title-color))
      display inline-block
      transform scale(.7) translateX(-20%)
</style>
