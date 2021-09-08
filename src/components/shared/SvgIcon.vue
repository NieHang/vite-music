<template>
  <svg class="svg-icon" v-bind="$attrs" :style="{ stroke: stroke, fill: fill }">
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
    stroke: String,
    fill: String,
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
  vertical-align middle
</style>
