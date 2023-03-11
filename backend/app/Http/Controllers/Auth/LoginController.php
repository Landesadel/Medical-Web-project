<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Users\LoginRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * @param LoginRequest $request
     * @return JsonResponse
     */
    public function __invoke(LoginRequest $request): JsonResponse
    {
        $validate = $request->validated();

       if(Auth::attempt($validate)) {

        $token = $request->user()->createToken('token_api')->plainTextToken;

        return response()->json([
            'user' => Auth::user(),
            'token' => $token
        ], 201);    
    }

        return response()->json([
            'success' => false,
            'message' => "wrong password or login"
        ]);
        
    }
}