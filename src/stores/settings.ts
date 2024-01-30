import { defineStore } from "pinia";
import {PRIMARY_COLOR} from '../config/index'

export const useSettingStore = defineStore({
  id:'settingState',
  state: () => ({
    themeConfig: {
      isDark: false,//深色模式
      primary: PRIMARY_COLOR, //主题颜色
      showingSize:'default', //显示大小 default，
      
    }
  }),
  getters: {},
  actions: {
    //设置主题
    setThemeConfig({ key, val }) {
      this.themeConfig[key] = val;
    }
  }
})