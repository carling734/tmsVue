## 费用登记.审核  前端项目

> 本项目基于 vue2 + vue-cli +ElemetUI 开发


### 项目背景
1. 现状：发货渠道计费设置太复杂，调拨渠道计费无线上管理，每个月实际发生费用与预估费用相差较大。

   目标：管理发货渠道与调拨渠道的计费设置，按每个渠道商的报价维护价格，生成计费，把每笔费用的发生都清晰的管理起来。与渠道商对账，可以很清楚的知道对账差异，并进行修正。

### 关键业务描述


费用登记管理：1、新增费用、导入费用、修改（单条修改、重新导入）2、查询、导出

费用审核管理：1、查询、导出2、审核（单条修改、批量审核）

### 项目路线图
- 费用登记管理
- 费用审核管理2 

### 外链地址

#### [cost-controller](http://swg3.banggood.cn:8086/swagger-ui.html#/cost-controller)费用登记控制器

GET

[/express/cost/downloadExcelTemplate](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/downloadExcelTemplateUsingGET)

下载模板

GET

[/express/cost/exportCost](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/exportCostUsingGET)

导出费用登记

GET

[/express/cost/getBillType](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/getBillTypeUsingGET)

查询单据类型

GET

[/express/cost/getProgressBar](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/getProgressBarUsingGET)

获取进度条

GET

[/express/cost/getReviewStatus](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/getReviewStatusUsingGET)

查询审核状态

POST

[/express/cost/importCost](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/importCostUsingPOST)

导入费用

GET

[/express/cost/queryPage](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/queryPageUsingGET)

费用登记分页查询

POST

[/express/cost/review](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/reviewUsingPOST)

审核保存

GET

[/express/cost/reviewExport](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/reviewExportUsingGET)

审核页面导出接口

GET

[/express/cost/reviewPage](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/reviewPageUsingGET)

审核页面

POST

[/express/cost/save](http://swg3.banggood.cn:8086/swagger-ui.html#/operations/cost-controller/saveUsingPOST)

保存

### 前置工作

1. 安装nodejs 6.5或以上
2. 全局安装 npm

### 执行命令

​	npm run dev

# 依赖安装
npm install

- 在 localhost:8080 运行开发环境测试站点，
- 如果需要更改端口号，可修改 /config/index.js 中的 `dev.port` 属性。
- npm run dev

- 编译并压缩生产环境文件到 dist 目录
  npm run build

- build for production and view the bundle analyzer report
- npm run build --report


### 创建新应用

vue init webpack 新应用名字



### 应用目录

#### 费用登记管理

- index (费用登记管理首页)  

### 目录结构
```bash
.
├── api                 # 所有 API 接口统一封装在该目录
│   ├── api.js          # 新增广告API
├── build               # 构建配置相关文件
├── config              # 配置相关文件
│   ├── dev.env.js      # 开发环境配置文件
│   ├── index.js        # 配置文件入口
│   └── prod.env.js     # 生产环境配置文件
├── dist                # 编译构建目录
├── index.html          # 站点入口 html 模板
├── package.json        # package.json
├── src                 # 源码目录
│   ├── App.vue         # 站点入口
│   ├── main.js         # 站点初始化入口
│   ├── assets          # 需要打包的静态资源存放目录目录
│   ├── components      # 公用组件目录
│   ├── router          # 路由配置目录
├── static              # 不需打包的静态资源存放目录
```

#### 路由

站点路由路由配置存放在 /src/router 目录下。 index.js 为统一入口文件。

#### 项目依赖框架

项目以Element UI为主要框架进行构建,已更新版本为2.0.5

vue最低要求2.5.0版本以上

#### 组件

对于全项目的组件，存放于 /src/components 中。

组件编码规范可参考 《Vue.js 组件编码规范》

   

### 开发人

- 产品负责人 蒋芳
- 开发负责人 刘亚华
- 测试负责人 代慧琴