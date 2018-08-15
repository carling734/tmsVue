<template>
    <el-header class='tms-header'>
      <slot></slot>
    </el-header>
</template>

<script>

export default {
name:"tms-header"
   
};
</script>

<style >
.tms-header {
  background-color: #f7f7f7;
  height: 40px !important;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
}

</style>