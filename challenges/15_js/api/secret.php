<?php
header('Content-Type: application/json');
$key = $_GET['key'] ?? '';
$headerKey = $_SERVER['HTTP_X_API_KEY'] ?? '';

if ($key === 'js-dev-2025' || $headerKey === 'js-dev-2025') {
    echo json_encode(['flag' => 'FLAG{j5_ap1_l34k_1s_r34l}']);
} else {
    http_response_code(403);
    echo json_encode(['error' => 'forbidden']);
}

