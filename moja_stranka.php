<!DOCTYPE html>
<html>

<?php
	include 'header.php';
?>


	<main>
		<article>

			<header class="post-header">
				<h1 class="post-title">Stránka o SUPER autách</h1>
				<div class="sign"></div>
			</header>

				<section class="gallery">
					<div class="gallery-set container" id="vsetko">
						<a href="img/cars/cars_7.jpg">
							<img src="img/cars/thumb_7.jpg" title="McLaren" height="192" width="341" alt="McLaren">
						</a>
						<a href="img/cars/cars_8.jpg">
							<img src="img/cars/thumb_8.jpg" title="car" height="192" width="341" alt="car">
						</a>
						<a href="img/cars/cars_9.jpg">
							<img src="img/cars/thumb_9.jpg" title="McLaren" height="192" width="341" alt="McLaren">
						</a>
						<a href="img/cars/cars_4.jpg">
							<img src="img/cars/thumb_4.jpg" title="Shelby" height="192" width="341" alt="Shelby">
						</a>
						<a href="img/cars/cars_5.jpg">
							<img src="img/cars/thumb_5.jpg" title="Audi" height="192" width="341" alt="Audi">
						</a>
						<a href="img/cars/cars_6.jpg">
							<img src="img/cars/thumb_6.jpg" title="VW" height="192" width="341" alt="VW">
						</a>
					</div>
					<div class="menu-select">		

						<label for="car-select">Choose a car:</label>
					
						<select name="cars" id="car-select">
							<option value="">--Please choose an option--</option>
							<option value="McLaren">McLaren</option>
							<option value="Shelby">Shelby</option>
							<option value="Audi">Audi</option>
							<option value="VW">VW</option>
							<option value="BMW">BMW</option>
							<option value="Skoda">Škoda</option>
						</select>
					
					</div>
				</section>
		</article>
	</main>

	<?php
		include 'footer.php';
	?>



<script src="js/jQuery3.5.1.min.js"></script>
<script src="js/moja_stranka.js"></script>

</body>
</html>