/**
 * 请求的方法
 */
import axios from 'axios'
import base from './base'
const api ={
    /**
     * 商品列表
     */
    getGoodsList(params){//{page: xx, pageSize}
        return axios.get(base.goodsList,{
            params
        })
    },
    /**
     * 商品搜索
     */
    getSearch(params){//{search: xx}
        return axios.get(base.search, {params})
    },
}

export default api