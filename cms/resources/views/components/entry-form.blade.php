@props(['action' => route('entries.add'), 'entry' => null, 'put' => false])

<form action="{{ $action }}" method="POST" enctype="multipart/form-data">
    @csrf
    @if($put)
        @method('PUT')
    @endif

    <section class="panes">
        <div class="pane">
            <h3>Main Content</h3>

            <x-form-field
                type="text"
                label="Title"
                id="entry-title"
                name="title"
                :value="$entry?->title"
                required
                autofocus
            />

            <x-form-field
                type="editor"
                label="Content"
                id="entry-content"
                name="content"
                :value="$entry?->content"
                required
            />
        </div>

        @for($i = 0; $i < 3; $i++)
            <div class="pane">
                <h3>Book {{ $i + 1 }} Spoilers</h3>

                <x-form-field
                    type="text"
                    label="Title"
                    id="entry-spoiler-{{ $i }}-title"
                    name="spoilers[{{ $i }}][title]"
                    :value="isset($entry?->spoilers[$i]['title']) ? $entry->spoilers[$i]['title'] : null"
                />

                <x-form-field
                    type="editor"
                    label="Content"
                    id="entry-spoiler-{{ $i }}-content"
                    name="spoilers[{{ $i }}][content]"
                    :value="isset($entry?->spoilers[$i]['content']) ? $entry->spoilers[$i]['content'] : null"
                />
            </div>
        @endfor
    </section>

    <section class="shared">
        <h3>Shared Information</h3>

        <div class="slug">
            <x-form-field
                type="text"
                label="Slug"
                id="entry-slug"
                name="slug"
                :value="$entry?->slug"
                required
            />
        </div>

        <div class="category">
            <label for="entry-category">Category</label>

            <select id="entry-category" name="category" required>
                <option value disabled selected>-- Choose --</option>

                @foreach(config('categories') as $key => $category)
                    <option
                        value="{{ $key }}"
                        @selected($key === $entry?->category)
                    >
                        {{ $category['name'] }}
                    </option>
                @endforeach
            </select>
        </div>

        <div
            x-data="{
                remove: false,
                src: {{ $entry?->hero ? sprintf("'%s'", $entry->getHero()) : 'null' }}
            }"
            class="hero"
        >
            <div class="image present" x-show="src">
                <span>Hero Image</span>

                <button
                    @click="
                        remove = true
                        src = null
                        $refs.hero.value = null
                    "
                    type="button"
                >
                    Remove
                </button>

                <input type="checkbox" name="remove_hero" :checked="remove" />

                <img :src="src" />
            </div>

            <div class="image empty" x-show="!src">
                <label for="entry-hero">Hero Image</label>

                <input
                    @change="
                        remove = false
                        const reader = new FileReader()
                        reader.onload = (e) => {
                            src = e.target.result
                        }
                        reader.readAsDataURL($refs.hero.files[0])
                    "
                    type="file"
                    id="entry-hero"
                    name="hero"
                    x-ref="hero"
                />

                <button @click="$refs.hero.click()" type="button">
                    Choose
                </button>
            </div>
        </div>

        <div class="button">
            <button type="submit">{{ $put ? 'Update' : 'Add' }}</button>
        </div>
    </section>
</form>
