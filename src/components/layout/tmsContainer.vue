<template>
  <div class='tms-container'>
    <el-container>
      <slot></slot>
    </el-container>
  </div>
</template>

<script>

export default {
name:"tms-container"
   
};
</script>

<style>
.tms-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  height: 100%;
}

.tms-container > section {
  height: 100%;
}

</style>