# 前端 web项目 架构基础代码

## 此代码仅适用于web项目，h5项目请切换h5分支

### 项目主要技术

* 构建工具@vue/cli(3.6.0) + gulp(3.9.1)
* vue(2.6.10)
* ant-design-vue(1.3.8)
* axios(0.18.0)
* sass/postcss

### 项目本地运行

* 前提：全局安装 `@vue/cli` 、 `node` 和 ( `npm` or `yarn` or `cnpm` )
* `yarn` or `cnpm i` or `npm i`
* `npm start`

### 开发指南

* .env.development/.env.test/.env.qa/.env.production分别代表开发环境、测试环境、qa环境、生产环境的配置，主要用于BASE_URL及其他环境变量的配置，变量必须以VUE_APP_开头
* vue.config.js文件中，可自行编写mock接口，以提高开发效率，减少开发过程中对后端接口的依赖

### 项目打包部署自动化

* 前提：全局安装 `gulp` 和 `npm` ，gulp版本号需为3.9.1

* 在项目根目录新建文件夹publish

* `cd publish`

* `git clone xxx(xxx为发布代码git地址) .`，注意最后的.不能省略

* `npm run test` 打包部署测试环境

* `npm run qa` 打包部署qa环境

* `npm run prod` 打包部署生产环境