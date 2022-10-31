<script>
  import { createEventDispatcher, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  const dispatch = createEventDispatcher();
  const close = () => dispatch("close");

  let modal;

  const handle_keydown = (e) => {
    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "Tab") {
      // trap focus
      const nodes = modal.querySelectorAll("*");
      const tabbable = Array.from(nodes).filter((n) => n.tabIndex >= 0);

      let index = tabbable.indexOf(document.activeElement);
      if (index === -1 && e.shiftKey) index = 0;

      index += tabbable.length + (e.shiftKey ? -1 : 1);
      index %= tabbable.length;

      tabbable[index].focus();
      e.preventDefault();
    }
  };

  const previously_focused = typeof document !== "undefined" && document.activeElement;

  if (previously_focused) {
    onDestroy(() => {
      previously_focused.focus();
    });
  }
</script>

<svelte:window on:keydown={handle_keydown} />

<!-- <svelte:head>
  {#if modal}
    <style>
      body {
        overflow: hidden;
      }
    </style>
  {/if}
</svelte:head> -->

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="modal-background" on:click={close} transition:fade />
<div class="modal" role="dialog" aria-modal="true" bind:this={modal} transition:fade>
  <button type="button" on:click={close} class="	">
    <slot />
    <!-- svelte-ignore a11y-autofocus -->
  </button>
</div>

<style>
  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @apply bg-white/80 backdrop-blur z-[999];
  }

  :global(.dark) .modal-background {
    @apply bg-gray-900/80;
  }

  .modal {
    position: fixed;
    left: 50%;
    top: 50%;
    width: calc(100vw - 3em);
    @apply max-w-4xl z-[1000];
    overflow: auto;
    transform: translate(-50%, -50%);
    border-radius: 0.2em;
  }
</style>
