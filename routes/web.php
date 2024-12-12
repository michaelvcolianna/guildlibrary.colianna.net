<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::fallback(function (Request $request) {
    $realPath = str_replace('category', '', $request->path());

    return redirect('https://appendix.mvc.ink'.$realPath);
});
