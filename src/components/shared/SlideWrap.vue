<template>
  <div class="slide-wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SlideWrap',
  setup() {
    return {}
  },
}
</script>

<style lang="stylus" scoped>
.slide-wrap
  white-space nowrap
  overflow overlay
  scrollbar-width none /* firefox */
  -ms-overflow-style none /* IE 10+ */
  &::-webkit-scrollbar
    display none /* Chrome Safari */
</style>
