<template>
    <el-header class='tms-header tms-breadcrumb-header'>
      <slot></slot>
    </el-header>
</template>

<script>

export default {
name:"tms-breadcrumb-header"
   
};
</script>

<style >
.tms-breadcrumb-header .el-breadcrumb {
  padding-top: 10px;
  font-size: 14px !important;
  line-height: 20px;
}

.tms-breadcrumb-header .el-breadcrumb__item .el-breadcrumb__inner {
  color: #909399;
  cursor: text !important;
  font-weight: 900;
}
</style>