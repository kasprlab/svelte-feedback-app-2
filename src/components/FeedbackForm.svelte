<script>
import Card from './Card.svelte'
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form action="">
    <!-- Rating Select-->
    <div class="input-group">
      <input type="text" Placeholder="Tell us something that keeps you coming back">
      <button>Send</button>
    </div>
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

</style>