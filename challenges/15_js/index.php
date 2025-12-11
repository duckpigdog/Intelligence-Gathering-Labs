<?php
$msg='';
if($_SERVER['REQUEST_METHOD']==='POST'){
    $flag=trim($_POST['flag']??'');
    if($flag==='FLAG{j5_ap1_l34k_1s_r34l}'){
        $msg='<span style="color:#4ade80">ACCESS GRANTED!</span> <br> <a href="../../index.html">Return to Dashboard</a>';
    }else{
        $msg='<span style="color:#f87171">ACCESS DENIED</span>';
    }
}
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>Level 15 - JS 接口泄露</title>
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
        <h1>LEVEL 15: JavaScript 接口泄露</h1>
        <p>目标：收集信息找到 flag</p>
        <p>提交格式：<code>FLAG{...}</code></p>

        <form method="POST" style="margin-top: 16px;">
            <input type="text" name="flag" style="width:48ch;">
            <button type="submit">提交</button>
        </form>
        <p id="result"><?php echo $msg; ?></p>
    </div>
    <script src="./app.js"></script>
</body>
</html>

