<template>
  <div class="container">
    <div class="scott-title">
      <div class="title_style">
        <h2>故障单</h2>
      </div>
    </div>
    <van-grid :column-num="4" :border="false" :gutter="10">
      <van-grid-item icon="passed" text="接单" />
      <van-grid-item icon="share-o" text="回单" />
    </van-grid>
    <div class="scott-title">
      <div class="title_style">
        <h2>办公耗材</h2>
      </div>
    </div>
    <van-grid :column-num="4" :border="false" :gutter="10">
      <van-grid-item icon="notes-o">
        <template #text>
          <div class="van-grid-item__text">资产租用</div>
          <div class="van-grid-item__text">确认</div>
        </template>
      </van-grid-item>
      <van-grid-item icon="chat-o">
        <template #text>
          <div class="van-grid-item__text">资产租用</div>
          <div class="van-grid-item__text">评价</div>
        </template>
      </van-grid-item>
      <van-grid-item icon="notes-o">
        <template #text>
          <div class="van-grid-item__text">耗材领用</div>
          <div class="van-grid-item__text">确认</div>
        </template>
      </van-grid-item>
      <van-grid-item icon="chat-o">
        <template #text>
          <div class="van-grid-item__text">耗材领用</div>
          <div class="van-grid-item__text">评价</div>
        </template>
      </van-grid-item>
    </van-grid>
    <div class="scott-title">
      <div class="title_style">
        <h2>待办事项</h2>
      </div>
    </div>
    <van-grid :column-num="4" :border="false" :gutter="10">
      <van-grid-item badge="99+" text="待接单" icon="passed" />
      <van-grid-item badge="99+" text="待回单" icon="share-o" />
    </van-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
</script>

<style scoped lang="less">
.container {
  width: 100vw;
  height: 100vh;
  background: #f7f8fa;
  padding: 1px 10px;
  box-sizing: border-box;
}
.card {
  padding: 5px 0;
  margin: 10px 0;
}
</style>
