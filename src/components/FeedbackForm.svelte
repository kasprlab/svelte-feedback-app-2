<script>
import Card from './Card.svelte'
import Button from './Button.svelte'

let text = ''
let btnDisable = true
let min = 10
let message

const handleInput = () => {
  if(text.trim().length <= min){
    message = `Text must be at lease ${min} characters`
    btnDisable = true
  } else {
    message = null
    btnDisable = false
  }

}
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form action="">
    <!-- Rating Select-->
    <div class="input-group">
      <input type="text" on:input={handleInput} bind:value={text} Placeholder="Tell us something that keeps you coming back">
      <Button disabled={btnDisable} type="submit">Send</Button>
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
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

  .message {
    text-align: center;
    color: rebeccapurple;
    padding-top: 10px;

  }
</style>