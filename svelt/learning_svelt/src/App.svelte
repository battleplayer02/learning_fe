<script>
  import Header from "./Header.svelte";
  import Modal from "./components/Modal.svelte";

  let isOpen = false;
  let message = "welcome to new svelt project";
</script>

<Modal {message} {isOpen} />
<Header />
<div class="mt-10 text-3xl mx-auto max-w-6xl">
  <div>Name: learning_svelt</div>
  <div>Framework: svelte</div>
  <div>Language: TypeScript</div>
  <div>CSS: Tailwind new Project</div>
  <button
    class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
    on:click={() => {
      isOpen = !isOpen;
    }}>Open Model</button
  >
</div>
