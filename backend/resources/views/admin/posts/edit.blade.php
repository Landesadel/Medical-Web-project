@extends('layouts.admin')
@section('content')
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2">Редактирование поста</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
                <a href="{{ url(App\Classes\Helpers::getHost(true) . "/admin/posts") }}" class="btn btn-sm btn-outline-secondary">Назад</a>
                <button class="btn btn-sm btn-outline-secondary">#</button>
            </div>
        </div>
    </div>
    <div>
        @if ($errors->any())
            @foreach($errors->all() as $error)
                <x-alert type="danger" :message="$error"></x-alert>
            @endforeach
        @endif
        <form method="post" action="{{ url(App\Classes\Helpers::getHost(true) . "/admin/posts/" . $post->id) }}">
            @csrf
            @method('put')
            <div class="form-group">
                <label for="title">Заголовок</label>
                <input type="text" id="title" name="title" value="{{ $post->title }}" class="form-control @error('title') is-invalid @enderror">
            </div>
            <div class="form-group">
                <label for="description">Описание</label>
                <textarea id="description" name="description" class="form-control @error('description') is-invalid @enderror">{{ $post->description }}</textarea>
            </div>
            <br>
            <button type="submit" class="btn btn-sm btn-outline-secondary">Изменить</button>
        </form>
    </div>

@endsection
