// import { color } from "_echarts@5.1.2@echarts";

const cjEchartsOption = {
    title: {
        text: "成交量统计"
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['10-17', '10-18', '10-19', '10-20', '10-21', '10-22', '10-23']
    },
    yAxis: {
        type: 'value',
        max: 500
    },
    series: [{
        data: [200, 440, 145, 237, 452, 354, 187],
        type: 'line',
        areaStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 0.6,
                colorStops: [{
                    offset: 0,
                    color: '#28AC7D' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#FFFFFF' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            }
        },
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#2DA57A'
                }
            }
        }
    }]
};

const jyzhOption = {
    title: {
        text: '交易转化率统计',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        data: [
            { value: 1048, name: '成交总额' },
            { value: 735, name: '昨日成交额' },
            { value: 484, name: '新增交易额' },
            { value: 300, name: '其他因素' }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

const khfwOption = {
    title: {
        text: '客户访问量统计',
        left: 'left'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
            color: "#28AC7D",
        }

    }]
};
const khfbOption = {
    title: {
        text: '客户分布',
        left: 'center',
    },
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '8%',
        left: 'center'
    },
    series: [{
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '40',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 1048, name: '昨日成交额' },
            { value: 735, name: '新增成交额' },
        ]
    }]
};
//用户年龄
const screenAge = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        top: "55%",
        itemHeight: 5,
        width: 'auto',
        height: '100%',
        textStyle: {
            fontSize: 10,
            color: "#5AC7F9"
        }
    },
    series: [{
        name: '占比人数（人）',
        type: 'pie',
        radius: '50%',
        left: "-12%",
        with: "100%",
        height: "100%",
        bottom: "30%",
        label: {
            fontSize: 12,
            color: "#5AC7F9"
        },
        data: [
            { value: 735, name: '1-20岁' },
            { value: 580, name: '21-40岁' },
            { value: 484, name: '41-60岁' },
            { value: 300, name: '61-80岁' }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

// 设备使用人数
const dvUseOption = {
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '0',
        top:'20%',
        containLabel: true
    },
    legend: {
        data: ['设备使用人数', '设备使用人数'],
        itemHeight: 5,
        width: 'auto',
        height: '100%',
        textStyle: {
            fontSize: 13,
            color: "#5AC7F9"
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        axisLine: {   // 改变x轴颜色
            lineStyle: {
              color: '#5AC7F9',
            }
         },
         textStyle: {
            fontSize: 16,   //字体大小
            color: '#5AC7F9',   //字体颜色
          },
    }],
    yAxis: [{
        type: 'value',
        axisLine: {   // 改变x轴颜色
            lineStyle: {
              color: '#5AC7F9',
            }
         },
         splitLine: {
            show: true,
            lineStyle: {
            type: 'solid',
            color: '#5AC7F9',
            }
          },
          textStyle: {
            fontSize: 16,   //字体大小
            color: '#5AC7F9',   //字体颜色
          },
    }],
    series: [
        {
            name: '设备使用人数',
            type: 'bar',
            barWidth: 30,
            smooth:false,
            itemStyle:{
                normal: {
                  color: function(params) {
                    // var colorList = ['#137cf2','#f89009','#f8d909','#01cc78','#137cf2','#f89009','#f8d909','#01cc78','#137cf2','#f89009','#f8d909','#01cc78','#137cf2'];
                    var colorListr = ['#137cf2','#137cf2','#137cf2','#137cf2','#137cf2','#137cf2','#137cf2','#137cf2','#137cf2','#137cf2','#137cf2','#137cf2',];
                    return colorListr[params.dataIndex]
                  },
                },
              },
              label: {
                normal: {
                  show: true,
                  fontSize: 12,
                  fontWeight: '500',
                  color: '#ffffff',
                  position: 'top',
                }
              },
            data: [50.0, 80.0, 77.0, 45.0, 180.0, 146.0, 135.0, 162.0, 88.0, 120.0, 60.0, 39.0],
  
        },

    ]
};


// 地区用户人数
const regionaluserOption = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
        },
      
    },
    grid: {
        left: '2%',
        right: '3%',
        bottom: '0',
        top:'20%',
        containLabel: true
    },
    legend: {
        left: '5%',
        width: 'auto',
        textStyle: {
            fontSize: 12,
            color: "#5AC7F9"
        },
        data:['1月', '2月','3月','4月','5月']
    },

    calculable : true,
    xAxis : [
        {
            type : 'value',
            axisLine: {   // 改变x轴颜色
                lineStyle: {
                  color: '#5AC7F9',
                }
             },
             splitLine: {
                show: true,
                lineStyle: {
                type: 'solid',
                color: '#5AC7F9',
                }
              },
              textStyle: {
                fontSize: 16,   //字体大小
                color: '#5AC7F9',   //字体颜色
              },
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['江西','广西','江苏','浙江','安徽'],
            axisLine: {   // 改变x轴颜色
                lineStyle: {
                  color: '#5AC7F9',
                }
             },
              textStyle: {
                fontSize: 16,   //字体大小
                color: '#5AC7F9',   //字体颜色
              },
        }
    ],
    series : [
        {
            name:'1月',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[420, 382, 301, 450, 630, 330, 320],
            with: "85%",
            height: "85%",
            label: {
                fontSize: 12,
                color: "#5AC7F9"
            },
        },
        {
            name:'2月',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[560, 400, 520, 720, 380, 260, 760],
            with: "85%",
            height: "85%",
            label: {
                fontSize: 12,
                color: "#5AC7F9"
            },
        },
        {
            name:'3月',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[370, 540, 390, 500, 290, 330, 820],   
        },
        {
            name:'4月',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[860, 460, 450, 560, 360, 330,1010]
        },
        {
            name:'5月',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[820, 832, 901, 934, 1290, 1330, 1320],
            label: {
                fontSize: 12,
                color: "red"
            },
        }
    ]
};
// 用户平均步数
const userstepsOption = {
    title : {
        text: '用户平均步数（日）',
        subtext: ' ',
        itemHeight: 5,
        left: '5%',
        width: 'auto',
        height: '100%',
        textStyle: {
            fontSize: 12,
            color: "#5AC7F9"
        },
    },
    grid: {
        left: '2%',
        right: '3%',
        bottom: '0',
        top:'20%',
        containLabel: true
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['本月','上月'],
        itemHeight: 5,
        left: '35%',
        width: 'auto',
        height: '100%',
        textStyle: {
            fontSize: 12,
            color: "#5AC7F9"
        },
    },

    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['0','1','2','3','4','5','6','7','8','9','10','11','12'],
            axisLine: {   // 改变x轴颜色
                lineStyle: {
                  color: '#5AC7F9',
                  width: '1',
                }
             },
            
        }
    ],
    yAxis : [
        {
          type : 'value',
          // 修改网格的颜色
          splitLine: {
            show: true,
            lineStyle: {
            type: 'solid',
            color: '#5AC7F9',
            }
          },
          axisLine: {   // 改变x轴颜色
            lineStyle: {
              color: '#5AC7F9',
              width: '1',
            }
         },
        }
    ],
    series : [
        {
            name:'本月',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[20, 32, 51, 74, 260, 830, 710,800,620,180,450,900,320]
        },
        {
            name:'上月',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[30, 182, 434, 791, 390, 300, 10,20,30,150,180,600,320]
        }        
    ]
};
// 异常状态人数占比
const abnormalOption = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'left',
        data:['正常','体温预警','体温预警','sos告警'],
        itemHeight: 5,
        right: '0',
        width: 'auto',
        height: '100%',
        textStyle: {
            fontSize: 12,
            color: "#5AC7F9"
        },
        
    },
    toolbox: {
        show : true,
        feature : {
            magicType : {
                show: true, 
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'center',
                        max: 1548,

                    }
                }
            },      
        }
    },
    calculable : true,
    series : [
        {
            name:'异常状态人数占比',
            type:'pie',
            radius : ['50%', '70%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false,
                    },
                    labelLine : {
                        show : false,
                       
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        textStyle : {
                            fontSize : '30',
                            fontWeight : 'bold',
                          
                        }
                    }
                }
            },
            data:[
                {value:335, name:'正常'},
                {value:544, name:'体温预警'},
                {value:135, name:'sos告警'}
               
            ]
        }
    ]
};


export default { cjEchartsOption, jyzhOption, khfwOption, khfbOption, screenAge,dvUseOption, regionaluserOption, userstepsOption, abnormalOption}