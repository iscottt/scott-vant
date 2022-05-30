<template>
  <div class="w-full bg-white p-3 rounded-md shadow-xl shadow-gray-100 mb-4">
    <div class="content p-2">
      <p class="text-gray-700 my-1 flex align-center justify-between">
        系统管理员1提交的工单
        <van-tag color="#ffe1e1" text-color="#ad0000" class="ml-2">高</van-tag>
      </p>
      <div
        class="w-full flex align-center justify-start text-sm text-gray-500 mt-2"
      >
        <p class="w-20" style="text-align-last: justify">申请时间：</p>
        <p>2021-9-9 09：00</p>
      </div>
      <div
        class="w-full flex align-center justify-start text-sm text-gray-500 mt-2"
      >
        <p class="w-20" style="text-align-last: justify">处室/实例：</p>
        <p>浙食链ES-ECS-2</p>
      </div>
      <div
        class="w-full flex align-center justify-start text-sm text-gray-500 mt-2"
      >
        <p class="w-20" style="text-align-last: justify">概要内容：</p>
        <p class="flex-1">
          Jackson 最新反序列化漏(CVE-2019-14361和CVE-201。。。
        </p>
      </div>
    </div>
    <div class="w-full flex align-center justify-end">
      <p class="scott-tag-title" @click="receiveOrder">
        <a href="javascript:;" style="margin: 0">接单</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Dialog } from 'vant';
const receiveOrder = () => {
  Dialog.confirm({
    title: '提示',
    confirmButtonText: '确认接单',
    message: '是否确认接单？',
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    });
};
</script>

<style scoped lang="less"></style>
