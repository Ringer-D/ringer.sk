<!DOCTYPE html>
<html>

<?php
	include 'header.php';
?>


	<main>
		<article>
			<header class="post-header">
				<h1 class="post-title">Kontaktuj nás ☺</h1>
				<div class="sign"></div>
			</header>



			<div class="content container">


				<form action="#" class="contact-form">
					<label for="your-name">
						Your name (required)
						<input type="text" id="your-name" name="your-name">
					</label>

					<label for="your-email">
						Your email (required)
						<input type="email" id="your-email" name="your-email">
					</label>

					<label for="your-message">
						Your message
						<textarea id="your-message" name="your-message" cols="40" rows="10"></textarea>
					</label>

					<button class="btn_send">Send</button>
				</form>
			</div>
		</article>
	</main>

	<?php
		include 'footer.php';
	?>





</body>
</html>