<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class SalesPointRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string', 'max:50'],
            'denomination' => ['required', 'string', 'max:50'],
            'street' => ['required', 'string'],
            'street_number' => ['required', 'string'],
            'description' => ['required', 'string'],
            'note' => ['required', 'string'],
            'phone' => ['required', 'string', 'max:15'],
            'state' => ['required', 'string', 'max:50'],
            'province' => ['required', 'string', 'max:100'],
            'city' => ['required', 'string', 'max:100'],
            'spc' => ['required', 'string', 'max:100'],
            'postcode' => ['required', 'string', 'max:10'],
            'latitude' => ['required'],
            'longitude' => ['required'],
        ];
    }
}
