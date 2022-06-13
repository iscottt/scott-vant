<template>
  <div class="container">
    <div class="scott-title">
      <div class="title_style">
        <h2>故障单</h2>
      </div>
    </div>
    <van-grid :column-num="4" :border="false" :gutter="10">
      <van-grid-item
        icon="passed"
        text="接单"
        @click="navigateTo('/receive')"
      />
      <van-grid-item
        icon="share-o"
        text="回单"
        @click="navigateTo('/return')"
      />
    </van-grid>
    <div class="scott-title">
      <div class="title_style">
        <h2>办公耗材</h2>
      </div>
    </div>
    <van-grid :column-num="4" :border="false" :gutter="10">
      <van-grid-item icon="notes-o" @click="navigateTo('/asset')">
        <template #text>
          <div class="van-grid-item__text">资产租用</div>
          <div class="van-grid-item__text">确认</div>
        </template>
      </van-grid-item>
      <van-grid-item icon="chat-o" @click="navigateTo('/asset-comment')">
        <template #text>
          <div class="van-grid-item__text">资产租用</div>
          <div class="van-grid-item__text">评价</div>
        </template>
      </van-grid-item>
      <van-grid-item icon="notes-o" @click="navigateTo('/consumptive')">
        <template #text>
          <div class="van-grid-item__text">耗材领用</div>
          <div class="van-grid-item__text">确认</div>
        </template>
      </van-grid-item>
      <van-grid-item icon="chat-o" @click="navigateTo('/consumptive-comment')">
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
      <van-grid-item
        badge="99+"
        text="待接单"
        icon="passed"
        @click="navigateTo('/receive')"
      />
      <van-grid-item
        badge="99+"
        text="待回单"
        icon="share-o"
        @click="navigateTo('/return')"
      />
    </van-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigateTo = (path: any) => {
  router.push({
    path,
  });
};
</script>

<style scoped lang="less">
.card {
  padding: 5px 0;
  margin: 10px 0;
}
</style>
