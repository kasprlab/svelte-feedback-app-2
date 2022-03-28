<script>
		import FeedbackList from './components/FeedbackList.svelte'

		let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed.'
		},
		{
			id: 2,
			rating: 9,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed.'
		},
		{
			id: 3,
			rating: 8,
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed lectus vestibulum mattis ullamcorper velit sed.'
		}
	]

</script>

<main class="container">
	<FeedbackList {feedback}/>
</main>
