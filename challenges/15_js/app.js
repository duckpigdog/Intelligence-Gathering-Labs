/*
 * TODO: 删除上线前的开发注释
 * 接口: ./api/secret.php
 * 方法: GET 或 POST
 * 认证: 请求头 X-API-KEY: js-dev-2025
 * 备用: 查询参数 ?key=js-dev-2025
 * 示例:
 *   fetch('./api/secret.php?key=js-dev-2025')
 *     .then(r => r.json())
 *     .then(console.log)
 *
 *   // 或使用请求头:
 *   fetch('./api/secret.php', { headers: { 'X-API-KEY': 'js-dev-2025' }})
 *     .then(r => r.json())
 *     .then(console.log)
 */

window.addEventListener('DOMContentLoaded', ()=>{
    console.log('JS 接口泄露关卡加载完成');
});

