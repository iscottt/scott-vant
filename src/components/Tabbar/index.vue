<template>
<van-tabbar>
  <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item icon="search">标签</van-tabbar-item>
  <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
  <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
</van-tabbar>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const active = ref(0)
</script>

<style scoped lang="less"></style>
