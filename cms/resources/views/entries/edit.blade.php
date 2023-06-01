<x-layout>
    <x-slot:title>Edit Entry</x-slot:title>

    <a
        class="back"
        href="{{ route('entries.list', ['key' => $entry->category]) }}"
    >
        <x-back-chevron />
        Back to {{ config('categories.'.$entry->category.'.name') }}
    </a>

    <x-entry-form
        :action="route('entries.update', $entry)"
        :entry="$entry"
        :put="true"
    />
</x-layout>
