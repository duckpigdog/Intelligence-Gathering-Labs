<?php
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $flag = $_POST['flag'] ?? '';
    if ($flag === 'flag{pan.baidu.com/s/1eQF6dai-gy15}') {
        $message = '<span style="color:#4ade80">ACCESS GRANTED!</span> <br> <a href="../../index.html">Return to Dashboard</a>';
    } else {
        $message = '<span style="color:#f87171">ACCESS DENIED</span>';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Level 30 - 第三方应用软件信息泄露</title>
    <link rel="stylesheet" href="../../css/challenge.css">
    <style>
        body { font-size: 18px; }
        .container { max-width: 900px; padding: 60px; }
        h1 { font-size: 2.2rem; }
        input[type="text"] { padding: 12px 16px; font-size: 16px; width: 48ch; }
        button { padding: 12px 20px; font-size: 16px; }
        #result { font-size: 18px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>LEVEL 30: 第三方应用软件信息泄露</h1>
        <p>目标：找到华南理工大学的博科BVC控制器软件及安装材料的下载链接及密码</p>
        <p>提示：链接是百度网盘，软件名是 sdn-training</p>
        <p>flag 中的链接去掉 http://</p>
        <p>flag{链接-密码}</p>

        <form method="POST">
            <input type="text" name="flag" placeholder="Enter Flag Here">
            <button type="submit">Submit</button>
        </form>
        <p id="result"><?php echo $message; ?></p>
    </div>
</body>
</html>
