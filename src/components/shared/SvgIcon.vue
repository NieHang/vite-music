<template>
  <svg class="svg-icon" v-bind="$attrs">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { computed, PropType } from '@vue/runtime-core'

export default {
  props: {
    name: {
      type: String as PropType<String>,
      required: true,
    },
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.name}`)
    return {
      iconName,
    }
  },
}
</script>

<style lang="stylus" scoped>
.svg-icon
  width 1em
  height 1em
  fill currentColor
  vertical-align middle
</style>
