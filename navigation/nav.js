import HomeScreen from "../screen/index/index";
import ClassScreen from "../screen/class/index";
import MemberScreen from "../screen/member/index";
import BuycartScreen from "../screen/buycart/index";

import SettingScreen from "../screen/member/setting";
import KefuScreen from "../screen/member/kefu";
import OrderScreen from "../screen/member/order";
import AddressScreen from "../screen/member/address";
import CouponScreen from "../screen/member/coupon";
import UserInfoScreen from "../screen/member/userinfo";
import CameraScreen from "../screen/camera";

import ProductListScreen from "../screen/product/list";
const routeConfig = {
  BottomTabNav: {
    name: "BottomTabNav",
    headerTitle: "",
    type: "tab",
    child: {
      Home: {
        name: "Home",
        icon: "home",
        headerTitle: "首页",
        component: HomeScreen,
      },
      Class: {
        name: "Class",
        icon: "appstore-o",
        headerTitle: "分类",
        component: ClassScreen,
      },
      Buycart: {
        name: "Buycart",
        icon: "shoppingcart",
        headerTitle: "购物车",
        component: BuycartScreen,
      },
      Member: {
        name: "Member",
        icon: "user",
        headerTitle: "会员中心",
        component: MemberScreen,
      },
    },
  },
  Setting: {
    name: "Setting",
    headerTitle: "设置",
    component: SettingScreen,
  },
  ProductList: {
    name: "ProductList",
    headerTitle: "商品列表",
    component: ProductListScreen,
  },
  Kefu: {
    name: "Kefu",
    headerTitle: "客服",
    component: KefuScreen,
  },
  UserInfo: {
    name: "UserInfo",
    headerTitle: "个人信息",
    component: UserInfoScreen,
  },
  Order: {
    name: "Order",
    headerTitle: "我的订单",
    component: OrderScreen,
  },
  Address: {
    name: "Address",
    headerTitle: "我的地址库",
    component: AddressScreen,
  },
  Coupon: {
    name: "Coupon",
    headerTitle: "我的优惠券",
    component: CouponScreen,
  },
  Camera: {
    name: "Camera",
    headerTitle: "拍摄",
    component: CameraScreen,
  },
};
export default routeConfig;
