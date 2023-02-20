<?php

namespace App\Services;

use App\Models\SalesPoint;

class SalesPointService
{
    public function store(array $recordData): SalesPoint
    {

        $taxonomy = $this->taxonomySalesPoint($recordData);

        $record = SalesPoint::create($recordData);

        $record->taxonomy = $taxonomy;
        $record->save();

        return $record;
    }

    public function update(array $recordData, int $id): SalesPoint
    {
        $record = SalesPoint::findOrFail($id);
        $record->update($recordData);

        return $record;
    }

    public function destroy(int $id): bool
    {
        SalesPoint::where('id', $id)->delete();

        return true;
    }

    public function massDestroy(array $ids): bool
    {
        SalesPoint::whereIn('id', $ids)->delete();

        return true;
    }

    private function taxonomySalesPoint($recordData)
    {

        return $recordData['name'] . " - " . $recordData['denomination'] . " - " . $recordData['spc'] . " - " . $recordData['street'] . " " . $recordData['street_number'] . ", " . $recordData['city'] . " (" . $recordData['province'] . ")";

    }
}
