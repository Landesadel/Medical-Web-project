<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Hash;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Requests\Users\CreateRequest;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateRequest $request)
    {
        $request['password'] = Hash::make($request->password);

        User::create($request->validated());

        return response()->json([
            'success' => true,
        ]);
    }
}
