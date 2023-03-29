<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * @param  Request  $request
     * @return View
     */
    public function __invoke(Request $request): View
    {
        return \view('admin.index');
    }
}
