<template>
  <van-popup
    v-model:show="showLoginSection"
    closeable
    close-icon-position="top-left"
    position="bottom"
    :style="{ height: '100%' }"
    >内容
  </van-popup>
</template>

<script lang="ts">
import { Popup } from 'vant'

export default {
  name: 'LoginSection',
  components: {
    [Popup.name]: Popup,
  },
  props: {
    showLoginSection: {
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

<style lang="scss" scoped></style>
