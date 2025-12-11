<?php
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $flag = $_POST['flag'] ?? '';
    if ($flag === 'flag{39-12}') {
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
    <title>Level 27 - 网络空间搜索引擎</title>
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
        <h1>LEVEL 27: 网络空间搜索引擎</h1>
        <p>目标：在 FOFA 引擎中通过长江工程职业技术学院的 Logo 搜索资产</p>
        <p>flag{匹配结果-独立 IP}</p>

        <form method="POST">
            <input type="text" name="flag" placeholder="Enter Flag Here">
            <button type="submit">Submit</button>
        </form>
        <p id="result"><?php echo $message; ?></p>
    </div>
</body>
</html>
