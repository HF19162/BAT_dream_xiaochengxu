import config from './config'
import * as Mock from './mock'
let util = {
    isDEV:config.isDev,
    log(){
        this.isDEV && config.log(...arguments)
    },
    alert(title = '提示',content = config.defaultAlertMessage){
        if('object' === typeof content){
            content = this.isDEV && JSON.stringify(content) || config.defaultAlertMessage
        }
        wx.showModal({
            title:title,
            content:content
        })
    },
    setStorageData(key,value='',cb){
        wx.setStorageData({
            key:key,
            data:value,
            success(){
                cb && cb()
            }
        })
    },
    getStorageData(){
        wx.getsTORAGE();
        if(res && res.statusCode == 200 && res.data){
            resolve(res.data);
        }else{
            self.alert('提示',res)
        }
    }
}