<script>
    export let message = "default message";
    export let isOpen = false;
    $: console.log(isOpen);
</script>

{#if isOpen}
    <div class="fixed inset-0 flex items-center justify-center z-50">
        <div
            class="fixed inset-0 bg-gray-800 opacity-50 transition-opacity duration-300"
        />
        <div class="w-full max-w-lg mx-auto overflow-hidden z-10">
            <div
                class="bg-white rounded-lg shadow-xl transform transition-all duration-300"
            >
                <!-- Modal content goes here -->
                <div class="p-6">
                    <h2 class="text-3xl font-bold mb-4">Modal Title</h2>
                    <p class="text-gray-800 mb-6">{message}</p>
                    <div class="flex justify-end">
                        <button
                            on:click={() => {
                                console.log(isOpen)
                                isOpen = !isOpen;
                            }}
                            class="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded"
                        >
                            Close It !
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
