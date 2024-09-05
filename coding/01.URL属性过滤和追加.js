/**
 * @param url 要处理的URL
 * @param keepParams 要保留的参数列表
 * @param extraParams 要追加的额外参数
 * */
function filterAndAppend(url, keepParams = [], extraParams = {}) {
  // 解析URL
  const urlObj = new URL(url);
  const searchParams = new URLSearchParams(urlObj.search);

  // 过滤参数
  let filteredParams = {};
  for (let [key, value] of searchParams) {
    if (keepParams.includes(key)) {
      filteredParams[key] = value;
    }
  }

  // 清空原有的参数
  urlObj.search = '';

  // 将保留的参数重新设置到URL对象上
  for (let key in filteredParams) {
    urlObj.searchParams.append(key, filteredParams[key]);
  }

  // 追加额外参数
  for (let key in extraParams) {
    urlObj.searchParams.append(key, extraParams[key]);
  }

  // 返回最终的URL
  return urlObj.href;
}

// 示例用法:
const url = 'http://example.com/?a=1&b=2&c=3';
const keepParams = ['a', 'c'];
const extraParams = {d: 4};

console.log(filterAndAppend(url, keepParams, extraParams));
