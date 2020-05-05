const api = {
  // 获取附近的门店
  getStoreList: {
    url: "client/ecshop/storelist",
  },
  /*
   *  用户相关
   */

  // 微信auth登录，获取用户信息
  auth: {
    url: "client/ecshop/getuserinfo",
  },
  // 登录
  login: {
    url: "client/ecshop/login",
  },
  // 发送短信验证码
  sendCode: {
    url: "client/ecshop/sendcode",
  },
  // 检查用户登录状态
  checkUser: {
    url: "client/ecshop/check",
  },
  // 更新用户信息
  updateUser: {
    url: "client/ecshop/setuserinfo",
  },
  // 微信绑定手机号
  bindWxPhone: {
    url: "client/ecshop/loginbinding",
  },
  // 设置\更换绑定手机号
  setPhone: {
    url: "client/ecshop/setphone",
  },
  // 退出登录
  loginOut: {
    url: "client/ecshop/logout",
  },

  /*
   *  页面数据相关
   */
  // 获取自定义首页
  getIndexPage: {
    url: "client/ecshop/index",
  },
  // 获取自定义页面信息
  getDiyPage: {
    url: "client/ecshop/getpageinfo",
  },
  // 商品列表
  getProducList: {
    url: "client/ecshop/list",
  },
  // 商品详情
  getProductDetail: {
    url: "client/ecshop/detail",
  },
  // 规格商品库存
  getProductStock: {
    url: "client/ecshop/getstock",
  },
  // 类目信息
  getClassfiy: {
    url: "client/ecshop/classfiy",
  },
  // 商品分组信息
  getGroup: {
    url: "client/ecshop/group",
  },

  /*
   * 购买相关
   */

  // 运费
  getFee: {
    url: "client/ecshop/getfee",
  },
  // 获取满减规则
  getPromotion: {
    url: "client/ecshop/getsroductstatus",
  },

  getStock: {
    url: "client/ecshop/getstock",
  },
  // 购物车

  // 创建订单
  // data参数，类型：json字符串，json字符串内容为下列字段
  // {
  // receiver_type 配送方式，1,2；
  // memo 买家留言，
  // area_code 国标地址码
  // goods_list：[ 数组
  //  {
  //   num:数量，
  //   sku_id:sku编号，
  //   rule_id:满减规则，
  //   pic:图片
  //   }
  //  ]
  // }
  goPay: {
    url: "client/ecshop/gopay",
  },
  // 重新支付:获取小程序字符参数
  payAgain: {
    url: "client/ecshop/payagain",
  },
  // 订单列表
  getOrderList: {
    url: "client/ecshop/orderlist",
  },
  // 订单详情
  getOrderDetail: {
    url: "client/ecshop/getorder",
  },
  getCityDetail: {
    url: "client/ecshop/cityname",
  },
  // 子订单详情
  getSubOrderDetail: {
    url: "client/ecshop/getsuborder",
  },
  // 取消订单
  cancelOrder: {
    url: "client/ecshop/cancel",
  },
  confirmReceivedOrder: {
    url: "client/ecshop/affirm",
  },
  // 订单退款
  refundOrder: {
    url: "client/ecshop/refundorder",
  },
  // 退款详情
  refundInfo: {
    url: "client/ecshop/refundinfo",
  },
  setRefundExpress: {
    url: "client/ecshop/setrefundinfo",
  },
  // 商家预设退货信息
  systemAddress: {
    url: "client/ecshop/systemadress",
  },
  // 取消退款
  cancelRefund: {
    url: "client/ecshop/cancelrefund",
  },

  // 获取自提商品提取码
  getProductPickCode: {
    url: "client/ecshop/getpickcode",
  },

  // 获取订单物流信息
  getLogistics: {
    url: "client/ecshop/logistics",
  },
  // 评价相关

  // 未评价子订单
  getUnCommentList: {
    url: "client/ecshop/getuncommentlist",
  },
  // 当前商品评价列表
  productCommentList: {
    url: "client/ecshop/commentlist",
  },
  // 发表评价
  addComment: {
    url: "client/ecshop/addcomment",
  },

  // 优惠券
  // 领取优惠券
  receiveCoupon: {
    url: "client/ecshop/receivecoupon",
  },
  // 获取优惠券列表
  getCouponList: {
    url: "client/ecshop/getusercouponlist",
  },
  // 获取单个优惠券信息
  getCouponDetial: {
    url: "client/ecshop/getactlist",
  },

  // 上传图片
  upPic: {
    url: "client/ecshop/uppic",
    dataType: "file",
  },

  // 拼团列表
  groupBuyList: {
    url: "client/ecshop/purchase",
  },
  // 拼团单个
  groupBuySingle: {
    url: "client/ecshop/purchase/detail",
  },
  // 拼团下单
  groupBuyCreateOrder: {
    url: "client/ecshop/purchase/done",
  },
  // 拼团订单详情
  groupBuyOrderDetail: {
    url: "client/ecshop/purchase/order",
  },
  // 获取导购发送商品列表
  getEmpProducList: {
    url: "client/ecshop/employee/list",
  },

  /*
  直播相关接口 
  */

  // 获取直播间信息
  getLive: {
    url: "client/ecshop/getliveandgoods",
  },
  // 获取直播间海报信息
  getLiveShare: {
    url: "client/ecshop/liveshare",
  },
  // 直播间发送弹幕
  liveSendMessage: {
    url: "client/ecshop/livechatmsg",
  },
  // 直播专享商品列表
  liveProductDetail: {
    url: "client/ecshop/detaillive",
  },
  // 直播下单接口
  liveGoPay: {
    url: "client/ecshop/gopaylive",
  },
};
export default api;
