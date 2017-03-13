# Steps for Display area

1. Comments around the display section in html
2. set up a div for a table 
	- goal is 3x3 for a total 9 guesses
	- google search for 'html tables'
3. Make a table tag
	- insert 3 tr's
	- insert td in each (3x)
	- insert id name for each row
	- insert content into each tile (tile #)
4. Create classes and ids 
	- table: .table (Bootstrap) .display-table
	- table row: .outline .table-rows
	- table data: .outline .table-tile
	- table data: .tile0X, where x is a number 1-9

*** View over in the brower

5. Add a background image
	- find an image file online and save the url
	- set as backgorund image for #display-table (CSS)
	- adjust height & width to 100% to allow for full image
	- set background-size to 100% to preserve the picture

6. Style the Tile
	- Set tile color to smoke white
	- set opacity at .98 (98%)