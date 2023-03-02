<template>
  <div class="container">
    <!-- 商品发布 -->
    <div class="system">
      <div class="tab">普朗克农场管理系统</div>
      <i class="el-icon-minus"></i>
      <i class="el-icon-arrow-right"></i>
      <div class="tab">商品发布</div>
    </div>
    <!-- 查询部分 -->
    <div class="query">
      <div class="search">
        <div class="frame">
          <el-input v-model="input" placeholder="请输入关键字" class="inp"></el-input>
          <el-button type="primary" size="medium"
            style="background: linear-gradient(90deg, #425FCA 0%, #6484DD 100%);">查询</el-button>
          <!-- <el-button size="medium" class="reset">重置</el-button> -->
        </div>
        <div class="category">
          <div class="category-s">类别：</div>
          <el-select v-model="value" placeholder="全部" class="choice">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="shelf">
        <div class="onekey">
          <el-button size="medium" class="reset" @click="offShelf">一键下架</el-button>
          <el-button size="medium" class="reset" @click="upperShelf">一键上架</el-button>
        </div>
        <div>
          <el-button type="primary" size="medium" @click="applyRefundList = true"
            style="background: linear-gradient(90deg, #425FCA 0%, #6484DD 100%);">新品发布</el-button>
          <el-dialog title="发布商品" :visible.sync="applyRefundList" :close-on-click-modal="true" :modal="true"
            :show-close="true" :center="true" class="dialo">
            <div class="all">
              <div class="uploads">
                <div class="tu">图片:&nbsp;&nbsp;</div>
                <el-upload :action=getBaseUrl() list-type="picture-card" :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl">
                </el-dialog>
              </div>
              <div class="consyt">
                <div style="display:flex;">
                  <div class="lianx">
                    <div class="tuik">名称：</div>
                    <el-input v-model="inputList" placeholder="请输入名称"></el-input>
                  </div>
                  <div class="jine">
                    <div class="tuik">类别：</div>
                    <el-select v-model="value" placeholder="请选择类别">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="lianxs">
                  <div class="tuik tuiks">价格：1份/</div> &nbsp;
                  <el-input v-model="inputNum" placeholder="请输入价格"></el-input>&nbsp;
                  <div class="jin">公斤</div>
                </div>
                <div class="brief">
                  <div class="brief-s">简介：</div>
                  <textarea placeholder="请输入内容" class="contenteditable" maxlength="100" @input="descInput"
                    v-model="desc"></textarea>
                  <div class="number">{{ txtVal }}/100</div>
                </div>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="applyRefundList = false" class="cancel">取 消</el-button>
              <el-button type="primary" class="releases">
                <div @click="dialogVisibleList(index)">发 布</div>
              </el-button>
            </span>
          </el-dialog>
        </div>
      </div>
    </div>
    <!-- 列表头 -->
    <div class="list">
      <div class="select select-a">全选</div>
      <div class="imag">商品图片</div>
      <div class="names">商品名称</div>
      <div class="categorysr">商品类别</div>
      <div class="time">时间</div>
      <div class="price">价格</div>
      <div class="introduction">商品简介</div>
      <div class="operation">操作</div>
    </div>
    <!-- 列表内容 -->
    <div class="contents">
      <div class="content-a" v-for="(item, index) in fruits" :key="index">
        <div class="select">
          <img src="../assets/images/carSh1.png">
          <!-- <img src="../assets/images/carSh1.png"> -->
        </div>
        <div class="imag"><img src="../assets/images/ping.png"></div>
        <div class="names">{{ item.name }}</div>
        <div class="categorysr">{{ item.categorys }}</div>
        <div class="time">{{ item.time }}</div>
        <div class="price">{{ item.price }}</div>
        <div class="introduction">{{ item.introduction }}</div>
        <div class="operation modify">
          <div class="modify-s" @click="modifyRelease = true">修改</div>
          <el-dialog title="发布商品" :visible.sync="modifyRelease" :close-on-click-modal="true" :modal="true"
            :show-close="true" :center="true" class="dialo">
            <div class="all">
              <div class="uploads">
                <div class="tu">图片:&nbsp;&nbsp;</div>
                <el-upload :action=getBaseUrl() list-type="picture-card" :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" src="../assets/images/ping.png">
                </el-dialog>
              </div>
              <div class="consyt" v-if="(item, index) in fruits" :key="index">
                <div style="display:flex;">
                  <div class="lianx">
                    <div class="tuik">名称：</div>
                    <el-input v-model="item.name" placeholder="请输入名称"></el-input>
                  </div>
                  <div class="jine">
                    <div class="tuik">类别：</div>
                    <el-select v-model="item.categorys" placeholder="请选择类别">
                      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                </div>
                <div class="lianxs">
                  <div class="tuik tuiks">价格：1份/</div> &nbsp;
                  <el-input v-model="item.number" placeholder="请输入价格"></el-input>&nbsp;
                  <div class="jin">公斤</div>
                </div>
                <div class="brief">
                  <div class="brief-s">简介：</div>
                  <textarea placeholder="请输入内容" class="contenteditable" maxlength="100" @input="descInput"
                    v-model="item.introduction"></textarea>
                  <div class="number">{{ txtVal }}/100</div>
                </div>
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="modifyRelease = false" class="cancel">取 消</el-button>
              <el-button type="primary" class="releases">
                <div @click="dialogVisibleLists(index)">发 布</div>
              </el-button>
            </span>
          </el-dialog>
          <div class="line">|</div>
          <div class="shelfs">下架</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {

  },
  data() {
    return {
      applyRefundList: false,
      modifyRelease: false,
      consultContext: "",
      dialogVisible: false,
      dialogImageUrl: '',
      inputNum: "",
      fruits: [{
        imgUrl: '../assets/images/ping.png',
        name: '苹果',
        categorys: '水果类',
        time: '2021/07/31',
        price: '1份/2.5斤',
        number: "2",
        introduction: '我们采用蔬菜大棚人工有机种植蔬菜水果等有机食品',
      }, {
        imgUrl: '/src/assets/images/cheng.png',
        name: '橙子',
        categorys: '水果类',
        time: '2021/06/31',
        price: '1份/2.5斤',
        number: "2",
        introduction: '我们采用蔬菜大棚人工有机种植蔬菜水果等有机食品',
      },
      {
        imgUrl: '../assets/images/ping.png',
        name: '葡萄',
        categorys: '水果类',
        time: '2021/07/17',
        price: '1份/2.5斤',
        number: "2",
        introduction: '我们采用蔬菜大棚人工有机种植蔬菜水果等有机食品',
      }
      ],
      txtVal: 0,
      desc: ""

    };
  },
  methods: {

    //下架提示
    offShelf() {
      this.$confirm('是否下架当前选中的所有商品?', '提示', {
        confirmButtonText: '下架',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$msg({
          type: 'success',
          message: '下架成功!'
        });
      }).catch(() => {
        this.$msg({
          type: 'info',
          message: '已取消下架'
        });
      });
    },
    //上架提示
    upperShelf() {
      this.$confirm('是否上架当前选中的所有商品?', '提示', {
        confirmButtonText: '上架',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$msg({
          type: 'success',
          message: '上架成功!'
        });
      }).catch(() => {
        this.$msg({
          type: 'info',
          message: '已取消上架'
        });
      });
    },
    //控制输入字数
    descInput() {
      this.txtVal = this.desc.length;
    },
    //(确定)发布 
    dialogVisibleList() {
      this.applyRefundList = false;
    },
    //(确定)修改 
    dialogVisibleLists() {
      this.modifyRelease = false;
    },
    //上传图
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    //处理upload的action
    getBaseUrl() {
      let baseUrl =
        this.$options.filters["getServerUrl"]("uploadImage") +
        "/ossUpload/uploadfile";
      return baseUrl;
    }
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  background-color: #eaeef7;
}

/* 商品发布 */
.system {
  display: flex;
  color: #474d76;
  font-weight: 500;
  margin: 0 10px;
}

.el-icon-minus {
  color: #474d76;
  margin-top: 0.2%;
}

.el-icon-arrow-right {
  color: #474d76;
  margin-top: 0.2%;
}

/* 查询部分 */
.query {
  margin: 15px 10px;
  height: 10%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}

.search {
  display: flex;
  width: 45%;
  margin-left: 4%;
}

.frame {
  width: 40%;
  height: 40px;
  margin: auto 0;
}

.inp {
  width: 190px;
  margin-right: 10px;
}

.reset {
  color: #6484DD;
}

.category {
  display: flex;
  margin: auto 5%;
  color: #999;
}

.category-s {
  margin-top: 10px;
}

.choice {
  width: 40%;
}

.shelf {
  width: 25%;
  display: flex;
  margin: auto 0;
}

.onekey {
  margin-right: 10%;
}

/* 列表头 */
.list {
  height: 6.5%;
  background-color: #F6F7FC;
  display: flex;
  padding: 0 20px;
  color: #999;
  margin: 0 10px;
  border: 1px solid #AEB4DB;
  width: 96.2%;
}

.select {
  width: 6%;
  text-align: center;
  margin: auto 0;
}

.select-a {
  color: #4360CA;
}

.imag {
  width: 12%;
  text-align: center;
  margin: auto 0;
}

.names {
  width: 12%;
  text-align: center;
  margin: auto 0;
}

.time {
  width: 15%;
  text-align: center;
  margin: auto 0;
}

.price {
  width: 15%;
  text-align: center;
  margin: auto 0;
}

.introduction {
  width: 12%;
  line-height: 25px !important;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: center;
  margin: auto 0;
}

.categorysr {
  width: 10%;
  text-align: center !important;
  margin: auto 0;
}

.operation {
  width: 18%;
  text-align: center;
  margin: auto 0;

}

/* 列表内容 */
.contents {
  background-color: #fff;
  margin: 0 10px;
  color: #333;
  width: 98.7%;
}

.content-a {
  display: flex;
  padding: 0 20px;
  color: #666;
  height: 113px;
  border-bottom: 1px solid #EAEEF7;
}

.imag img {
  width: 75px;
  height: 75px;
}

.modify {
  display: flex;
  color: #4360CB;
}

.modify-s {
  margin-right: 30px !important;
  margin-left: 28%;
  cursor: pointer;
}

.line {
  margin-right: 30px;
}

/* 发布商品弹框 */
.dialo {
  width: 85%;
  margin-left: 15%;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #090808;
}

.uploads {
  display: flex;
  justify-content: flex-start;
  margin-left: 3%;
  margin-top: 3%;
}

.uploads .el-icon-plus:before {
  font-size: 65px;
}

.lianx {
  width: 250px;
  display: flex;
  margin-bottom: 10px;
}

.lianxs {
  width: 290px;
  display: flex;
  margin-bottom: 10px;
}

.tuik {
  width: 300px;
  text-align: right;
  line-height: 35px;
}

.tuiks {
  width: 300px;
  margin-top: 2px;
}

.consyt {
  margin-left: 5%;
}

.jine {
  width: 200px;
  display: flex;
  margin-bottom: 10px;
  margin-left: 10px;
}

.jin {
  width: 35%;
  line-height: 35px;
}

.all {
  display: flex;
}

.contenteditable {
  width: 95%;
  height: 130px;
  margin-top: 10px;
  resize: none;
  outline-color: #84b9ee;
  border: 1px solid #e0e0e0;
}

.tu {
  font-weight: 500;
}

.el-icon-plus {
  /* text-align: center; */
  padding-top: 35%;
}

.uploads .el-upload--picture-card {
  width: 200px !important;
  height: 200px !important;
}

.brief {
  display: flex;
}

.consyt .el-input__inner {
  width: 138px !important;
}

.brief-s {
  width: 170px;
  text-align: right;
  margin-top: 6px;
}

.number {
  width: 90px;
  height: 20px;
  position: relative;
  top: 120px;
  right: 65px;
}

.el-dialog__header {
  background: #F6F7FC;
  border: 1px solid #AEB4DB;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #090808;
  height: 20px !important;
}

.cancel {
  order: 1px solid #4360CB !important;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #425FCA;
}

.releases {
  background: linear-gradient(90deg, #425FCA 0%, #6484DD 100%);
}</style>