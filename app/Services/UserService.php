<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function store(array $recordData): User
    {
        $record = User::create($recordData);

        return $record;
    }

    public function update(array $recordData, int $id): User
    {
        $record = User::findOrFail($id);
        $record->update($recordData);

        return $record;
    }

    public function destroy(int $id): bool
    {
        User::where('id', $id)->delete();

        return true;
    }

    public function massDestroy(array $ids): bool
    {
        User::whereIn('id', $ids)->delete();

        return true;
    }
}
