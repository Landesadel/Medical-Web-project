<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\JsonResponse;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Http\Requests\Users\CreateRequest;
use Illuminate\Http\Request;

class RegisterController extends Controller


{
    /**
     * @param CreateRequest $request
     * @return JsonResponse
     */
    public function __invoke(CreateRequest $request): JsonResponse
    {

        $user = User::create(array_merge(
            $request->except('password'),
            ['password' => bcrypt($request->pasword)],
        ));

        return response()->json([
            'success' => true,
            
         ], 201);
    }
}
