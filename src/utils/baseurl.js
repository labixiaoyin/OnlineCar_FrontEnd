let baseUrlPrefix = ''
const env = process.env.BUILD_ENV === 'dev' ? 'development' : 'test'
console.log("process.env.BUILD_ENV", process.env.BUILD_ENV);
switch (env) {
  case 'development':
    baseUrlPrefix = "http://10.20.22.252:8686/"
    break
  case 'test':
    baseUrlPrefix = "http://1.117.227.141:8686/"
    break
}

export const baseUrl = baseUrlPrefix
