<?php
declare(strict_types=1);
$APP_NAME = 'Standalone Admin';
$REQUEST_TS = (int)floor(microtime(true) * 1000);
$FIXED_CREDENTIALS = [
    'analyst' => 'Analyst@123'
];
$FIXED_USERS = [
    ['id' => 1, 'username' => 'alice', 'email' => 'alice@example.com', 'role' => 'admin'],
    ['id' => 2, 'username' => 'bob', 'email' => 'bob@example.com', 'role' => 'editor'],
    ['id' => 3, 'username' => 'carol', 'email' => 'carol@example.com', 'role' => 'viewer'],
    ['id' => 4, 'username' => 'flag', 'email' => 'flag{d2cb23e9-efae-4853-b1f9-500fd4814a96}', 'role' => 'flag'],
];
