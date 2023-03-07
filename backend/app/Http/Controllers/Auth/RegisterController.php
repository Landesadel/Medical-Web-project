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

    /**
     * @param  Request $request
     * @return JsonResponse
     */
    public function register(CreateRequest $request,)
    {
        dd($request);
        $validate = $request->validated();

        $user = $this->create($validate);


        if($user) {
            return response()->json([
                'accessToken' => true,
                'user'=>$user
            ]);
        }

        return response()->json([
            'error' => false,
        ]);
    }
}
