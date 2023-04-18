<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisteredUserRequest;
use App\Http\Requests\Auth\UpdateUserRequest;
use App\Models\Account;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisteredUserController extends Controller
{
    /**
     * @param RegisteredUserRequest $request
     * @return JsonResponse
     */
    public function store(RegisteredUserRequest $request): JsonResponse
    {
        $request->validated();
        $request->merge(['password' => Hash::make(request('password'))]);
        $account = Account::create(
            $request->all()
        );
        if ($account) {

            $user = $account->userOne()->create($request->all());

            event(new Registered($account));
            Auth::login($account);

            $user['email'] = $account->email;

            return response()->json([
                'user' => $user,
                'accessToken' => $account->createToken(name: 'accessToken', expiresAt: now()->modify("+1 day"))->plainTextToken
            ]);
        }
        return response()->json([
            'error' => 'User and account were not created',
        ], 401);
    }

    public function update(UpdateUserRequest $request): JsonResponse
    {
        $request->validated();
        $id = \auth()->id();
        $account = Account::where('id', $id)->firstOrFail();

        if ($account) {
            $account->userOne()->update($request->all());
            $user =$account->userOne()->first();
            $user['email'] = $account->email;
                return response()->json([
                'user' => $user,
                'accessToken' => $account->createToken(name: 'accessToken', expiresAt: now()->modify("+1 day"))->plainTextToken
            ]);
        }
        return response()->json([
            'error' => 'Account were not updated',
        ], 404);
    }

}
