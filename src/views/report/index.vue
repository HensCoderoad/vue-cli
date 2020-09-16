<style scoped lang="less">
@import "./index.less";
</style>
<template>
  <div class="main">
    <div class="report_content" id="report_content">
      <form
        action
        method="post"
        id="report-form"
        class
        target="_self"
        enctype="multipart/form-data"
      >
        <div class="wrap">
          <div style="background-color: white;">
            <div class="form-item">
              <label>
                购买渠道：
                <input name="purchase" class="content" v-model="purchase" />
              </label>
            </div>
            <!-- <div class="form-item">
            <label>省市区：<input name="addr"  id="content" class="content" value="" >
            </input></label> </div> -->
            <div class="form-item">
              <label class="lit" @click="showPicker = true">
                省市区:
                <input
                  name="locaiton"
                  id="location"
                  class="content"
                  :value="value"
                  readonly="readonly"
                />
              </label>
              <a
                href="#"
                style="float:right;text-decoration:none"
                @click="showPicker = true"
                role="button"
                id="sel_city"
              >
                <i class="right" style="transform:rotate(90deg)"></i>
              </a>
              <van-popup v-model="showPicker" round position="bottom">
                <van-picker
                  show-toolbar
                  :columns="columns"
                  @cancel="showPicker = false"
                  @confirm="onConfirm"
                />
              </van-popup>
            </div>
            <div class="form-item">
              <label>
                货物购买地址：
                <input name="purchaseAddr" class="content" v-model="purchaseAddr" />
              </label>
            </div>
          </div>
          <div class="img_upload">
            <p class="form-item" style="margin-top: 0;">假货图片上传：</p>
            <!--ios和Android显示不同的input-->
            <van-uploader v-if="isIOS" v-model="fileList" multiple
                          :after-read="afterRead"
                          :max-count="5"
                          :max-size="20 * 1024 * 1024"
                          @oversize="onOversize">
              <img src="@/assets/images/report/upload.png">
            </van-uploader>
            <van-uploader v-if="!isIOS" v-model="fileList" multiple
                          accept="image/*"
                          mutiple="mutiple"
                          capture="camera"
                          :after-read="afterRead"
                          :max-count="5"
                          :max-size="20 * 1024 * 1024"
                          @oversize="onOversize">
              <img src="@/assets/images/report/upload.png">
            </van-uploader>
          </div>
          <div style="background-color: white;margin-top:12px">
            <div class="form-item">
              <label>
                联系人姓名：
                <input name="contactName" class="content" v-model="contactName" placeholder />
              </label>
            </div>
            <div class="form-item" style="border-bottom: none;">
              <label>
                联系人地址：
                <input
                  name="contactAddr"
                  id="content"
                  class="content"
                  v-model="contactAddr"
                  placeholder
                />
              </label>
            </div>
          </div>
        </div>

        <div class="submit" id="normal" @click="handleSubmit">提交</div>
        <!--<div style="display:flex;align-items: center;">-->
        <!--<div style="width:50%">-->
        <!--<div class="submit" name="submit" id="submit" onclick="check()"
         style="float:right;margin-right:12px"/>-->
        <!--提交-->
        <!--</div>-->
        <!--</div>-->
        <!--<div style="width:50%">-->
        <!--<div class="submit" name="back" id="back" onclick="back()"
         style="float:left;margin-left:12px"/>-->
        <!--返回-->
        <!--</div>-->
      </form>
    </div>
  </div>
</template>

<script>
import city from '@/libs/city';

export default {
  name: 'report',
  created() {
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onOversize(file) {
      console.log('图片过大！');
      console.log(file);
    },
    afterRead(file) {
      const that = this;
      // console.log(Array.isArray(file))
      if (!Array.isArray(file)) {
        file.status = 'uploading';
        file.message = '上传中...';
        const formData = new FormData();
        formData.append('file', file.file);
        const key = `report/${new Date().getTime()}${Math.ceil(Math.random() * 10000)}${file.file.name}`;
        formData.append('key', key);
        this.$axios.request({
          url: '/api/console/oss/upload',
          method: 'POST',
          headers: { 'Content-Type': 'multipart/form-data' }, // application/x-www-form-urlencoded
          data: formData,
        }).then((res) => {
          // console.log(res)
          if (res.data.status === 'success') {
            file.status = '';
            file.message = '';
          } else {
            file.status = 'failed';
            file.message = '上传失败';
          }
          if (that.imgs) {
            that.imgs += `,${key}`;
          } else {
            that.imgs = key;
          }
        });
      } else {
        for (const value of file) {
          value.status = 'uploading';
          value.message = '上传中...';

          // ```--------------------
          const formData = new FormData();
          formData.append('file', value.file);
          const key = `report/${new Date().getTime()}${Math.ceil(Math.random() * 10000)}${value.file.name}`;
          formData.append('key', key);
          this.$axios.request({
            url: '/api/console/oss/upload',
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' }, // application/x-www-form-urlencoded
            data: formData,
          }).then((res) => {
            // console.log(res)
            if (res.data.status == 'success') {
              value.status = '';
              value.message = '';
            } else {
              value.status = 'failed';
              value.message = '上传失败';
            }
            if (that.imgs) {
              that.imgs += `,${key}`;
            } else {
              that.imgs = key;
            }
          });
        }
      }
    },
    handleSubmit() {
      const that = this;
      [that.province, that.city, that.area] = that.value;
      if (that.province && that.purchase
        && that.purchaseAddr && that.contactName && that.contactAddr && that.imgs) {
        const fd = new FormData();
        fd.append('purchase', that.purchase);
        fd.append('purchaseAddr', that.purchaseAddr);
        fd.append('contactName', that.contactName);
        fd.append('contactAddr', that.contactAddr);
        fd.append('imgs', that.imgs);
        fd.append('province', that.province);
        fd.append('city', that.city);
        fd.append('area', that.area);
        this.$axios.post(`/api/weChatOff/report/${that.$prefix}/${that.$store.state.queryCode}`, fd).then((res) => {
          console.log(res);
          if (res.data.code === '200') {
            that.$router.push('/finishReport');
          }
        });
      } else {
        this.$toast('请完善举报信息！');
      }
    },
    isIOS() { // 判断当前手机操作系统，对不同操作系统做适配
      const u = navigator.userAgent;
      if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
        return false;
      } if (u.indexOf('iPhone') > -1) { // 苹果手机
        return true;
      } if (u.indexOf('Windows Phone') > -1) { // winphone手机
        return false;
      }
      return false;
    },
  },
  data() {
    return {
      value: '',
      showPicker: false,
      columns: city,
      fileList: [
        // { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
        // { url: 'https://cloud-image', isImage: true },
      ],
      purchase: '', // 购物渠道
      purchaseAddr: '', // 购物地址
      contactName: '', // 联系人
      contactAddr: '', // 联系人地址
      imgs: '', // 图片
      province: '', // 省
      city: '', // 市
      area: '', // 区

    };
  },
  mounted() {
  },
};
</script>
