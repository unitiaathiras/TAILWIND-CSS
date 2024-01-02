<?php 

namespace App\Repositories;

use App\Models\Company;
use Illuminate\Database\Eloquent\Collection;

class CompanyRepository
{
    public function createCompany(array $data): Company
    {
        return Company::create($data);
    }

    public function updateCompany(string $ExternalId, array $data): bool
    {
        $company = Company::where('company_id', $ExternalId)->first();

        if (!$company){
            return false;
        }

        return $company->update($data);
    }

    public function getOneById(string $companyId): ?Company
    {
        return Company::where('company_id', $companyId)->first();
    }

    public function getAll(): Collection
    {
        return Company::all();
    }

    public function delete(string $companyId): bool
    {
        $company = Company::where('company_id', $companyId)->first();

        if(!$company){
            return false;
        }
        return $company->delete();
    }
}
?>
