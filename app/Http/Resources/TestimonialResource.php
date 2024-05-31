<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class TestimonialResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'            => $this->id,
            'name'          => $this->name,
            'company_name'  => $this->company_name,
            'designation'   => $this->designation,
            'message'       => $this->message,
            'position'      => $this->position,
            'status'        => $this->status == 1 ? 'Published' : 'Draft',
            'image'         => $this->image && !(str_starts_with($this->image, 'http')) ?
                                asset('images/'.$this->image) : 'dummy.png',
            'created_at'    => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at'    => (new Carbon($this->updated_at))->format('Y-m-d'),
          
        ];
    }
}