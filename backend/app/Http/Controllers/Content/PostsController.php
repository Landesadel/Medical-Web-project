<?php

namespace App\Http\Controllers\Content;

use App\Http\Controllers\Controller;
use App\QueryBuilders\PostQueryBuilder;
use Illuminate\Http\JsonResponse;
use App\Models\Posts;
use App\Http\Requests\Posts\CreateRequest;
use App\Http\Requests\Posts\EditRequest;

class PostsController extends Controller
{

    /**
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        $posts = PostQueryBuilder::getAllPosts();

        dd($posts);
        if (!$posts) {
            return response()->json([
                'message' => 'что-то там',
            ], 400);
        }

        return response()->json($posts);

    }

    /**
     * Store a newly created resource in storage.
     * @param CreateRequest $request
     * @return JsonResponse
     */
    public function store(CreateRequest $request): JsonResponse
    {
        $post = Posts::create($request->validated());

        if ($post) {
            return response()->json($post, 201);
        }

        return response()->json([
            'message' => 'Error added post',
        ], 400);
    }

    /**
     * Display the specified resource.
     * @param int $id
     * @return JsonResponse
     */
    public function showPost(int $id): JsonResponse
    {
        $result = PostQueryBuilder::getPostById($id);

        if (!$result) {
            return response()->json([
                'message' => 'Error loading, post is not found',
            ], 404);
        }

        return response()->json($result);
    }

    /**
     * Update the specified resource in storage.
     * @param EditRequest $request
     * @return JsonResponse
     */
    public function update(EditRequest $request): JsonResponse
    {
        $update_data = $request->validated();

        $post = Posts::find($update_data['id']);
        $post->fill(['title' => $update_data['title'], 'description' => $update_data['description']]);

        if ($post->save()) {
            return response()->json([
                'id' => $post->id,
                'title' => $post->title,
                'description' => $post->description,
            ], 202);
        }

        return response()->json([
            'message' => 'Error loading, post is not updated',
        ], 400);
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(int $id): JsonResponse
    {
        $posts = new Posts();
        if ($posts->where('id', '=', $id)->delete()) {
            return response()->json([
                'id' => $id,
            ], 202);
        }

        return response()->json([
            'message' => 'Error, post was not deleted',
        ], 404);
    }

}
