<?php

use App\Http\Controllers\SetupController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/admin', function () {return Inertia::render('Admin/Dashboard');})->middleware(['auth', 'verified'])->name('admin');

Route::group(['middleware' => ['userType:admin', 'auth', 'verified'], 'prefix'=>'admin', 'as' => 'admin.','namespace' => 'App\Http\Controllers\Admin'], function(){
    Route::get('/', function () {return Inertia::render('Admin/Dashboard');})->name('index');
    Route::resources([
        'category'          => CategoryController::class,
        'features'          => FeaturesController::class,
        'feature-label'     => FeatureLabelController::class,
        'facilities'        => FacilityController::class,
        'country'           => CountryController::class,
        'province'          => ProvinceController::class,
        'city'              => CityController::class,
        'subscribers'       => NewsSubscriberController::class,
        'banners'           => BannerController::class,
        'testimonial'       => TestimonialController::class,
        'content-page'      => ContentPageController::class,
        'navigation-menu'   => NavigationMenuController::class,
        'company-settings'  => CompanySettingsController::class,
        'app-settings'      => AppSettingsController::class,
        'support-tickets'   => TicketController::class,
        'property'          => TicketController::class,
        'sellers'           => VendorController::class,
        'role-responsibilities'=> RoleController::class
        
    ]);

    Route::get('provinces/{countryId}', 'CityController@getProvincesByCountry');
    Route::get('contact-messages', 'EnquiryController@contact_index')->name('contact_index');
    Route::get('contact-leads/{id}', 'EnquiryController@contact_show')->name('contact_show');
    Route::delete('contact-leads/{id}', 'EnquiryController@contact_delete')->name('contact_delete');
    Route::get('property-leads', 'EnquiryController@propery_leads_index')->name('propery_leads_index');
    Route::get('contact-leads/{id}', 'EnquiryController@propery_lead_show')->name('propery_lead_show');
    Route::delete('contact-leads/{id}', 'EnquiryController@propery_lead_delete')->name('propery_lead_delete');

    Route::get('seller-approvel', function () {return view('Admin.index');})->name('seller-approvel');
    Route::get('role-permissions', function () {return view('Admin.index');})->name('role-permissions');


});

Route::get('/', function () {
    return view('welcome');
})->name('index');


Route::get('/search', function () {
    return view('search');
});


Route::get('/agent', function () {
    return view('agent');
});

Route::get('/listing', function () {
    return view('listing');
});


Route::get('/contact', function () {
    return view('contact');
});

Route::get('/auth', function () {
    return view('auth.index');
});

Route::get('/auth/customer', function () {
    return view('auth.customer');
});

Route::get('/auth/agent', function () {
    return view('auth.agent');
});


require __DIR__.'/auth.php';
require __DIR__.'/seller.php';

// Route::get('/login', function () {
//     return view('auth.login');
// });

Route::get('/{slug}', function () {
    return view('page');
});