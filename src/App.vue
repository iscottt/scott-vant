<template>
  <router-view v-slot="{ Component }">
    <transition name="fade-slide" mode="out-in" appear>
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style lang="less">
/* fade-slide */
.fade-slide-leave-active,
.fade-slide-enter-active {
  transition: all 0.3s;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.container {
  width: 100vw;
  height: 100vh;
  background: #f7f8fa;
  padding: 1px 10px;
  box-sizing: border-box;
}

.scott-tag-title {
  margin: 0;
  a {
    box-shadow: -0.1768rem -0.1768rem 0.25rem hsla(0, 0%, 100%, 0.35),
      0.1326rem 0.1326rem 0.3rem rgba(54, 100, 152, 0.15),
      inset 0 0 0 transparent,
      inset max(1px, 0.125rem) max(1px, 0.125rem) max(1px, 0.25rem)
        hsla(0, 0%, 100%, 0.6);
    border: 1px solid;
    border-radius: 0.375rem;
    font-size: 0.8125rem;
    line-height: 10px;
    display: inline-block;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    color: #73869a;
    border-color: rgba(54, 100, 152, 0.15);
    margin: 10px 20px;
  }
}

.scott-block-title {
  margin: 0 20px;
  position: relative;
  z-index: 1;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 0 6px 6px 0;
  border-left: 0.125rem solid #007dff;
  padding: 0.75rem 10px;
  align-items: center;
  box-sizing: border-box;
  color: #415973;
  background: #e8f0fa;
  h3 {
    margin: 0;
    text-shadow: 0 1px 1px #fff;
    font-size: 10px;
    line-height: 1.5rem;
    font-weight: 400;
    box-sizing: border-box;
    color: #007dff;
  }
}

.scott-title {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  &:after {
    content: '';
    display: block;
    height: 1px;
    flex-grow: 1;
    margin-left: 10px;
    border-top: 1px solid rgba(54, 100, 152, 0.15);
    box-shadow: 0 1px hsl(0deg 0% 100% / 80%);
  }
  .title_style {
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    padding-left: 1.5rem;
    h2 {
      color: #007dff;
      font-size: 1.125rem;
      line-height: 1.75rem;
      text-shadow: 0.1326rem 0.1326rem 0.1875rem rgb(0 125 255 / 50%),
        -1px -1px 1px hsl(0deg 0% 100% / 80%);
      font-weight: 400;
      margin: 0;
      &::before,
      &::after {
        content: '';
        display: block;
        width: 0.25rem;
        height: 0.25rem;
        background: #00c6ff;
        box-shadow: inset -0.0625rem -0.0625rem 0.0625rem #007dff,
          -0.0884rem -0.0884rem 0.125rem hsl(0deg 0% 100% / 50%),
          0.0884rem 0.0884rem 0.125rem rgb(0 125 255 / 50%);
        border-radius: 0.0625rem;
        position: absolute;
      }
      &::before {
        top: calc(50% - 0.3125rem) !important;
        left: 0.375rem !important;
      }
      &::after {
        top: calc(50% + 0.0625rem) !important;
        left: 0.375rem !important;
      }
    }
    &::after,
    &::before {
      content: '';
      display: block;
      width: 0.25rem;
      height: 0.25rem;
      background: #00c6ff;
      box-shadow: inset -0.0625rem -0.0625rem 0.0625rem #007dff,
        -0.0884rem -0.0884rem 0.125rem hsl(0deg 0% 100% / 50%),
        0.0884rem 0.0884rem 0.125rem rgb(0 125 255 / 50%);
      border-radius: 0.0625rem;
      left: 0;
      top: 0;
      position: absolute;
    }
    &:before {
      top: calc(50% - 0.3125rem) !important;
    }
    &:after {
      top: calc(50% + 0.0625rem) !important;
    }
  }
}
</style>
