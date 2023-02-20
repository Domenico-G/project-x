<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SalesPoint;
use Illuminate\Http\Request;

class MapsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $records = SalesPoint::all();

        return inertia('Admin/MapsPage', compact('records'));
    }
}
