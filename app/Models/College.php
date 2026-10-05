<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class College extends Model
{
    use HasFactory;

    protected $table = 'colleges';

 protected $fillable = [
    'name',
    'city',
    'state',
    'type',
    'established_year',
    'description',
    'logo',
    'website',
    // 'stream',
    // 'degree',
    // 'study_mode',
    // 'specialization',
    // 'exam',
    'hostel_facilities',
    'hostel_fee',
    'facilities',
    'course_details',
];

protected $casts = [
    'course_details' => 'array',
];

    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
