<?php
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $flag = $_POST['flag'] ?? '';
    if ($flag === 'flag{陕西理工大学就业指导与服务中心-陕西理工大学信息化处-我在陕西工-陕西理工大学后勤保障部-陕西理工大学财务处-陕理工教师教育中心}') {
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
    <title>Level 10 - 服务号收集</title>
    <link rel="stylesheet" href="../../css/challenge.css">
</head>
    <style>
        body { font-size: 18px; }
        .container { max-width: 900px; padding: 60px; }
        h1 { font-size: 2.2rem; }
        input[type="text"] { padding: 12px 16px; font-size: 16px;  width: 48ch;}
        button { padding: 12px 20px; font-size: 16px; }
        #result { font-size: 18px; }
    </style>
<body>
    <div class="container">
        <h1>LEVEL 10: 服务号收集</h1>
        <p>目标：收集陕西理工大学官方使用的服务号中含有链接的服务号</p>
        <p>flag{服务号名-服务号名-……}</p>

        <form method="POST">
            <input type="text" name="flag" placeholder="Enter Flag Here">
            <button type="submit">Submit</button>
        </form>
        <p id="result"><?php echo $message; ?></p>
    </div>
</body>
</html>

