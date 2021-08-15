<template>
  <section :class="['left-menu', { show: showLeftMenu }]" @click="hideLeftMenu">
    <aside class="left-menu-aside">
      <router-link to="#" class="left-menu-aside-info">
        <van-image
          round
          lazy-load
          width="30px"
          height="30px"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <span>肥橘 ></span>
      </router-link>
      <van-cell-group inset class="left-menu-aside-group">
        <VanCell
          title="音乐服务"
          noRightContent
          needScaleTitle
          class="left-menu-aside-group-title"
        >
        </VanCell>
        <VanCell title="信息中心" center>
          <template v-slot:right>
            <van-badge :content="100" max="99" />
          </template>
        </VanCell>
        <van-cell title="单元格" value="内容" is-link />
      </van-cell-group>
    </aside>
  </section>
</template>

<script>
import { Icon, Image, Cell, CellGroup, Badge } from 'vant'
import VanCell from '@/components/VanCell.vue'
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
  components: {
    [Image.name]: Image,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Badge.name]: Badge,
    VanCell,
  },
  setup() {
    const store = useStore()
    setTimeout(() => {
      store.commit('SHOW_LEFT_MENU', true)
    }, 0)
    const hideLeftMenu = (e) => {
      if (e.target.parentElement.className.indexOf('left-menu') === -1)
        store.commit('SHOW_LEFT_MENU', false)
    }
    return {
      showLeftMenu: computed(() => store.state.showLeftMenu),
      hideLeftMenu,
    }
  },
}
</script>

<style lang="stylus" scoped>
.left-menu
  position absolute
  top 0
  left -100%
  width 100%
  height 100%
  background-color rgba(38, 38, 38, .8)
  transition left 1s ease
  &-aside
    position absolute
    top 0
    width calc(80% - 20px)
    height calc(100% - 10px)
    padding 10px 10px 0
    background-color var(--body-bgcolor)
    &-info
      display flex
      align-items center
      func-font(white, 14px, $font-size-n)
      & > span
        margin-left 10px
    &-group
      margin 10px 0 0
      background-color var(--cell-bgcolor)
      & > .van-cell
        func-font(var(--cell-font-color))
        background-color var(--cell-bgcolor)
        & > .van-badge
          border none
          background-color var(--logo-bgcolor)
.show
  left 0
</style>
