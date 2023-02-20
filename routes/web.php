<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\DocumentationController;
use App\Http\Controllers\Admin\MapsController;
use App\Http\Controllers\Admin\SalesPointController;
use App\Http\Controllers\Admin\UserController;
use Illuminate\Support\Facades\Route;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

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

Route::group(['middleware' => ['auth', 'verified']], function () {

    // Dashboard root
    Route::get('/', [DashboardController::class, 'index']);
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Maps root
    Route::get('maps', [MapsController::class, 'index'])->name('maps');

    // User root
    Route::resource('users', UserController::class);
    Route::delete('users-mass-destroy', [UserController::class, 'massDestroy'])->name('users-mass-destroy');

    // Sales point root
    Route::resource('sales-point', SalesPointController::class);
    Route::delete('sales-point-mass-destroy', [SalesPointController::class, 'massDestroy'])->name('sales-point-mass-destroy');

    // Documentation point root
    Route::resource('documentation', DocumentationController::class);
    Route::delete('documentation-mass-destroy', [DocumentationController::class, 'massDestroy'])->name('documentation-mass-destroy');


});

require __DIR__.'/auth.php';
