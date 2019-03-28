// 配置文件
module.exports ={
  // 基础定时发送功能配置项（必填项）
  NAME:'王小仙',//备注姓名
  NICKNAME:'Jodie', //昵称
  MEMORIAL_DAY:'2017/10/17', //你和收信者的纪念日
  CITY:'jiangsu',//收信者所在城市
  LOCATION:'suzhou',//收信者所在区 （可以访问墨迹天气网站后，查询区的英文拼写）
  SENDDATE:'0 0 8 * * *',//定时发送时间 每天8点0分0秒发送，规则见 /schedule/index.js
  ONE:'http://wufazhuce.com/',////ONE的web版网站
  MOJI_HOST:'https://tianqi.moji.com/weather/china/', //中国墨迹天气url


  //高级功能配置项（非必填项）
  AUTOADDFRIEND:false,//自动加好友功能  默认关闭
  AUTOADDROOM:false,//自动拉群功能 默认关闭
  AUTOREPLY:true,//自动聊天功能 默认关闭
  AIBOTAPI:'http://openapi.tuling123.com/openapi/api/v2',//图灵机器人API 注册地址http://www.turingapi.com/
  APIKEY:'42b114ccd96f4d5ebf7ccb29d886a30a',//图灵机器人apikey
  ROOMNAME:'/^你的群名/i', //群名(请只修改中文，不要删除符号，这是正则)
  ADDFRIENDWORD:'/你要触发的关键词/i',//自动加好友触发的关键词(请只修改中文，不要删除符号，这是正则)
  ADDROOMWORD:'/加群/',//自动发送群图片触发关键词(请只修改中文，不要删除符号，这是正则)
  ROOMCODEURL:'http://image.bloggeng.com/qun.png',//群二维码url链接(与本地群二维码路径选填一个)
  ROOMLOCALPATH:'./static/qun.png',//本地群二维码图片路径（与群url选填一个）
}
