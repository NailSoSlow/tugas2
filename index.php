<?php
$current_page = 'none';
if (isset($_GET['page'])) {
    $current_page = $_GET['page'];
}

require "app/header.php";

switch ($current_page) {
    case 'detail':
        include 'app/views/detail.php';
        break;
    case 'page':
        include 'app/views/page.php';
        break;
    case 'category':
        include 'app/views/category.php';
        break;
    case 'home':
    default:
        include 'app/views/home.php';
        break;
}

require "app/footer.php";
?>