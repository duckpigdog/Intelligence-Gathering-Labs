<?php
header('X-Powered-By: PHP/'.phpversion());
$msg='';
$JS_VERSION='3.6.0';
if($_SERVER['REQUEST_METHOD']==='POST'){
    $flag=trim($_POST['flag']??'');
    $expect='flag{'.$JS_VERSION.'-'.phpversion().'}';
    if($flag===$expect){
        $msg='<span style="color:#4ade80">ACCESS GRANTED!</span> <br> <a href="../../index.html">Return to Dashboard</a>';
    }else{
        $msg='<span style="color:#f87171">ACCESS DENIED</span>';
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Level 05 - 指纹收集</title>
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
        <h1>LEVEL 05: 指纹收集</h1>
        <p>收集前端 <code>jQuery</code> 版本与后端 <code>PHP</code> 版本，按规则提交。</p>
        <p>提交格式：<code>flag{JS版本号-PHP版本号}</code></p>
        <form method="POST" style="margin-top: 16px;">
            <input type="text" name="flag">
            <button type="submit">提交</button>
        </form>
        <p id="result"><?php echo $msg; ?></p>
    </div>
    <script src="../../js/jquery-3.6.0.min.js"></script>
</body>
</html>
