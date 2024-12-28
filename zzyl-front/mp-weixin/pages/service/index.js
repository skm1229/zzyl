"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_api_service = require("../api/service.js");
require("../../utils/request.js");
require("../../utils/env.js");
if (!Array) {
  const _component_NavBar = common_vendor.resolveComponent("NavBar");
  const _component_net_fail = common_vendor.resolveComponent("net-fail");
  const _component_UniFooter = common_vendor.resolveComponent("UniFooter");
  (_component_NavBar + _component_net_fail + _component_UniFooter)();
}
if (!Math) {
  List();
}
const List = () => "./components/List.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const store = common_vendor.useStore();
    store.state.user;
    const operate = common_vendor.ref(null);
    const itemData = common_vendor.ref([]);
    const moreStatus = common_vendor.ref("more");
    const oldManId = common_vendor.ref();
    const netStatus = common_vendor.ref(true);
    const loading = common_vendor.ref(false);
    let params = common_vendor.reactive({
      pageNum: 1,
      pageSize: 10
    });
    let pageNum = common_vendor.ref(1);
    const pages = common_vendor.ref(0);
    const isSendRequest = common_vendor.ref(false);
    common_vendor.ref("");
    let capsuleBottom = common_vendor.ref();
    common_vendor.onLoad((option) => {
      common_vendor.index.getSystemInfo({
        success: (res) => {
          capsuleBottom.value = common_vendor.index.getMenuButtonBoundingClientRect().bottom + 55;
        }
      });
      if (option.name !== void 0) {
        params.name = option.name;
      }
    });
    common_vendor.onShow((e) => {
      getNewData();
    });
    const getNewData = async (type) => {
      params = {
        ...params,
        pageNum: pageNum.value
      };
      if (isSendRequest.value) {
        return;
      }
      moreStatus.value = "loading";
      loading.value = false;
      await pages_api_service.getServiceList(params).then((res) => {
        if (res.code == 200) {
          const {
            data
          } = res;
          const items = data.records == null ? [] : data.records;
          moreStatus.value = items.length < 10 ? "no-more" : "more";
          params.pageNum == 1 ? itemData.value = void 0 : null;
          itemData.value = itemData.value ? [...itemData.value, ...items] : items;
          pages.value = data.pages;
          if (data.pages === pageNum.value) {
            isSendRequest.value = true;
            moreStatus.value = "noMore";
          }
          common_vendor.index.stopPullDownRefresh();
          netStatus.value = true;
          loading.value = true;
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: err.msg,
          duration: 1e3,
          icon: "none"
        });
        netStatus.value = false;
      });
    };
    const handleToRefresh = () => {
      params.value.pageNum = 1;
      getNewData();
    };
    const onReachBottom = () => {
      if (pageNum.value >= pages.value) {
        moreStatus.value = "noMore";
        return false;
      } else {
        moreStatus.value = "loading";
        setTimeout(() => {
          pageNum.value++;
          getNewData();
        }, 1e3);
      }
    };
    const handleUnbind = (id) => {
      oldManId.value = id;
      operate.value.popup.open();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "服务下单",
          isShowBack: false,
          isShowSearch: true,
          params: common_vendor.unref(params)
        }),
        b: netStatus.value
      }, netStatus.value ? {
        c: common_vendor.o(_ctx.setTabIndex),
        d: common_vendor.o(handleUnbind),
        e: common_vendor.o(onReachBottom),
        f: common_vendor.p({
          itemData: itemData.value,
          moreStatus: moreStatus.value,
          loading: loading.value
        }),
        g: common_vendor.unref(capsuleBottom) + "px"
      } : {
        h: common_vendor.p({
          handleToRefresh
        })
      }, {
        i: common_vendor.p({
          pagePath: "pages/family/index"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f6ccea2d"], ["__file", "E:/project/康乐养老/project-zhyl-xcx-uniapp-java/pages/service/index.vue"]]);
wx.createPage(MiniProgramPage);
