// Vue3已经不再支持filter

//全局处理时间格式类型
app.filter("dataFormat", function (oraginValue) {
  if (null != oraginValue) {
    const dt = new Date(oraginValue);
    const y = dt.getFullYear();
    const m = (dt.getMonth() + 1 + "").padStart(2, 0);
    const d = (dt.getDate() + "").padStart(2, 0);

    const hh = (dt.getHours() + "").padStart(2, 0);
    const mm = (dt.getMinutes() + "").padStart(2, 0);
    const ss = (dt.getSeconds() + "").padStart(2, 0);
    // return ${y}-${m}-${d} ${hh}:${mm}:${ss};
    return y + "-" + m + "-" + d + " " + hh + ":" + mm + ":" + ss;
  } else {
    return "";
  }
});

//全局处理时间格式类型
app.filter("dataFormatDate", function (oraginValue) {
  if (null != oraginValue) {
    const dt = new Date(oraginValue);
    const y = dt.getFullYear();
    const m = (dt.getMonth() + 1 + "").padStart(2, 0);
    const d = (dt.getDate() + "").padStart(2, 0);

    const hh = (dt.getHours() + "").padStart(2, 0);
    const mm = (dt.getMinutes() + "").padStart(2, 0);
    const ss = (dt.getSeconds() + "").padStart(2, 0);
    // return ${y}-${m}-${d} ${hh}:${mm}:${ss};
    return y + "-" + m + "-" + d;
  } else {
    return "";
  }
});

// 全局过滤器处理后台访问地址<el-upload>使用
app.filter("getServerUrl", function (urlValue) {
  if (null != urlValue) {
    const serverUrl = "http://192.168.2.21:8852/data-farm";
    return serverUrl;
  }
});
