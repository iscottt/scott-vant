<template>
  <div class="container">
    <div class="fixed-lt w-full z-60">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="list-main pt-15">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <template v-for="item in list" :key="item">
            <OrderItem />
          </template>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import OrderItem from '@/components/orderItem/index.vue';
const value1 = ref(0);
const value2 = ref('0');
const option1 = [
  { text: '工单类别', value: 0 },
  { text: '手工单', value: 1 },
  { text: '智能单', value: 1 },
];
const option2 = [
  { text: '工单级别', value: '0' },
  { text: '高', value: 'a' },
  { text: '中', value: 'b' },
  { text: '低', value: 'c' },
];
const list = ref<any>([]);
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1);
    }
    loading.value = false;

    if (list.value.length >= 40) {
      finished.value = true;
    }
  }, 1000);
};
const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
</script>

<style scoped lang="less"></style>
