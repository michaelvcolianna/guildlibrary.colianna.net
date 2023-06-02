<x-layout>
    <x-slot:title>{{ config('categories.'.$key.'.name') }}</x-slot:title>

    <ul class="listing">
        @foreach($entries as $entry)
            <li>
                <img src="{{ $entry->hero ? $entry->getHero() : asset('storage/unknown.jpg') }}" />

                <a href="{{ route('entries.edit', $entry) }}">
                    {{ $entry->title }}
                </a>

                <div class="accent">{{ $entry->getExcerpt() }}</div>
            </li>
        @endforeach
    </ul>
</x-layout>
