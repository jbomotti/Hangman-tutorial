# Steps for Buttons Area

0. Comment out the buttons area (stake the space)

1. Insert another .container-fluid in the Buttons column

2. Add a div row to contain the buttons (rows live in containers)
		- search: bootstrap btn sizes
		- .outline .row #id-button-row

3. Add three (3) button tags 
	- add the title text in each buttons(start, guess, and reset)
	- add .outline .col-md-4 to distribute evenly
	- add .btn-block to take up the block space

4. Vertical and Horizontally center the button block
	- css transform: translate (-50%, -50%) from CSS Tricks
 	- set up code in CSS for #button-row
 		- Dump search from CSS tricks"center w bootstrap.."
 		- `#button-row {`
			  `position: absolute;`
			  `top: 50%;`
			  `left:50%;`
			  `transform: translate(-50%,-50%);`
			`}`

5. Celebrate!
