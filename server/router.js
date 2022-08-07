const express = require('express')
const router = express.Router()
//导入数据库 sqlFun(sql, arr, res=>{})
const sqlFn = require('./mysql')

//路由接口
router.get('/',(req,res)=>{
    res.send('hello')
    }
)

/**
 * 商品列表：获取分页 {total:'',arr:[{},{},{}],pagesize:8,}
 * 参数：page 页码
 */
router.get('/projectList', (req, res) => {
    const page = req.query.page || 1;
    const sqlLen = "select * from equipment_base_info where id";
    sqlFn(sqlLen, null, data => {
        let len = data.length;
        const sql = "select * from equipment_base_info order by id limit 10 offset " + (page - 1) * 8;
        sqlFn(sql, null, result => {
            if (result.length > 0) {
                res.send({
                    status: 200,
                    data: result,
                    pageSize: 8,
                    total: len
                })
            }else {
                res.send({
                    status: 500,
                    msg: "暂无数据"
                })
            }
        })
    })
})

/**
 * 查询接口 search
 * 参数：search
 */
router.get("/search", (req, res) => {
    var search = req.query.search;
    var page = req.query.page || 1;
    var pageSize = req.query.pageSize;
    const sql = "select * from equipment_base_info where concat(`number`, `name`, `specifications`, `serial_number`, `manufacturer`, `address`, `original_value`) like '%" + search + "%'"+" limit "+pageSize+" offset "+pageSize*(page-1);
    const sqlLen = "select count(*) from equipment_base_info where concat(`number`, `name`, `specifications`, `serial_number`, `manufacturer`, `address`, `original_value`) like '%" + search + "%'";
    sqlFn(sqlLen, null, (result)=>{
        if (result.length > 0) {
            console.log(result.valueOf("count(*)"))
            }else{
            console.log("无长度")
        }
    })
    sqlFn(sql, null, (result) => {
        if (result.length > 0) {
            console.log(length)
            res.send({
                status: 200,
                data: result,
                pageSize: pageSize,
                total: length,
            })
        } else {
            res.send({
                status: 500,
                msg: "暂无数据"
            })
        }
    })
})


module.exports = router
