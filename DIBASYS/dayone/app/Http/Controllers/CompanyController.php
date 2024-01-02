<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dto\CompanyCreateDto;
use App\Models\Company;
use App\Repositories\CompanyRepository;

class CompanyController extends Controller
{
    private $companyRepository;

    public function __construct(CompanyRepository $companyRepository)
    {
        $this->companyRepository = $companyRepository;
    }
    public function createCompany(Request $request)
    {
        $dto = new CompanyCreateDto(
            $request->input('company_id'),
            $request->input('name'),
            $request->input('description'),
            $request->input('phone_number'),
            $request->input('type'),
            $request->input('website')
        );

        $this->companyRepository->createCompany([
            'company_id' => $dto->company_id,
            'name' => $dto->name,
            'description' => $dto->description,
            'phone_number' => $dto->phone_number,
            'type' => $dto->type,
            'website' => $dto->website,
        ]);

        return response()->json(['message' => 'Company created successfully']);
    }
}
