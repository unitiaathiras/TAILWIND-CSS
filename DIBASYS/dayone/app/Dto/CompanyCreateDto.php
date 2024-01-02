<?php

namespace App\Dto;

class CompanyCreateDto
{
    public string $company_id;
    public string $name;
    public ?string $description;
    public string $phone_number;
    public string $type;
    public string $website;

    public function __construct(
        string $company_id,
        string $name,
        ?string $description,
        string $phone_number,
        string $type,
        string $website
    ){
        $this->company_id = $company_id;
        $this->name = $name;
        $this->description = $description;
        $this->phone_number = $phone_number;
        $this->type = $type;
        $this->website = $website;
    }
}
?>
