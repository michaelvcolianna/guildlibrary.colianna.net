<?php

use App\Models\Entry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::view('/', 'entries.add')->name('home');

Route::get('/category/{key}', function($key) {
    return view('entries.list', [
        'key' => $key,
        'entries' => Entry::where('category', $key)->orderBy('ordering')->get(),
    ]);
})->name('entries.list');

Route::post('/entries/add', function(Request $request) {
    $entry = Entry::create($request->except(['_token', 'hero']));

    if($request->hasFile('hero'))
    {
        $entry->addHero($request->hero);
    }

    return redirect()->route('entries.list');
})->name('entries.add');

Route::get('/entries/{entry}', function(Entry $entry) {
    return view('entries.edit', [
        'entry' => $entry,
    ]);
})->name('entries.edit');

Route::put('/entries/{entry}/update', function(Request $request, Entry $entry) {
    $entry->update($request->except(['_token', '_method', 'hero', 'remove_hero']));

    if($request->hasFile('hero'))
    {
        $entry->removeHero();
        $entry->addHero($request->hero);
        $entry->save();
    }

    if($request->boolean('remove_hero'))
    {
        $entry->removeHero();
    }

    $entry->updateExcerpts();

    return redirect()->route('entries.edit', $entry);
})->name('entries.update');
