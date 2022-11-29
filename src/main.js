import { createApp } from "vue";
import App from "@/App.vue";
import * as echarts from 'echarts'

const app = createApp(App);
// vue3 给原型上挂载属性
app.config.globalProperties.$echarts = echarts;

app.mount('#app');