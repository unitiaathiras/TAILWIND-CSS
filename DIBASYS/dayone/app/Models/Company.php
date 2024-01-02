<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Enums\CompanyTypeEnum;

class Company extends Model
{
    use HasFactory;

    public $enumTypes = [
        CompanyTypeEnum::PRIVATE_COMPANY,
        CompanyTypeEnum::PUBLIC_COMPANY,
        CompanyTypeEnum::GOVERNMENT_COMPANY,
        CompanyTypeEnum::FOREIGN_COMPANY
    ];
}
