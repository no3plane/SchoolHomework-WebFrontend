/* 停车统计 */
const stopOption = {
    title: {
        text: '单位（辆）',
        textStyle: {
            color: "white",
            fontSize: 12
        },
        left: 50,
        top: 10
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        right: 10,
        textStyle: {
            color: "#ffff",
            fontSize: 12
        },
        data: ['入园', '出园']
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '0%',
        containLabel: true,
        width: "95%", // 宽度
        height: "80%" // 高度

    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00时', '04时', '08时', '12时', '16时', '20时'],
        axisLabel: {
            show: true,
            textStyle: {
                color: "white"
            }
        }
    },
    yAxis: {
        show: true,
        type: 'value',
        max: 500,
        min: 0,
        splitLine: {
            show: false //去掉网格线
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "white"
            }
        }
    },
    series: [{
            name: '入园',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 0]
        },
        {
            name: '出园',
            type: 'line',
            stack: '总量',
            data: [150, 80, 200, 350, 240]
        }
    ]
};

/* 公共设施 */
const ggssOption = {
    title: {
        text: '单位（件）',
        textStyle: {
            color: "white",
            fontSize: 12
        },
        left: 50,
        top: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        width: "92%", // 宽度
        height: "85%" // 高度
    },
    xAxis: [{
        type: 'category',
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "white"
            }
        }
    }],
    yAxis: [{
        show: true,
        type: 'value',
        max: 500,
        splitLine: {
            show: false //去掉网格线
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "white"
            }
        }
    }],
    series: [{
        name: '维修总次数',
        type: 'bar',
        barWidth: '40%',
        data: [500, 52, 200, 334, 390, 330, 220]
    }]
};
/* 事件上报统计 */
const sjsbOption = {
    title: {
        text: '单位（件）',
        textStyle: {
            color: "white",
            fontSize: 12
        },
        left: 50,
        top: 0
    },
    tooltip: {
        trigger: 'axis'
    },

    legend: {
        right: 10,
        textStyle: {
            color: "#ffff",
            fontSize: 12
        },
        data: ['上周', '本周']
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        width: "95%", // 宽度
        height: "83%" // 高度
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['周一', '周二', '周三', '今日', '周五', '周六', '周日'],
        axisLabel: {
            show: true,
            textStyle: {
                color: "white"
            }
        }
    }],
    yAxis: [{
        type: 'value',
        max: 100,
        splitLine: {
            show: false //去掉网格线
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "white"
            }
        }
    }],
    series: [{
            name: '上周',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 88.6],
        },
        {
            name: '本周',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 78.6],

        }
    ]
};
const sdykOption = {
    title: {
        text: '单位（人）',
        textStyle: {
            color: "white",
            fontSize: 12
        },
        left: 50,
        top: 0
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        right: 10,
        textStyle: {
            color: "#ffff",
            fontSize: 12
        },
        data: ['出园人数', '入园人数']
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        width: "95%", // 宽度
        height: "80%" // 高度
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['7时', '9时', '11时', '13时', '15时', '17时', '19时'],
        axisLabel: {
            show: true,
            textStyle: {
                color: "white"
            }
        }
    }],
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false //去掉网格线
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "white"
            }
        }
    }],
    series: [{
            name: '出园人数',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '入园人数',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },

    ]
};
const kyfxOption1 = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '0%',
        left: 40,
        textStyle: {
            color: "#ffff",
            fontSize: 12
        },
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        right: "0",
        top: "10",
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '15',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 1048, name: '男' },
            { value: 735, name: '女' },

        ]
    }]
};
const keyxOption2 = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '0%',
        right: 20,
        textStyle: {
            color: "#ffff",
            fontSize: 12
        },
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        right: "0",
        top: "10",
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '15',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [
            { value: 1048, name: '本省' },
            { value: 7350, name: '外省' },

        ]
    }]
};
export default { stopOption, ggssOption, sjsbOption, sdykOption, kyfxOption1, keyxOption2 }