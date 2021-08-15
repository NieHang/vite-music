<template>
  <van-cell
    v-bind="$attrs"
    :class="[
      { 'hide-line-through': noLineThrough },
      { 'scale-title': needScaleTitle },
    ]"
  >
    <!-- <template v-if="!$attrs.title" #title>
      <slot name="title" />
    </template> -->
    <template v-if="!noRightContent" #right-icon>
      <slot name="right" />
      <i
        :class="[
          'van-badge__wrapper van-icon van-cell__right-icon',
          `van-icon-${icon}`,
        ]"
      ></i>
    </template>
  </van-cell>
</template>

<script>
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
    needScaleTitle: {
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
      func-font(var(--cell-group-title-color))
      display inline-block
      transform scale(.7) translateX(-20%)
</style>
