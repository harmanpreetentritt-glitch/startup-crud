<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
    'name',
    'start_date',
    'end_date',
    'length',
    'duration'
];
    


    public function subjects()
    {
        return $this->hasMany(Subject::class);
    }
     public function students()
    {
        return $this->hasMany(Student::class);
    }
}
