<?php

namespace App\Models;
use App\Models\CollegeImage;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CollegeImage extends Model
{
    use HasFactory;

    protected $table = 'college_images';

    protected $fillable = [
        'college_id',
        'image_path',
    ];

    public function college()
    {
        return $this->belongsTo(College::class);
    }

}
