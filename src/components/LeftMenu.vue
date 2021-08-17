<template>
  <section :class="['left-menu', { show: showLeftMenu }]" @click="hideLeftMenu">
    <aside ref="leftMenuAsideRef" class="left-menu-aside">
      <div class="left-menu-aside-info">
        <van-image
          round
          lazy-load
          width="30px"
          height="30px"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <span @click="show">肥橘 ></span>
      </div>

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
            <van-switch
              v-model="themeChecked"
              @change="changeTheme(Number(themeChecked))"
            />
          </template>
        </VanCell>
      </van-cell-group>
    </aside>
  </section>
  <LoginSection :showLoginSection="showLoginSection" />
</template>

<script lang="ts">
import { Icon, Image, CellGroup, Badge, Switch, Popup } from 'vant'
import VanCell from '@/components/VanCell.vue'
import LoginSection from '@/components/LoginSection.vue'
import { toRefs } from '@vue/reactivity'
import { useStore } from 'vuex'
import useTheme from '@/hooks/themes/useThemes'
import useLeftMenu from '@/hooks/leftMenu/useLeftMenu'
import { ref } from 'vue'

export default {
  name: 'LeftMenu',
  components: {
    [Image.name]: Image,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Badge.name]: Badge,
    [Switch.name]: Switch,
    [Popup.name]: Popup,
    VanCell,
    LoginSection,
  },
  setup() {
    const store = useStore()

    const changeTheme = useTheme()

    const { leftMenuState, hideLeftMenu } = useLeftMenu(store)

    const showLoginSection = ref(false)

    const show = () => (showLoginSection.value = true)

    store.commit('SHOW_LEFT_MENU', true)

    return {
      ...toRefs(leftMenuState),
      hideLeftMenu,
      changeTheme,
      show,
      showLoginSection,
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
  bg-color(rgba(38, 38, 38, .5))
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
      mixin-font(white, 14px, $font-weight-sm)
      & > span
        margin-left 10px
    &-group
      margin 10px 0 0
      missing-corner(var(--linear-gradient-double-missing-corner), var(--linear-gradient-double-missing-corner-background-size))
      bd-radius(var(--cell-group-border-radius))
      &:after
        border none

.show
  left 0
</style>
