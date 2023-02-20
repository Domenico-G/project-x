<?php

namespace App\Services;

use App\Models\Documentation;

class DocumentationService
{
    public function store(array $recordData): Documentation
    {

        $record = Documentation::create($recordData);
        $record->save();

        return $record;
    }

    public function update(array $recordData, int $id): Documentation
    {
        $record = Documentation::findOrFail($id);
        $record->update($recordData);

        return $record;
    }

    public function destroy(int $id): bool
    {
        Documentation::where('id', $id)->delete();

        return true;
    }

    public function massDestroy(array $ids): bool
    {
        Documentation::whereIn('id', $ids)->delete();

        return true;
    }
}
