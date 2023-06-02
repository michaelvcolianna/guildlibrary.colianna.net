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
        $table->text('excerpt')->nullable();
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

    public function getMarkdown($clean = false)
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

    public function getHero()
    {
        return asset('storage/'.$this->hero);
    }

    public function addHero($file)
    {
        $this->hero = $file->store('entries');
        $this->save();
    }

    public function removeHero()
    {
        if($this->hero)
        {
            Storage::delete($this->hero);
            $this->hero = null;
            $this->save();
        }
    }

    public function updateExcerpts()
    {
        $excerpt = str($this->getMarkdown(true))->limit(100);

        $spoilers = $this->spoilers;

        for($i = 0; $i < 3; $i++)
        {
            $spoilers[$i]['excerpt'] = $spoilers[$i]['content']
                ? str(strip_tags(str($spoilers[$i]['content'])->markdown()))->limit(100)->toString()
                : null
            ;
        }

        $this->excerpt = $excerpt->toString();
        $this->spoilers = $spoilers;

        $this->save();
    }
}
