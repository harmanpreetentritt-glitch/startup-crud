<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Course;

class Subject extends Model
{
    protected $fillable = ['name', 'course_id'];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}