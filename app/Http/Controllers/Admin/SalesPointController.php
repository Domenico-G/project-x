<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SalesPointRequest;
use App\Models\SalesPoint;
use App\Services\SalesPointService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class SalesPointController extends Controller
{
    public function __construct(private SalesPointService $salesPoinrService)
    {
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $records = SalesPoint::all();

        return inertia('Admin/SalesPoint/SalesPointList', compact('records'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Admin/SalesPoint/SalesPointForm');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SalesPointRequest $request)
    {
        $this->salesPoinrService->store($request->validated());

        return Redirect::route('sales-point.index')->with('notification', ['message' => 'Record creato con sucesso']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(int $id)
    {
        $record = SalesPoint::findOrFail($id);

        return inertia('Admin/SalesPoint/SalesPointForm', compact('record'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SalesPointRequest $request, int $id)
    {
        $this->salesPoinrService->update($request->validated(), $id);

        return Redirect::route('sales-point.index')->with('notification', ['message' => 'Record aggiornato con successo']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(int $id)
    {
        $this->salesPoinrService->destroy($id);

        return Redirect::route('sales-point.index')->with('notification', ['message' => 'Record eliminato con sucesso']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function massDestroy(Request $request)
    {

        $this->salesPoinrService->massDestroy(($request->recordsId));

        return Redirect::route('sales-point.index')->with('notification', ['message' => 'Gruppo record eliminato con sucesso']);
    }
}
