function plug()
{
	closeall();
	document.getElementById("plug").style.display = ''; 
	removeclass();
	addclass("plug_btn");
}
function shopping()
{
	closeall();
	document.getElementById("shopping").style.display = '';
	removeclass();
	addclass("shopping_btn");
}
function couch()
{
	closeall();
	document.getElementById("couch").style.display = ''; 
	removeclass();
	addclass("couch_btn");
}
function gem()
{
	closeall();
	document.getElementById("gem").style.display = ''; 
	removeclass();
	addclass("gem_btn");
}
function ronight()
{
	closeall();
	document.getElementById("ro").style.display = '';
	removeclass();
	addclass("RoNight_btn");
}
function torri()
{
	closeall();
	document.getElementById("to").style.display = '';
	removeclass();
	addclass("Torri_btn");
}
function closeall()
{
	document.getElementById("plug").style.display = 'none';
	document.getElementById("shopping").style.display = 'none';
	document.getElementById("couch").style.display = 'none';
	document.getElementById("gem").style.display = 'none';
	document.getElementById("ro").style.display = 'none';
	document.getElementById("to").style.display = 'none';
}
function removeclass()
{
	document.getElementById("plug_btn").classList.remove('is-active');
	document.getElementById("shopping_btn").classList.remove('is-active');
	document.getElementById("couch_btn").classList.remove('is-active');
	document.getElementById("gem_btn").classList.remove('is-active');
	document.getElementById("RoNight_btn").classList.remove('is-active');
	document.getElementById("Torri_btn").classList.remove('is-active');
}
function addclass(btname)
{
	document.getElementById(btname).classList.add('is-active');	
}