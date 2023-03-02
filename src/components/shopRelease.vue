<template>
  <div class="container">
    <!-- 商品发布 -->
    <div class="system">
      <div class="tab">普朗克农场管理系统</div>
      <i class="el-icon-minus"></i>
      <i class="el-icon-arrow-right"></i>
      <div  class="tab">商品发布</div>  
    </div>
    <!-- 查询部分 -->
    <div class="query">
      <div class="search">
        <div class="frame">
          <el-input v-model="input" placeholder="请输入关键字" class="inp"></el-input>
          <el-button type="primary" size="medium" style="background: linear-gradient(90deg, #425FCA 0%, #6484DD 100%);">查询</el-button>
          <!-- <el-button size="medium" class="reset">重置</el-button> -->
        </div>
        <div class="category">
          <div class="category-s">类别：</div>
          <el-select v-model="value" placeholder="全部" class="choice">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
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
          <el-button type="primary" size="medium"  @click="applyRefundList=true" style="background: linear-gradient(90deg, #425FCA 0%, #6484DD 100%);">新品发布</el-button>
          <el-dialog title="发布商品" :visible.sync="applyRefundList" :close-on-click-modal="true" :modal="true" :show-close="true" :center="true" class="dialo">
            <div class="all">
              <div class="uploads">
                <div class="tu">图片:&nbsp;&nbsp;</div>
                <el-upload
                  :action=getBaseUrl()
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
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
                  <div class="jine"><div class="tuik">类别：</div>
                   <el-select v-model="value" placeholder="请选择类别">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div> 
                </div>
                <div class="lianxs">
                  <div class="tuik tuiks">价格：1份/</div>  &nbsp;
                  <el-input v-model="inputNum" placeholder="请输入价格"></el-input>&nbsp;
                  <div class="jin">公斤</div>
                </div> 
                <div class="brief" >
                  <div class="brief-s">简介：</div>        
                  <textarea  placeholder="请输入内容" class="contenteditable"  maxlength="100" @input="descInput" v-model="desc"></textarea>
                  <div class="number">{{txtVal}}/100</div>
                </div>  
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="applyRefundList = false" class="cancel">取 消</el-button>
              <el-button type="primary" class="releases"><div @click="dialogVisibleList(index)">发 布</div> </el-button>
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
      <div class="content-a" v-for="(item,index) in fruits" :key="index">
        <div class="select">
          <img src="../assets/images/carSh1.png">
          <!-- <img src="../assets/images/carSh1.png"> -->
        </div>
        <div class="imag"><img src="../assets/images/ping.png"></div>
        <div class="names">{{item.name}}</div>
        <div class="categorysr">{{item.categorys}}</div>
        <div class="time">{{item.time}}</div>
        <div class="price">{{item.price}}</div>
        <div class="introduction">{{item.introduction}}</div>
        <div class="operation modify">
          <div class="modify-s"  @click="modifyRelease=true">修改</div>
          <el-dialog title="发布商品" :visible.sync="modifyRelease" :close-on-click-modal="true" :modal="true" :show-close="true" :center="true" class="dialo">
            <div class="all">
              <div class="uploads">
                <div class="tu">图片:&nbsp;&nbsp;</div>
                <el-upload
                  :action=getBaseUrl()
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" src="../assets/images/ping.png">
                </el-dialog>
              </div>
              <div class="consyt" v-if="(item , index) in fruits" :key="index">
                <div style="display:flex;"> 
                  <div class="lianx">
                    <div class="tuik">名称：</div> 
                    <el-input v-model="item.name" placeholder="请输入名称"></el-input>
                  </div> 
                  <div class="jine"><div class="tuik">类别：</div>
                   <el-select v-model="item.categorys" placeholder="请选择类别">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </div> 
                </div>
                <div class="lianxs">
                  <div class="tuik tuiks">价格：1份/</div>  &nbsp;
                  <el-input v-model="item.number" placeholder="请输入价格"></el-input>&nbsp;
                  <div class="jin">公斤</div>
                </div> 
                <div class="brief" >
                  <div class="brief-s">简介：</div>        
                  <textarea  placeholder="请输入内容" class="contenteditable"  maxlength="100" @input="descInput" v-model="item.introduction"></textarea>
                  <div class="number">{{txtVal}}/100</div>
                </div>  
              </div>
            </div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="modifyRelease = false" class="cancel">取 消</el-button>
              <el-button type="primary" class="releases"><div @click="dialogVisibleLists(index)">发 布</div> </el-button>
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
      consultContext:"",
      dialogVisible:false,
      dialogImageUrl: '',
      inputNum: "",
      fruits:[{
          imgUrl:'../assets/images/ping.png',
          name:'苹果',
          categorys:'水果类',
          time:'2021/07/31',
          price:'1份/2.5斤',
          number:"2",
          introduction:'我们采用蔬菜大棚人工有机种植蔬菜水果等有机食品',  
        },{
          imgUrl:'/src/assets/images/cheng.png',
          name:'橙子',
          categorys:'水果类',
          time:'2021/06/31',
          price:'1份/2.5斤',
          number:"2",
          introduction:'我们采用蔬菜大棚人工有机种植蔬菜水果等有机食品',  
        },
        {
          imgUrl:'../assets/images/ping.png',
          name:'葡萄',
          categorys:'水果类',
          time:'2021/07/17',
          price:'1份/2.5斤',
          number:"2",
          introduction:'我们采用蔬菜大棚人工有机种植蔬菜水果等有机食品',  
        }
      ],
      txtVal: 0,
      desc:""

    };
  },
  methods: {
  
    //下架提示
    offShelf(){
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
    upperShelf(){
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
    descInput(){  
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

<style lang="less" scoped>
  @import url("../assets/css/shopRelease.css");
</style>