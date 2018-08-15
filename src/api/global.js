import fetchers from './ajaxConfig'
// //拼接逗号参数
export function getIds(dataArr, idName) {
  var arr = [];
  dataArr.forEach(item => {
    arr.push(item[idName]);
  });
  var str = arr.join(",");
  return str;
}
// 提示框
// success 成功 warning 警告 error 错误 
export function messageBox(msg, type = null) {
  this.$message({
    showClose: true,
    message: msg,
    type: type
  });
}
// 带确认取消提示框
export function sureMessageBox(msg, callback = () => {}) {
  this.$confirm(msg, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    // 确定回调
    callback('sure');
  }).catch(() => {
    // 取消回调
    callback('cancel');
  });
}
// 重新设定border去掉横向滚动条
export function resetBorder() {
  this.$nextTick(() => {
    let table = document.querySelectorAll('.el-table--group,.el-table--border');
    table.forEach(v => {
      v.style.border = 'none';
      v.style.border = '1px solid #ebeef5';
    })

  })
}
// ajaxPro
export function ajaxPro(url, {
  paramsData = null,
  data = null,
  i = 'api', //axios实例，默认api
  type = 'get', //默认get
  header = null
} = {}) {
  return fetchers[i]({
    method: type, //请求类型 默认get
    url: url, //请求url
    params: paramsData, //query请求参数
    data: data, //data请求参数
    headers: header, //请求头
  })
}
//格式化时间戳
export function dateFormat(timestamp, formats) {
  // formats格式包括
  // 1. Y-m-d
  // 2. Y-m-d H:i:s
  // 3. Y年m月d日
  // 4. Y年m月d日 H时i分
  formats = formats || 'Y-m-d';
  var zero = function (value) {
    if (value < 10) {
      return '0' + value;
    }
    return value;
  };

  var myDate = timestamp ? new Date(timestamp) : new Date();
  var year = myDate.getFullYear();
  var month = zero(myDate.getMonth() + 1);
  var day = zero(myDate.getDate());
  var hour = zero(myDate.getHours());
  var minite = zero(myDate.getMinutes());
  var second = zero(myDate.getSeconds());
  return formats.replace(/Y|m|d|H|i|s/ig, function (matches) {
    return ({
      Y: year,
      m: month,
      d: day,
      H: hour,
      i: minite,
      s: second
    })[matches];
  });
}
// 调用方式
// item.operatorDate = this.dateFormat(item.operatorDate, 'Y-m-d H:i:s');


// 去除table因竖向滚动条引起的多余横向滚动条
// dom  dom2 元素
// pageW 页面宽度
export function removeScrollXbar(dom, dom2, pageW) {
  let tableWrap = document.querySelectorAll(dom)[0];
  let tWidth = document.querySelectorAll(dom2)[0].offsetWidth;
  if (tWidth > pageW) {
    tableWrap.style.overflowX = 'auto';
  } else {
    tableWrap.style.overflowX = 'hidden';

  }
}
// 调用 removeScrollXbar('#tb1 .el-table__body-wrapper', '#tb1 .el-table__body', document.body.clientWidth)

//数组原型中注入equals对比方法
Array.prototype.equals = function (array) {
  // if the other array is a falsy value, return
  if (!array)
    return false;

  // compare lengths - can save a lot of time 
  if (this.length != array.length)
    return false;

  for (var i = 0, l = this.length; i < l; i++) {
    // Check if we have nested arrays
    if (this[i] instanceof Array && array[i] instanceof Array) {
      // recurse into the nested arrays
      if (!this[i].equals(array[i]))
        return false;
    } else if (JSON.stringify(this[i]) !== JSON.stringify(array[i])) {
      return false;
    }
  }
  return true;
}

// 缓存排序下拉,点击排第一
export function selectSort(self, key, arr, name = null) {
  for (let i = 0; i < self[key].length; i++) {
    if (arr === (typeof self[key][i] === 'object' ? self[key][i][name] : self[key][i])) {
      let item = self[key][i];
      self[key].splice(i, 1)
      self[key].unshift(item);
      break;
    }
  }
}

// 判断是否缓存了什么key,对比数据源和更新数据源。
export function islocalSomething(self, res, sortkey, comparekey) {
  let islocal;
  if (JSON.parse(localStorage.getItem(sortkey))) {
    islocal = true;
  } else {
    islocal = false;
  }
  //  存入未排序的国家列表对比数据源到本地缓存
  !islocal ? localStorage.setItem(comparekey, JSON.stringify(res)) : ''
  // 如果没有缓存
  if (!islocal) {
    self[sortkey] = [...res];
  } else {
    if (!JSON.parse(localStorage.getItem(comparekey)).equals(res)) {
      self[sortkey] = [...res];
      // 更新未排序的国家列表对比数据源到本地缓存
      localStorage.setItem(sortkey, JSON.stringify(res));
      localStorage.setItem(comparekey, JSON.stringify(res));
    } else {
      islocal ? self[sortkey] = JSON.parse(localStorage.getItem(sortkey)) : ''
    }
  }
}
// islocalSomething(this, res.data.data, 'countryList', 'countryListcompare');

// 控件权限新接口
export function getNewJurisdiction(name) {
  let limit = JSON.parse(localStorage.getItem("limit"));
  let map = {};
  if (limit) {
    for (let item of limit) {
      if (item.menuName == name) {
        item.controlList.forEach(v => {
          map[v.singleKey] = v.controlDisplay;
        });
        break;
      }
    }
  }
  return map;

}
//  权限设置
export function setAuthority(singleKey) {
  return true;
  if (this.authorityMap[singleKey] != 'undefined') {
    return this.authorityMap[singleKey];
  } else {
    return true;
  }
}

//小屏隐藏显示输入框
export function showBTN() {
  let cw = () => {
    if (document.body.clientWidth < 1200) {
      this.showBtn = true;
      this.showInput = false;
    } else {
      this.showBtn = false;
      this.showInput = true;
    }
  };
  cw();
  window.onresize = () => {
    cw();

  }
}



console.log('已被引入！')
