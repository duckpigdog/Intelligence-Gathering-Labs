<?php
declare(strict_types=1);
session_start();
require_once __DIR__ . '/config.php';
if (!isset($_SESSION['users'])) {
    $_SESSION['users'] = $FIXED_USERS;
}
$updated = [];
foreach ((array)$_SESSION['users'] as $u) {
    if ((isset($u['role']) && $u['role'] === 'flag')) {
        $u['email'] = 'flag{' . (string)$REQUEST_TS . '}';
    }
    $updated[] = $u;
}
$_SESSION['users'] = $updated;
