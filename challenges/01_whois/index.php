<?php
$message = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $flag = $_POST['flag'] ?? '';
    if ($flag === 'flag{MarkMonitor Inc.-12086851750-abusecomplaints@markmonitor.com-2028年09月14日}') {
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
    <title>Level 01 - Whois 查询</title>
    <link rel="stylesheet" href="../../css/challenge.css">
</head>
<body>
    <div class="container">
        <h1>LEVEL 01: WHOIS 查询</h1>
        <p>目标：收集域名 google.com 的 Whois 信息</p>
        <p>flag{注册商-注册商电话-注册商邮箱-过期时间}</p>

        <form method="POST">
            <input type="text" name="flag" placeholder="Enter Flag Here">
            <button type="submit">Submit</button>
        </form>
        <p id="result"><?php echo $message; ?></p>
    </div>
</body>
</html>

