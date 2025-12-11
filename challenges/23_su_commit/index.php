<?php
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $flag = $_POST['flag'] ?? '';
    if ($flag === 'flag{1476698683@qq.com}') {
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
    <title>Level 23 - commit 提交溯源</title>
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
        <h1>LEVEL 23: commit 提交溯源</h1>
        <p>目标：对项目 PHP-Code-Sec 进行 commit 提交溯源，找到项目的贡献者 mhszed 邮箱</p>
        <p>项目地址：https://github.com/duckpigdog/PHP-Code-Sec</p>
        <p>flag{duckpigdog@gmail.com}</p>

        <form method="POST">
            <input type="text" name="flag" placeholder="Enter Flag Here">
            <button type="submit">Submit</button>
        </form>
        <p id="result"><?php echo $message; ?></p>
    </div>
</body>
</html>
