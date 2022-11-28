在最开始前，需要一些基础的前端知识下面给出了Vue脚手架官网地址，本项目任务也是基于Vue Cli 实现的
[Vue Cli](https://cli.vuejs.org/zh/#%E8%B5%B7%E6%AD%A5)
## 创建Vue Cli项目
```
vue create myvue
```
比赛环境中项目是创建好的，关于创建项目的相关配置可以全部默认，需要详细了解官网实例都有给出。
## 第二部分：解读Vue-cli项目结构
看一下刚才生成的项目目录结构

说明：每个人应用的模板和版本不一样生成的项目目录结构可能和下面的有所区别，（下面是vue-cli（版本2.9.9）以webpack模板生成的项目）

```
|-- build                            // 项目构建(webpack)相关代码
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- utils.js                     // 构建工具相关
|   |-- vue-loader.conf.js           // webpack loader配置
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置,构建开发本地服务器
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|-- src                              // 源码目录
|   |-- components                   // vue公共组件
|   |-- router                       // vue的路由管理
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件，比如一些图片，json数据等
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- .postcsssrc                       // postcss配置文件
|-- README.md                        // 项目说明
|-- index.html                       // 入口页面
|-- package.json                     // 项目基本信息,包依赖信息等

```
这其中我们使用最多的是App.vue和components组件，通过vue.config.js来完成端口跨域
# 项目配置
## 在main.js中进行配置
```
import { createApp } from "vue";
import App from "@/App.vue";
import * as echarts from 'echarts'

const app = createApp(App);
// vue3 给原型上挂载属性
app.config.globalProperties.$echarts = echarts;

app.mount('#app');
```
## 注册components组件作为各个图表任务
```
<template>
  <div id="myChart" :style="{width: '600px', height: '300px'}"></div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to kalacloud.com'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '太阳系八大行星的卫星数量' },
            tooltip: {},
            xAxis: {
                data: ["水星","金星","地球","火星","木星","土星","金王星","海王星"]
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: [0, 0, 1, 2, 79, 82, 27, 14]
            }]
        });

// 在下方进行异步加载数据
// $.get('data.json').done(function(data) {
//   // 填入数据
  myChart.setOption({
    xAxis: {
      data: ["水星","金星","地球","火星","木星","土星","金王星","刘星"]
    },
//     series: [
//       {
//         // 根据名字对应到相应的系列
//         name: '销量',
//         data: data.data
//       }
//     ]
  });
// });
        
    }
  }
}
</script>
```
## 配置App.vue


## 配置端口跨域
