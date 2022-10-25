let express = require('express');    //引入express模块
let Mock = require('mockjs');        //引入mock模块
const fs = require('fs');          //文件管理系统
const path = require('path');
const bodyParser = require('body-parser');    // 引入body-parser模块




const getData = (filename, res, req) => {

    // 単語のテキストのパースを設定
const dirname = __dirname.substring(0, __dirname.lastIndexOf('\\'));

    function fn(filename) {
        return new Promise(function (resolve, reject) {
            //readFile(path,[encoding],callback)  异步读取文件全部内容
            let content = fs.readFile(path.join(dirname, filename), 'utf8', (err, data) => {
                err ? reject(err) : resolve(data);
            })
        })
    }

    const wordReadApi = async (fileName) => {

        let FileArrayresult = await fn(fileName).then((result) => {
            var newRowArr = result.split(/\r/);
            var Allarray = Array.of(newRowArr.length);
            newRowArr.forEach((element, index) => {
                let newElement = element.replace(/\n/, '').split(/\s/)
                // push /unshift /contact
                let jsonElement = {
                    "id": index + 1,
                    "word": newElement[0],
                    "loumaji": newElement[1],
                    "translate": newElement[2],
                    "putTime":  newElement[3]
                }
                Allarray.push(jsonElement);

            });
            //删除最后一个元素
            // Allarray.pop();
            //删除第一个元素
            Allarray.shift()
            return Allarray
        }).then(data => data)

        return FileArrayresult

    }
    wordReadApi(filename).then(data => {

        if (req.query.word !== undefined || req.query.fromTime !== undefined || req.query.toTime !== undefined) {
            let retData =[]
            if (req.query.word!==''){
                 retData = data.filter((element) => element.loumaji.includes(req.query.word) === true)
            }
           
            res.json({ "data": retData })
            return
        }
        res.json({ "data": data })
    })

}

//============================================================================================================================

let app = express();                //实例化express

//************************************************************* */
// 拦截所有请求 urlencoded()里的参数是必填的
// extended:false表示方法内部使用querystring模块处理请求参数的格式
// extended:true表示方法内部使用第三方模块qs处理请求参数的格式
// 默认使用extended:false即可满足我们的需求
//**************************************************************** */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


/*为app添加中间件处理跨域请求*/
const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCrossDomain);

// create mock data
let data = Mock.mock({
    "data|6": [ //生成6条数据 数组
        {
            "shopId|+1": 1,//生成商品id，自增1
            "shopMsg": "@ctitle(10)", //生成商品信息，长度为10个汉字
            "shopName": "@cname",//生成商品名 ， 都是中国人的名字
            "shopTel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
            "shopAddress": "@county(true)", //随机生成地址
            "shopStar|1-5": "★", //随机生成1-5个星星
            "salesVolume|30-1000": 30, //随机生成商品价格 在30-1000之间
            "shopLogo": "@Image('100x40','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
            "food|2": [ //每个商品中再随机生成2个food
                {
                    "foodName": "@cname", //food的名字
                    "foodPic": "@Image('100x40','#c33', '#ffffff','小可爱')",//生成随机图片，大小/背景色/字体颜色/文字信息
                    "foodPrice|1-100": 20,//生成1-100的随机数
                    "aname|2": [
                        {
                            "aname": "@cname",
                            "aprice|30-60": 20
                        }
                    ]
                }
            ]
        }
    ]
})

// Mock.mock(/search\/text/, 'get', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
//     return data
// })

/**
 * @param  {[type]} req  [客户端发过来的请求所带数据]
 * @param  {[type]} res  [服务端的相应对象，可使用res.send返回数据，res.json返回json数据，res.down返回下载文件]
 */
app.get('/wordlist/search', function (req, res) {
    /**
     * mockjs中属性名‘|’符号后面的属性为随机属性，数组对象后面的随机属性为随机数组数量，正则表达式表示随机规则，+1代表自增
     */
    /* 设置定时器 为了设置isLoad Status */
    // setTimeout(function () { res.json(data); }, 5000);

    //get获取数据
    console.log('get', req.query);
    getData('word.txt',res, req)
    // res.json()

});

app.post('/wordlist/update', (req, res) => {
    console.log('reqBody', req.body);
    res.json({ data: req.body, status: "ok" });
})

/**
 * 监听8090端口
 */
app.listen('8090', () => {
    console.log('Api start')
});
