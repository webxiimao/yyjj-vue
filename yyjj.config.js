/*
 * @Author: maoyuyu
 * @Date: 2020-06-21 20:05:34
 * @LastEditors: maoyuyu
 * @LastEditTime: 2020-06-21 21:04:37
 * @Description: yyjj 脚手架的配置文件
 */ 
module.exports = {
  base_config: {
    port: 9055
  },
  env_config: {
    base_url: '/api'
  },
  dev_env: {
    VUE_APP_API_BASE_URL: '/api'
  },
  prod_env: {
    VUE_APP_API_BASE_URL: '/api'
  }
}