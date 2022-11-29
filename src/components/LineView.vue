<template>
  <div id="myChart" :style="{width: '900px', height: '300px'}"></div>
</template>
<script>
//导入axios
import axios from "axios";
export default {
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于刚刚准备好的 DOM 容器，初始化 EChart 实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            title: { text: '各设备各个状态持续时长' },
            tooltip: {},
            xAxis: {
                data: []
            },
            yAxis: {},
            series: [{
                name: '数量',
                type: 'bar',
                data: [98,21,43,54,65,67,99,56,90]
            }]
        });

// 在下方进行异步加载数据
//   // 填入数据
var results = new Array()
async function f(){
for (let i = 0; i < 9; i++) (
await axios.get('/api/machine/getIndustrial?').then((res) => {
    results.push(res.data.data[i].machineName)
    console.log(res.data.data[i].machineName)
  })
)
myChart.setOption({
    xAxis: {
      data: results,
    }
  });
}
f();
    }
  }
}
</script>