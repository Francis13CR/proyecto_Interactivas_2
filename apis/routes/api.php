<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('categories', [CategoryController::class, 'index']);
Route::post('saveNews', [NewsController::class, 'create']);
Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/news', [NewsController::class, 'index']);
Route::get("news/detail/{id}", [NewsController::class, "detail"]);
Route::post('register', [AuthController::class, 'register']);
Route::get("news/related/{id}/{category}", [NewsController::class, "related"]);
Route::post('login', [AuthController::class, 'login'])->name("login");

Route::middleware(['auth:sanctum'])->group( function () {
Route::get('logout', [AuthController::class, 'logout']);
});
route::get('/userinfo',[UserController::class, 'index']);
Route::post('/password',[UserController::class, 'changepassword']);
Route::get('/news/category/{category}', [NewsController::class, 'filter']);
