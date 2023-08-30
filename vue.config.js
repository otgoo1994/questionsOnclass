const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   https: true
  // }
})

// module.exports = {
//   devServer: {
//     proxy: {
//       '^/server': {
//         target: 'http://192.168.0.71:5100/api'
//       }
//     }
//   }
// }
