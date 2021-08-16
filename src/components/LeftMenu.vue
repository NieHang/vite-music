<template>
  <section :class="['left-menu', { show: showLeftMenu }]" @click="hideLeftMenu">
    <aside ref="leftMenuAsideRef" class="left-menu-aside">
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
      <van-cell-group class="left-menu-aside-group">
        <VanCell
          title="音乐服务"
          noRightContent
          isCellGroupTitle
          class="left-menu-aside-group-title"
        />
        <VanCell title="信息中心" center>
          <template v-slot:right>
            <van-badge :content="100" max="99" />
          </template>
        </VanCell>
        <VanCell title="单元格" value="内容" />
      </van-cell-group>
      <van-cell-group class="left-menu-aside-group">
        <VanCell
          title="其他"
          noRightContent
          isCellGroupTitle
          class="left-menu-aside-group-title"
        />
        <VanCell title="切换主题" center noRightIcon>
          <template v-slot:right>
            <van-switch v-model="themeChecked" />
          </template>
        </VanCell>
      </van-cell-group>
    </aside>
  </section>
</template>

<script lang="ts">
import { Icon, Image, CellGroup, Badge, Switch } from 'vant'
import VanCell from '@/components/VanCell.vue'
import { computed, reactive, toRefs } from '@vue/reactivity'
import { useStore } from 'vuex'
import useTheme from '@/hooks/themes/useThemes'
import { Themes, MUTATION } from '@/types'
import { watch } from 'vue'

interface LeftMenuStateType {
  leftMenuAsideRef: null | HTMLElement
  themeChecked: Boolean
  showLeftMenu: () => Boolean
}

export default {
  components: {
    [Image.name]: Image,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Badge.name]: Badge,
    [Switch.name]: Switch,
    VanCell,
  },
  setup() {
    const store = useStore()

    const changeTheme = useTheme()

    const leftMenuState: LeftMenuStateType = reactive({
      leftMenuAsideRef: null,
      themeChecked: false,
      showLeftMenu: computed(() => store.state.showLeftMenu),
    })

    setTimeout(() => {
      store.commit(MUTATION.SHOW_LEFT_MENU, true)
    }, 0)

    const hideLeftMenu = (e: any) => {
      if (!(leftMenuState.leftMenuAsideRef as any).contains(e.target))
        store.commit(MUTATION.SHOW_LEFT_MENU, false)
    }

    watch(
      (): Boolean => leftMenuState.themeChecked,
      (themeChecked: Boolean) => {
        changeTheme(themeChecked ? Themes.Cyber : Themes.Default)
      }
    )

    return {
      ...toRefs(leftMenuState),
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
  bg-color(rgba(38, 38, 38, .8))
  transition left .5s ease
  &-aside
    position absolute
    top 0
    width calc(80% - 20px)
    height calc(100% - 10px)
    padding 10px 10px 0
    bg-color(var(--body-bgcolor))
    &-info
      display flex
      align-items center
      func-font(white, 14px, $font-size-n)
      & > span
        margin-left 10px
    &-group
      margin 10px 0 0
      fancy-corner(var(--cell-group-linear-gradient), 50%, 100%)
      // bg-color(var(--cell-bgcolor))
.show
  left 0
</style>
