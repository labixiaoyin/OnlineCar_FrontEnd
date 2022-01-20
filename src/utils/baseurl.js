let baseUrlPrefix = {
  passenger: "",
  driver: "",
  platform: "",
};
const env = process.env.BUILD_ENV === "dev" ? "development" : "test";
console.log("process.env.BUILD_ENV", process.env.BUILD_ENV);
switch (env) {
  case "development":
    baseUrlPrefix = {
      passenger: "http://10.20.22.252:8686/",
      driver: "http://10.20.22.135:8686/",
      platform: "http://10.20.22.39:8686/",
    };
    break;
  case "test":
    baseUrlPrefix = {
      passenger: "http://1.117.227.141:8686/",
      driver: "http://1.117.227.141:8686/",
      platform: "http://1.117.227.141:8686/",
    };
    break;
}

export const baseUrl = baseUrlPrefix;
