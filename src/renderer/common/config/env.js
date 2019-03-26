export default () => {
  let env = {
    dev: {
      baseUrl: '//localhost:3000'
    },
    stage: {
      baseUrl: '//api.uat.domain.com'
    },
    other: {
      baseUrl: '//api.uat.domain.com'
    }
  }
  /* eslint-disable*/
    let BASE_URL_ENV = process.env.BASE_URL_ENV
        // 但这个全局变量并不挂在window下，所以即便加了window.BASE_URL_ENV eslint也会报错
        // 使用 eslint-disable 排除
    return env[BASE_URL_ENV]
}