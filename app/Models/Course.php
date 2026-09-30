<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
    'name',
    'college_id',
    'start_date',
    'end_date',
    'length',
    'duration',
    'eligibility',
    'exam_required',
];

    public function college()
    {
        return $this->belongsTo(College::class);
    }
    


    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }
     public function students()
    {
        return $this->hasMany(Student::class);
    }
}
