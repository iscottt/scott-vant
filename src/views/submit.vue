<template>
  <div class="container">
    <van-form @submit="onSubmit">
      <div class="px-4 pt-5 pb-4 text-gray-500 text-sm">基本信息</div>
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="工单级别"
          label="工单级别"
          placeholder="工单级别"
          :rules="[{ required: true, message: '请填写工单级别' }]"
        />
        <van-field
          v-model="password"
          name="申请日期"
          label="申请日期"
          placeholder="申请日期"
          :rules="[{ required: true, message: '请填写申请日期' }]"
        />
        <van-field
          v-model="password"
          name="申请人"
          label="申请人"
          placeholder="申请人"
          :rules="[{ required: true, message: '请填写申请人' }]"
        />
        <van-field
          v-model="password"
          name="电话"
          label="电话"
          placeholder="电话"
          :rules="[{ required: true, message: '请填写电话' }]"
        />
        <van-field
          v-model="password"
          name="部门"
          label="部门"
          placeholder="部门"
          :rules="[{ required: true, message: '请填写部门' }]"
        />
      </van-cell-group>

      <div class="px-4 pt-5 pb-4 text-gray-500 text-sm">回复信息</div>
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="工单级别"
          label="工单级别"
          placeholder="工单级别"
          :rules="[{ required: true, message: '请填写工单级别' }]"
        />
        <van-field
          v-model="password"
          name="申请日期"
          label="申请日期"
          placeholder="申请日期"
          :rules="[{ required: true, message: '请填写申请日期' }]"
        />
        <van-field
          v-model="password"
          name="申请人"
          label="申请人"
          placeholder="申请人"
          :rules="[{ required: true, message: '请填写申请人' }]"
        />
        <van-field
          v-model="password"
          name="电话"
          label="电话"
          placeholder="电话"
          :rules="[{ required: true, message: '请填写电话' }]"
        />
        <van-field
          v-model="password"
          name="部门"
          label="部门"
          placeholder="部门"
          :rules="[{ required: true, message: '请填写部门' }]"
        />
      </van-cell-group>
    </van-form>
    <div class="m-5">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const username = ref('');
const password = ref('');
const onSubmit = (values: any) => {
  console.log('submit', values);
};
</script>

<style scoped lang="less"></style>
