import { defineStore } from 'pinia'
import { getApiList } from "../server";
import type {RootObject, Children, ChinaAdd, ChinaTotal,  LocalCityNCOVDataList} from './type'

export const useStore = defineStore({
  id:'counter',
  state: () => ({
    list:<RootObject>{},
    item:<Children[]>{},//省的子数据
    chinaAdd:<ChinaAdd>{},
    chinaTotal:<ChinaTotal>{},
    cityDetail:<LocalCityNCOVDataList[]>{}
  }),
  actions:{
    async getList() {
      const result = await getApiList() 
      this.list = result
      this.chinaAdd = this.list.diseaseh5Shelf.chinaAdd
      this.chinaAdd = this.list.diseaseh5Shelf.chinaTotal
      this.cityDetail = this.list.localCityNCOVDataList.slice(0,10)
    }
  }
})
