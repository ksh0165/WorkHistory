<?php

use App\Post;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    //return view('welcome');
    $posts = Post::orderBy('created_at','asc')->get();
    
    return view('posts.index',[
        'posts' => $posts
    ]);
});
Route::post('/post',function(Request $request){
  //$validator = Validator::make($request->all(),[
  //  'title' => 'required|max:255',
  //  'description' => 'required|max:255',
  //]);
  //if($validator->fails()){
  //  return redirect('/')->withInput()->withErrors($validator);
  //}
  $post = new Post;
  $post->title = $request->title;
  $post->description = $request->description;
  $post->save();
  return redirect('/');
});
Route::get('/post/create','PostController@create');
Route::delete('/post/{post}',function(Post $post){
    $post->delete();
    return redirect('/');
});
