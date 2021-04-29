<!DOCTYPE html>
<html lang="en">
    <head>
      <title>idankario-ex4 php</title>
      <link rel="icon" href="images/icon.svg">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <!-- Bootstrap CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
      <link rel = "stylesheet" href="css/style.css" >
	</head>
<body>
   <!-- container -->
	<main class='container'>
    <section>
      <img src='images/love.svg' alt="love" title="love">
    </section>
		<section class="c">
      <header class="text-light">
        <h1>Our Product</h1>
      </header>
      <section class="col-sm-9 ">
        <h2>Name :</h2>
        <div class="col-sm-8 mb-5"><?php  echo $_GET["fullName"]; ?></div>
      </section>
      <section class="col-sm-9">
        <h2>Product name:</h2>
        <div class="col-sm-8 mb-5"><?php echo $_GET["productName"]; ?></div>
      </section>
      <section class="col-sm-9">
        <h2>Price:</h2>
        <div class="col-sm-8 mb-5"><?php echo $_GET["price"]; ?></div>
      </section>
    </section>	
	</main>
</body>
</html>
