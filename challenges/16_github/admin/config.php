<?php
declare(strict_types=1);
$APP_NAME = 'Standalone Admin';

$FIXED_CREDENTIALS = [
    'analyst' => 'Analyst@123'
];
$FIXED_USERS = [
    ['id' => 1, 'username' => 'alice', 'email' => 'alice@example.com', 'role' => 'admin'],
    ['id' => 2, 'username' => 'bob', 'email' => 'bob@example.com', 'role' => 'editor'],
    ['id' => 3, 'username' => 'carol', 'email' => 'carol@example.com', 'role' => 'viewer'],
    ['id' => 4, 'username' => 'flag', 'email' => 'flag{5d7d66eb-7266-412f-8d14-d0d4f2f14f00}', 'role' => 'flag'],
];
