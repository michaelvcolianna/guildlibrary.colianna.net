<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;
use Orbit\Concerns\Orbital;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class Entry extends Model
{
    use HasSlug;
    use Orbital;

    const HERO_RELATIVE = '../../storage/app/public/';

    protected $guarded = [];

    protected $casts = [
        'spoilers' => 'array',
    ];

    public static function schema(Blueprint $table)
    {
        $table->unsignedTinyInteger('ordering')->default(0);
        $table->string('title');
        $table->string('slug');
        $table->string('category');
        $table->string('hero', 2048)->nullable();
        $table->json('spoilers')->nullable();
    }

    public function getKeyName()
    {
        return 'slug';
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('title')
            ->saveSlugsTo('slug')
            ->doNotGenerateSlugsOnUpdate();
    }

    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected function getMarkdown($clean = false)
    {
        $markdown = str($this->content)->markdown();

        return $clean
            ? strip_tags($markdown)
            : $markdown
        ;
    }

    public function getExcerpt()
    {
        return str($this->getMarkdown(true))->limit(100)->toHtmlString();
    }

    public function getContent()
    {
        return $this->getMarkDown()->toHtmlString();
    }

    public function realHeroPath()
    {
        return str($this->hero)->replace(static::HERO_RELATIVE, '');
    }

    public function getHero()
    {
        return asset('storage/'.$this->realHeroPath());
    }

    public function addHero($file)
    {
        $this->hero = static::HERO_RELATIVE.$file->store();
        $this->save();
    }

    public function removeHero()
    {
        if($this->hero)
        {
            Storage::delete($this->realHeroPath());
            $this->hero = null;
            $this->save();
        }
    }
}
